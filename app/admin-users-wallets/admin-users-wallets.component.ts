import { Component, OnInit, OnDestroy }               from '@angular/core';
import { ActivatedRoute }                             from '@angular/router';
import { Subscription }                               from 'rxjs/Subscription';

import { Wallet }                                     from './../_models/index';
import { AdminService }                              from './../_services/index';

@Component({
    selector: 'admin-users-wallets',
    templateUrl: './admin-users-wallets.component.html',
    styleUrls: ['./admin-users-wallets.component.css']
})
export class AdminUsersWalletsComponent implements OnInit {

    private routeSubscription: Subscription;
    wallets = new Array<Wallet>();

    constructor( private adminService: AdminService,
                 private route: ActivatedRoute ) {
        this.routeSubscription = route.params.subscribe(params => {
            this.adminService.getUserWallets(params['id']).subscribe( data => this.wallets = data);});
    }

    ngOnInit() { }

    ngOnDestroy(){
        this.routeSubscription.unsubscribe();
    }

}

