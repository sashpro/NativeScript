import { Component, OnInit, OnDestroy }       from '@angular/core';
import { ActivatedRoute }                     from '@angular/router';
import { Subscription }                       from 'rxjs/Subscription';


import { Rename }                             from './../_models/index';
import { WalletService }                      from './../_services/index';

@Component({
    selector: 'accounts-rename',
    templateUrl: './accounts-rename.component.html',
    styleUrls: ['./accounts-rename.component.css']
})
export class AccountsRenameComponent implements OnInit {

    private routeSubscription: Subscription;
    accountRenameModel = new Rename;
    successMessage = false;
    errorMessage: string;

    constructor( private walletService: WalletService,
                 private route: ActivatedRoute ) {
        this.routeSubscription = route.params.subscribe(params => {
            this.accountRenameModel['walletID'] = params['id'];});
    }

    ngOnInit() { }

    renameWallet() {
        this.successMessage = false;
        this.errorMessage = '';
        this.walletService.renameWallet(this.accountRenameModel)
                          .subscribe( data => { this.successMessage = true;},
                                      error => { this.errorMessage = error.detail;});
    }

    ngOnDestroy(){
        this.routeSubscription.unsubscribe();
    }

}

