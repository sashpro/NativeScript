import { Component, OnInit }                          from '@angular/core';
import { FormGroup, FormControl, Validators}          from '@angular/forms';

import { BuySellService, WalletService }              from '../_services/index';
import { Exchange, ExchangeRate, Wallet }             from '../_models/index';


@Component({
    selector: 'buy-sell-buy',
    templateUrl: './buy-sell-buy.component.html',
    styleUrls: ['./buy-sell-buy.component.css']
})
export class BuySellBuyComponent implements OnInit {

    operation = "BUY";
    wallets: Wallet[];
    walletsFrom: Wallet[];
    walletsTo: Wallet[];
    currencyFrom = 'USD';
    buyModel = new Exchange;
    buyForm: FormGroup;
    exchangeRateModel = new ExchangeRate;
    messageSuccess = false;
    messageError: string;

    constructor( private buySellService: BuySellService,
                 private walletService: WalletService,) {
        this.buyForm = new FormGroup({
            "wallet_from": new FormControl("", Validators.required),
            "wallet_to": new FormControl("", Validators.required),
            "amount": new FormControl("", [Validators.required, Validators.min(0)]),
            "other_amount": new FormControl("", Validators.min(0)),
            "message": new FormControl("")
        });
    }

    ngOnInit() {
        this.walletService.getWallets()
            .subscribe(data => {this.wallets = data;
                this.walletsFrom  = this.wallets.filter(wallet => wallet.currency == this.currencyFrom);
                this.walletsTo  = this.wallets.filter(wallet => wallet.currency != this.currencyFrom);
            });
        this.newBuyModel();
        this.exchangeRateModel["operation"] = this.operation;
        this.exchangeRateModel["wallet_from_currency"] = this.currencyFrom;
    }

    newBuyModel() {
        this.buyModel = this.buySellService.newBuyExchangeModel();
    }

    getRate(wallet_to) {
        if (wallet_to) {
            this.exchangeRateModel["wallet_to_currency"] = wallet_to.currency;
            this.buyModel.amount = 0;
            this.buyModel.other_amount = 0;
            this.buySellService.exchangeRate(this.exchangeRateModel)
                .subscribe(data => { this.buyModel.rate = data;});
        }
    }

    amountToUSD (amount) {
        if (amount) {
            let other_amount = Number(amount) * this.buyModel.rate;
            this.buyModel.other_amount = Number(other_amount.toFixed(2));
        } else {
            this.buyModel.amount = 0;
            this.buyModel.other_amount = 0;
        }
    }

    USDtoAmount (USD) {
        if (USD) {
            let amount = Number(USD) / this.buyModel.rate;
            this.buyModel.amount = Number(amount.toFixed(8));
        } else {
            this.buyModel.amount = 0;
            this.buyModel.other_amount = 0;
        }
    }

    buy() {
        this.messageSuccess = false;
        this.messageError = '';
        this.buySellService.exchange(this.buyModel)
            .subscribe( data => { this.messageSuccess = true;
                    this.buyForm.reset();
                    this.newBuyModel();},
                error => { this.messageError = error.detail;});
    }
}
