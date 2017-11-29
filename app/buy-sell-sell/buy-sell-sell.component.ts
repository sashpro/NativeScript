import { Component, OnInit }                          from '@angular/core';
import { FormGroup, FormControl, Validators}          from '@angular/forms';

import { BuySellService, WalletService }              from '../_services/index';
import { Exchange, ExchangeRate, Wallet }             from '../_models/index';


@Component({
    selector: 'buy-sell-sell',
    templateUrl: './buy-sell-sell.component.html',
    styleUrls: ['./buy-sell-sell.component.css']
})
export class BuySellSellComponent implements OnInit {

    operation = "SELL";
    wallets: Wallet[];
    walletsFrom: Wallet[];
    walletsTo: Wallet[];
    currencyTo = 'USD';
    sellModel = new Exchange;
    sellForm: FormGroup;
    exchangeRateModel = new ExchangeRate;
    messageSuccess = false;
    messageError: string;

    constructor( private walletService: WalletService,
                 private buySellService: BuySellService, ) {
        this.sellForm = new FormGroup({
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
                this.walletsFrom  = this.wallets.filter(wallet => wallet.currency != this.currencyTo);
                this.walletsTo  = this.wallets.filter(wallet => wallet.currency == this.currencyTo);

        });
        this.newSellModel();
        this.exchangeRateModel["operation"] = this.operation;
        this.exchangeRateModel["wallet_to_currency"] = this.currencyTo;
    }

    newSellModel() {
        this.sellModel = this.buySellService.newSellExchangeModel();
    }

    getRate(wallet_from) {
        if (wallet_from) {
            this.exchangeRateModel["wallet_from_currency"] = this.sellModel.wallet_from.currency;
            this.sellModel.amount = 0;
            this.sellModel.other_amount = 0;
            this.buySellService.exchangeRate(this.exchangeRateModel)
                .subscribe(data => { this.sellModel.rate = data;});
        }
    }

    amountToUSD (amount) {
        if (amount) {
            let other_amount = Number(amount) * this.sellModel.rate;
            this.sellModel.other_amount = Number(other_amount.toFixed(2));
        } else {
            this.sellModel.amount = 0;
            this.sellModel.other_amount = 0;
        }
    }

    USDtoAmount (USD) {
        if (USD) {
            let amount = Number(USD) / this.sellModel.rate;
            this.sellModel.amount = Number(amount.toFixed(8));
        } else {
            this.sellModel.amount = 0;
            this.sellModel.other_amount = 0;
        }
    }

    sell() {
        this.messageSuccess = false;
        this.messageError = '';
        this.buySellService.exchange(this.sellModel)
            .subscribe( data => { this.messageSuccess = true;
                    this.sellForm.reset();
                    this.newSellModel();},
                error => { this.messageError = error.detail;});
    }
}
