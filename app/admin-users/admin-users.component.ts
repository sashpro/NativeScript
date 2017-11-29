import { Component }                                  from '@angular/core';
import { OnInit }                                     from '@angular/core';
import { Router }                                     from '@angular/router';
import { Subject }                                    from 'rxjs/Subject';
import 'rxjs/Rx';

import { UserBrief }                                  from '../_models/index';
import { AdminService }                               from '../_services/index';



@Component({
    selector: 'admin-users',
    templateUrl: './admin-users.component.html',
    styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent implements OnInit {

    selectedUserID: string;
    users: UserBrief[];
    searchSubstring: string = '';
    searchSubstringChanged: Subject<string> = new Subject<string>();

    constructor( private adminService: AdminService,
                 private router: Router, ) {
        this.router.events.subscribe(res => {
            this.selectedUserID = res['url'].split('/')[2] != undefined ? res['url'].split('/')[2] : 0;});
    }

    ngOnInit() {
        this.getUsers();
        this.searchSubstringChanged
            .debounceTime(200)
            .distinctUntilChanged()
            .subscribe(() => {
                this.getUsers();
        })
    }

    getUsers() {
        this.adminService.getUsers(this.searchSubstring)
            .subscribe(data => {this.users = data});
    }

    activateDeactivateUser( pk: number, states: boolean ){
        this.adminService.activateDeactivateUser(pk, states)
            .subscribe( data => { this.getUsers();});
    }

}
