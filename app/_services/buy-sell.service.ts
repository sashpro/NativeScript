/* Buy - Sell service */
import { Injectable }                                 from '@angular/core';
import { Response }                                   from '@angular/http';
import { Observable }                                 from 'rxjs/Observable';
import 'rxjs/Rx';

import { Exchange, ExchangeRate }                     from '../_models/index';
import { WalletService }                              from './wallet.service';
import { ApiService }                                 from './api.service';


@Injectable()
export class BuySellService {
    buyExchangeModel = new Exchange;
    sellExchangeModel = new Exchange;

    constructor( private http: ApiService,
                 private walletService: WalletService ) { }

    newBuyExchangeModel() {
        /*
        Get new buy exchange model
        :return: buy model
         */
        this.buyExchangeModel = new Exchange;
        this.buyExchangeModel["operation"] = "BUY";
        this.buyExchangeModel["amount"] = 0;
        this.buyExchangeModel["other_amount"] = 0;
        return this.buyExchangeModel;
    }

    getBuyExchangeModel() {
        /*
        Get buy exchange model
        :return: buy model
         */
        return this.buyExchangeModel;
    }

    newSellExchangeModel() {
        /*
        Get new sell exchange model
        :return: sell model
         */
        this.sellExchangeModel = new Exchange;
        this.sellExchangeModel["operation"] = "SELL";
        this.sellExchangeModel["amount"] = 0;
        this.sellExchangeModel["other_amount"] = 0;
        return this.sellExchangeModel;
    }

    getSellExchangeModel() {
        /*
        Get sell exchange model
        :return: sell model
         */
        return this.sellExchangeModel;
    }

    exchangeRate(exchangeRate: ExchangeRate) {
        /*
        Get exchange rate
        :return: rate
         */
        return this.http.get('/rates_fee/exchange_rate/?operation=' + exchangeRate.operation + '&wallet_from_currency=' + exchangeRate.wallet_from_currency + '&wallet_to_currency=' + exchangeRate.wallet_to_currency)
            .map((response: Response) => { return response.json();});
    }

    exchange(exchange: Exchange) {
        /*
        Buy or sell some currency
        :return:
         */
        return this.http.post('/wallet/exchange/',
                  {
                   "operation": exchange.operation,
                   "amount": exchange.amount,
                   "message": exchange.message,
                   "wallet_to": exchange.wallet_to.pk,
                   "wallet_from": exchange.wallet_from.pk,
                  },)
            .map((response: Response) => { this.walletService.refreshWallets();});
    }
}
