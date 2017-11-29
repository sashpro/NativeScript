import { Component, OnInit }                          from '@angular/core';
import { ActivatedRoute }                             from '@angular/router';
import { Subscription }                               from 'rxjs/Subscription';

import { LogHistory }                                 from '../_models/index';
import { AdminService }                               from '../_services/index';

@Component({
    selector: 'admin-users-transactions',
    templateUrl: './admin-users-transactions.component.html',
    styleUrls: ['./admin-users-transactions.component.css']
})
export class AdminUsersTransactionsComponent implements OnInit {

    private routeSubscription: Subscription;
    loggers = new Array<LogHistory>();

    constructor( private adminService: AdminService,
                 private route: ActivatedRoute ) {
        this.routeSubscription = route.params.subscribe(params => {
            this.adminService.getUserLogs(params['id']).subscribe( data => {
                this.loggers = data;});});
    }

    ngOnInit() { }

    ngOnDestroy(){
        this.routeSubscription.unsubscribe();
    }

}

