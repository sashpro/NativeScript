import { Component }                                  from '@angular/core';
import { Input }                                      from '@angular/core';
import { OnInit }                                     from '@angular/core';
import { OnDestroy }                                  from '@angular/core';
import { ActivatedRoute }                             from '@angular/router';
import { Router }                                     from '@angular/router';
import { Subscription }                               from 'rxjs/Subscription';

import { Wallet }                                     from './../_models/index';
import { AdminService }                              from './../_services/index';

@Component({
    selector: 'admin-users-navigation-bar',
    templateUrl: './admin-users-navigation-bar.component.html',
    styleUrls: ['./admin-users-navigation-bar.component.css']
})
export class AdminUsersNavigationBarComponent implements OnInit {

    private routeSubscription: Subscription;
    userID: number;

    constructor( private adminService: AdminService,
                 private route: ActivatedRoute ) {
        this.routeSubscription = route.params.subscribe(params => { this.userID = params['id'];});

    }

    ngOnInit() { }

    ngOnDestroy(){
        this.routeSubscription.unsubscribe();
    }
}
