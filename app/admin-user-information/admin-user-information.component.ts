import { Component, OnInit, Input }                  from '@angular/core';
import { Router }                                    from '@angular/router';
import { BsModalService }                            from 'ngx-bootstrap/modal';
import { BsModalRef }                                from 'ngx-bootstrap/modal/modal-options.class';

import { User }                                      from './../_models/index';
import { Wallet }                                    from './../_models/index';


@Component({
    selector: 'modal-admin-user-information',
    templateUrl: './admin-user-information.component.html',
    styleUrls: ['./admin-user-information.component.css']
})
export class AdminUserInfoComponent implements OnInit {

    public user = new User;
    public wallets = new Array<Wallet>();

    constructor(public bsModalRef: BsModalRef) {}

    ngOnInit() {}

}
