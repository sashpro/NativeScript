import { Component, OnInit, OnDestroy }       from '@angular/core';
import { ActivatedRoute }                     from '@angular/router';
import { Subscription }                       from 'rxjs/Subscription';

import { WalletService }                      from './../_services/index';

@Component({
    selector: 'accounts-transfer',
    templateUrl: './accounts-transfer.component.html',
    styleUrls: ['./accounts-transfer.component.css']
})
export class AccountsTransferComponent implements OnInit {

    private routeSubscription: Subscription;
    wallets: any;
    walletID: number;
    walletCurrency: string;
    accountRenameModel: any;
    successMessage = false;
    errorMessage: string;
    transferModel: any = {};

    constructor( private walletService: WalletService,
                 private route: ActivatedRoute ) {
        this.routeSubscription = route.params
            .subscribe(params => { this.walletID = params['id'];
                this.getWalletCurrency();});

    }

    ngOnInit() { }

    getWalletCurrency() {
        this.walletService.getWallet(this.walletID)
            .subscribe( data => { this.walletCurrency = data.currency;
                this.getWallets();});
    }

    getWallets() {
        this.walletService.getWallets()
            .subscribe(wallets => {
                this.wallets = wallets.filter(wallet => wallet.currency === this.walletCurrency && wallet.pk != this.walletID);
            });
    }

    transfer() {
        this.transferModel["wallet_from"] = this.walletID;
        this.successMessage = false;
        this.walletService.transfer(this.transferModel)
            .subscribe( data => { this.successMessage = true;
                    this.errorMessage = '';},
                error => { this.errorMessage = error.detail;});
    }

    ngOnDestroy(){
        this.routeSubscription.unsubscribe();
    }

}

