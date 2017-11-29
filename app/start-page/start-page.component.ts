import { Component, OnInit }                          from '@angular/core';
import { Router }                                     from '@angular/router';
import { BsModalService }                             from 'ngx-bootstrap/modal';
import { BsModalRef }                                 from 'ngx-bootstrap/modal/modal-options.class';

import { UserService }                                from './../_services/index';




@Component({
    selector: 'start-page',
    templateUrl: './start-page.component.html',
    styleUrls: ['./start-page.component.css']
})
export class StartPageComponent implements OnInit {

    constructor ( private router: Router,
                  private userService: UserService, ) {}

    ngOnInit() {
        this.userService.getCurrentUser()
            .subscribe(data => {
                if ( data ) {
                    if ( data.groups_name.indexOf('managers') != -1 ) {
                        this.router.navigate(['/approve']);
                    } else if ( data.groups_name.indexOf('users') != -1 && data.first_name) {
                        this.router.navigate(['/dashboard']);
                    }
                }
            });
    }

}
