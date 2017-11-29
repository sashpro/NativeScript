import { Component, OnInit }                          from '@angular/core';
import { Router }                                     from '@angular/router';
import { BsModalService }                             from 'ngx-bootstrap/modal';
import { BsModalRef }                                 from 'ngx-bootstrap/modal/modal-options.class';

import { AccountsAddWalletComponent }                 from '../accounts-add-wallet/accounts-add-wallet.component';
import { AccountsDepositComponent }                   from '../accounts-deposit/accounts-deposit.component';
import { AccountsDepositUSDComponent }                from '../accounts-deposit-usd/accounts-deposit-usd.component';
import { AccountsWithdrawComponent }                  from '../accounts-withdraw/accounts-withdraw.component';
import { AccountsWithdrawUSDComponent }               from '../accounts-withdraw-usd/accounts-withdraw-usd.component';

import { WalletService }                              from '../_services/index';
import { Wallet }                                     from '../_models/index';

@Component({
    selector: 'accounts',
    templateUrl: './accounts.component.html',
    styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {

    wallets: Wallet[];
    modalAddWallet: BsModalRef;
    modalWithdraw: BsModalRef;
    modalDeposit: BsModalRef;
    selectedWalletID: number = 0;

    constructor(private walletService: WalletService,
            private modalService: BsModalService,
            private router: Router) {
        this.router.events.subscribe(res => {
            this.selectedWalletID = res['url'].split('/')[2] != undefined ? res['url'].split('/')[2] : 0;
        })
    }

    ngOnInit() {
        this.walletService.getWallets()
            .subscribe(data => {this.wallets = data});
    }

    public openModalAddWallet() {
        this.modalAddWallet = this.modalService.show(AccountsAddWalletComponent);
    }

    public openModalDeposit(wallet: Wallet) {
        if ( wallet.currency!='USD' ) {
            this.modalDeposit = this.modalService.show(AccountsDepositComponent);
        } else {
            this.modalDeposit = this.modalService.show(AccountsDepositUSDComponent);
        }
        this.modalDeposit.content.walletID = wallet.pk;
        this.modalDeposit.content.walletCurrency = wallet.currency;
    }

    public openModalWithdraw(wallet: Wallet) {
        if ( wallet.currency!='USD' ) {
            this.modalWithdraw = this.modalService.show(AccountsWithdrawComponent);
        } else {
            this.modalWithdraw = this.modalService.show(AccountsWithdrawUSDComponent);
        }
        this.modalWithdraw.content.walletID = wallet.pk;
        this.modalWithdraw.content.walletCurrency = wallet.currency;
    }

}
