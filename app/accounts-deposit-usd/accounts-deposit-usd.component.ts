import { Input, Component, OnInit, ElementRef }       from '@angular/core';
import { BsModalRef }                                 from 'ngx-bootstrap/modal/modal-options.class';

import { DepositUSD }                                 from './../_models/index';
import { DepositUSDForm }                             from './../_models/index';
import { Service }                                    from './../_models/index';

import { RateFeeService }                             from './../_services/index';
import { WalletService }                              from './../_services/index';

@Component({
    selector: 'accounts-deposit-usd',
    templateUrl: './accounts-deposit-usd.component.html',
    styleUrls: ['./accounts-deposit-usd.component.css']
})
export class AccountsDepositUSDComponent implements OnInit {

    walletID: string;
    walletCurrency: string;
    depositModel = new DepositUSD;
    depositForm = new DepositUSDForm;
    services = new Array<Service>();
    feeAmount: number;
    totalAmount: number;

    constructor( private rateFeeService: RateFeeService,
                 private walletService: WalletService,
                 public bsModalRef: BsModalRef,
                 private elRef: ElementRef, ) {
        this.rateFeeService.getFilterServices('USD', 'D')
               .subscribe( data => { this.services = data;});
    }

    ngOnInit() { }

    calculateAmount (amount) {
        if (amount) {
            this.feeAmount = Number((amount*this.depositModel.service.percent_fee/100+this.depositModel.service.const_fee).toFixed(2));
            this.totalAmount = Number((amount+this.feeAmount).toFixed(2));
        } else {
            this.depositModel["amount"] = 0;
            this.totalAmount = 0;
        }
    }

    depositUSD() {
        this.depositModel.wallet = this.walletID;
        this.walletService.depositUSD(this.depositModel)
            .subscribe( data => { this.depositForm = data.form_data;
                console.log(data);
                console.log(this.elRef.nativeElement.querySelector('form'));
                setTimeout(()=>{this.elRef.nativeElement.querySelector('form').submit()},0);
            });
    }

}
