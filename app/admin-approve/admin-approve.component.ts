import { Component, OnInit }                          from '@angular/core';
import { BsModalService }                             from 'ngx-bootstrap/modal';
import { BsModalRef }                                 from 'ngx-bootstrap/modal/modal-options.class';


import { Transaction }                                from '../_models/index';
import { ApproveService, AdminService }               from '../_services/index';

import { AdminUserInfoComponent }                     from '../admin-user-information/admin-user-information.component';
import { SendEmailComponent }                         from '../send-email/send-email.component';


@Component({
    selector: 'admin-approve',
    templateUrl: './admin-approve.component.html',
    styleUrls: ['./admin-approve.component.css']
})
export class AdminApproveComponent implements OnInit {

    activeTransactions = new Array<Transaction>();
    userInfoModal: BsModalRef;
    sendEmailModal: BsModalRef;
    messageSuccess = false;
    messageError: string;

    constructor( private approveService: ApproveService,
                 private adminService: AdminService,
                 private modalService: BsModalService, ) { }

    ngOnInit() {
        this.approveService.getActiveTransactions()
            .subscribe(data => { this.activeTransactions = data;});
    }

    public openUserInfoModal(pk: number) {
        this.userInfoModal = this.modalService.show(AdminUserInfoComponent);
        this.adminService.getUser(pk)
            .subscribe(data => { this.userInfoModal.content.user = data;});
        this.adminService.getUserWallets(pk)
            .subscribe(data => { this.userInfoModal.content.wallets = data;});
    }

    acceptTransaction( hash: string ) {
        this.messageSuccess = false;
        this.messageError = "";
        this.approveService.acceptTransaction(hash)
            .subscribe( data => { this.messageSuccess = true;},
                        error => { this.messageError = error.detail;});
    }

    approveTransaction( hash: string ) {
        this.messageSuccess = false;
        this.messageError = "";
        this.approveService.approveTransaction(hash)
            .subscribe( data => { this.messageSuccess = true;},
                        error => { this.messageError = error.detail;});
    }

    declineTransaction( hash: string ) {
        this.messageSuccess = false;
        this.messageError = "";
        this.approveService.declineTransaction(hash)
            .subscribe( data => { this.messageSuccess = true;},
                        error => { this.messageError = error.detail;});
    }

    public openSnedMessageModal(pk: string, full_name: string) {
        this.sendEmailModal = this.modalService.show(SendEmailComponent);
        this.sendEmailModal.content.user = pk;
        this.sendEmailModal.content.full_name = full_name;
    }
}
