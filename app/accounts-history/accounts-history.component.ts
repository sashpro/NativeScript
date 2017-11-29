import { Component, OnInit }                          from '@angular/core';
import { ActivatedRoute }                             from '@angular/router';
import { Subscription }                               from 'rxjs/Subscription';

import { TransactionHistory }                         from '../_models/index';
import { WalletService }                              from '../_services/index';

@Component({
    selector: 'accounts-history',
    templateUrl: './accounts-history.component.html',
    styleUrls: ['./accounts-history.component.css']
})
export class AccountsHistoryComponent implements OnInit {

    private routeSubscription: Subscription;
    transactions: TransactionHistory[];

    constructor( private walletService: WalletService,
                 private route: ActivatedRoute ) {
        this.routeSubscription = route.params.subscribe(params => {
            this.transaction(params['id']);});
    }

    ngOnInit() { }

    transaction(walletID: number) {
        this.walletService.transaction(walletID)
            .subscribe( data => { this.transactions = data;});
    }

    ngOnDestroy(){
        this.routeSubscription.unsubscribe();
    }

}

