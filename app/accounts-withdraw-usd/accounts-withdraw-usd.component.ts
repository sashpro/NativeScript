import { Input, Component, OnInit, ElementRef }       from '@angular/core';
import { BsModalRef }                                 from 'ngx-bootstrap/modal/modal-options.class';

import { WithdrawUSD }                                from './../_models/index';
import { Service }                                    from './../_models/index';

import { RateFeeService }                             from './../_services/index';
import { WalletService }                              from './../_services/index';

@Component({
    selector: 'accounts-withdraw-usd',
    templateUrl: './accounts-withdraw-usd.component.html',
    styleUrls: ['./accounts-withdraw-usd.component.css']
})
export class AccountsWithdrawUSDComponent implements OnInit {

    walletID: string;
    walletCurrency: string;
    withdrawModel = new WithdrawUSD;
    services = new Array<Service>();
    feeAmount: number;
    totalAmount: number;
    messageSuccess = false;
    messageError: string;

    constructor( private rateFeeService: RateFeeService,
                 private walletService: WalletService,
                 public bsModalRef: BsModalRef,
                 private elRef: ElementRef, ) {
        this.rateFeeService.getFilterServices('USD', 'W')
               .subscribe( data => { this.services = data;});
    }

    ngOnInit() { }

    calculateAmount (amount) {
        if (amount) {
            this.feeAmount = Number((amount*this.withdrawModel.service.percent_fee/100+this.withdrawModel.service.const_fee).toFixed(2));
            this.totalAmount = Number((amount-this.feeAmount).toFixed(2));
        } else {
            this.withdrawModel["amount"] = 0;
            this.feeAmount = 0;
            this.totalAmount = 0;
        }
    }

    withdrawUSD() {
        this.messageError = "";
        this.withdrawModel.wallet = this.walletID;
        this.withdrawModel.currency = this.walletCurrency;
        this.walletService.withdrawUSD(this.withdrawModel)
            .subscribe( data => { this.messageSuccess = true;
                    this.walletService.getWallets();},
                error => { this.messageError = error.detail;});
    }

}
