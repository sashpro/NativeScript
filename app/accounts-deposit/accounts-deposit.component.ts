import { Input, Component, OnInit }                   from '@angular/core';
import { BsModalRef }                                 from 'ngx-bootstrap/modal/modal-options.class';


import { Deposit }                                    from './../_models/index';
import { WalletService }                              from './../_services/index';

@Component({
    selector: 'accounts-deposit',
    templateUrl: './accounts-deposit.component.html',
    styleUrls: ['./accounts-deposit.component.css']
})
export class AccountsDepositComponent implements OnInit {

    walletID: string;
    walletCurrency: string;
    depositModel = new Deposit;
    address: string;
    qr_code: any;
    URI: string;

    constructor( private walletService: WalletService,
                 public bsModalRef: BsModalRef,) {
    }

    ngOnInit() { }

    deposit() {
        this.depositModel.wallet = this.walletID;
        this.walletService.deposit(this.depositModel)
               .subscribe( data => { this.address = data.address;
                        this.qr_code = data.qr_code;
                        this.URI = data.uri;
               });
    }

}
