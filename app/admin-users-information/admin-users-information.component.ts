import { Component, OnInit, OnDestroy }               from '@angular/core';
import { ActivatedRoute }                             from '@angular/router';
import { Subscription }                               from 'rxjs/Subscription';

import { User }                                      from './../_models/index';
import { AdminService }                              from './../_services/index';

@Component({
    selector: 'admin-users-information',
    templateUrl: './admin-users-information.component.html',
    styleUrls: ['./admin-users-information.component.css']
})
export class AdminUsersInformationComponent implements OnInit {

    private routeSubscription: Subscription;
    user = new User;

    constructor( private adminService: AdminService,
                 private route: ActivatedRoute ) {
        this.routeSubscription = route.params.subscribe( params => {
            this.adminService.getUser(params['id']).subscribe( data => {
                this.user = data;});});
    }

    ngOnInit() { }

    ngOnDestroy(){
        this.routeSubscription.unsubscribe();
    }

}

