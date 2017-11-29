import { Input, Component, OnInit }                   from '@angular/core';
import { BsModalRef }                                 from 'ngx-bootstrap/modal/modal-options.class';


import { WithdrawMoney }                              from './../_models/index';
import { WalletService }                              from './../_services/index';

@Component({
    selector: 'accounts-withdraw',
    templateUrl: './accounts-withdraw.component.html',
    styleUrls: ['./accounts-withdraw.component.css']
})
export class AccountsWithdrawComponent implements OnInit {

    walletID: string;
    withdrawModel: any = {};
    messageSuccess = false;
    messageError: string;

    constructor( private walletService: WalletService,
                 public bsModalRef: BsModalRef,) {
    }

    ngOnInit() { }

    withdraw() {
        this.withdrawModel["wallet"] = this.walletID;
        this.messageSuccess = false;
        this.messageError = "";
        this.walletService.withdraw(this.withdrawModel)
            .subscribe( data => { this.messageSuccess = true;
                                  this.bsModalRef.hide();},
                        error => { this.messageError = error.detail;}
                      );
    }

}
