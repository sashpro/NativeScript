import { Component, OnInit }                         from '@angular/core';
import { BsModalRef }                                from 'ngx-bootstrap/modal/modal-options.class';


import { GlobalStorageService }                      from './../_services/index';
import { WalletService }                             from './../_services/index';

@Component({
    selector: 'accounts-add-wallet',
    templateUrl: './accounts-add-wallet.component.html',
    styleUrls: ['./accounts-add-wallet.component.css']
})
export class AccountsAddWalletComponent implements OnInit {

    wallet: any = {};
    errorMessage: string;
    currencyList: string[];

    constructor( private walletService: WalletService,
                 public bsModalRef: BsModalRef,
                 private globalStorageService: GlobalStorageService) {
    }

    ngOnInit() {
        this.currencyList = this.globalStorageService.getCurrencyList();
    }

    addWallet() {
        this.walletService.addWallet(this.wallet)
                          .subscribe( data => { this.bsModalRef.hide();},
                                      error => { this.errorMessage = error.detail;});
    }

}
