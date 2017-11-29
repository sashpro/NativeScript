import { Component, OnInit, }                         from '@angular/core';
import { BsModalService }                             from 'ngx-bootstrap/modal';
import { BsModalRef }                                 from 'ngx-bootstrap/modal/modal-options.class';

import { TransactionHistory }                         from '../_models/index';
import { AdminService }                               from '../_services/index';

import { AdminUserInfoComponent }                     from '../admin-user-information/admin-user-information.component';


@Component({
    selector: 'admin-logs',
    templateUrl: 'admin-logs.component.html',
    styleUrls: ['admin-logs.component.css']
})
export class AdminLogsComponent implements OnInit {

    transactions: TransactionHistory[];
    userInfoModal: BsModalRef;

    constructor( private adminService: AdminService,
                 private modalService: BsModalService, ) { }

    ngOnInit() {
        this.adminService.getUsersTransactions()
            .subscribe(data => { this.transactions = data;});
    }

    public openUserInfoModal(pk: number) {
        this.userInfoModal = this.modalService.show(AdminUserInfoComponent);
        this.adminService.getUser(pk)
            .subscribe(data => { this.userInfoModal.content.user = data;});
        this.adminService.getUserWallets(pk)
            .subscribe(data => { this.userInfoModal.content.wallets = data;});
    }

}

