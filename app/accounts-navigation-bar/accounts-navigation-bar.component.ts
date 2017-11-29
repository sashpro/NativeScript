import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ActivatedRoute }                     from '@angular/router';
import { Router }                             from '@angular/router';
import { Subscription }                       from 'rxjs/Subscription';

import { WalletService }                      from './../_services/index';

@Component({
    selector: 'accounts-navigation-bar',
    templateUrl: './accounts-navigation-bar.component.html',
    styleUrls: ['./accounts-navigation-bar.component.css']
})
export class AccountsNavigationBarComponent implements OnInit {

    private routeSubscription: Subscription;
    wallet: any = {};

    constructor( private walletService: WalletService,
                 private route: ActivatedRoute ) {
        this.routeSubscription = route.params.subscribe(params => { this.getWallet(params['id']);});

    }

    ngOnInit() { }

    getWallet(walletID: number) {
        this.walletService.getWallet(walletID)
                          .subscribe( data => this.wallet = data);
    }

    ngOnDestroy(){
        this.routeSubscription.unsubscribe();
    }
}
