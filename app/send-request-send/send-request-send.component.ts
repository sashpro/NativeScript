import { Component, OnInit }                          from '@angular/core';
import { FormGroup, FormControl, Validators}          from '@angular/forms';
import { ActivatedRoute }                             from '@angular/router';
import { BsModalService }                             from 'ngx-bootstrap/modal';
import { BsModalRef }                                 from 'ngx-bootstrap/modal/modal-options.class';
import { Subscription }                               from 'rxjs/Subscription';

import { Send }                                       from '../_models/index';
import { WalletService, SendRequestService }          from '../_services/index';
import { SendNoUserComponent }                        from '../send-request-send-no-user/send-request-send-no-user.component';

@Component({
    selector: 'send-request-send',
    templateUrl: './send-request-send.component.html',
    styleUrls: ['./send-request-send.component.css']
})
export class SendRequestSendComponent implements OnInit {

    wallets: any;
    sendModel = new Send;
    sendForm: FormGroup;
    sending = false;
    successMessage = false;
    errorMessage: string;
    sendNoUserModal: BsModalRef;

    private querySubscription: Subscription;
    hash: string;

    constructor( private modalService: BsModalService,
                 private route: ActivatedRoute,
                 private sendRequestService: SendRequestService,
                 private walletService: WalletService, ) {
        this.sendForm = new FormGroup({
            "wallet_from": new FormControl("", Validators.required),
            "receiver": new FormControl("", [Validators.required, Validators.email]),
            "amount": new FormControl("", [Validators.required, Validators.min(0)]),
            "message": new FormControl("")
        });
    }

    ngOnInit() {
        this.newSendModel();
        this.walletService.getWallets()
            .subscribe(resp => {this.wallets = resp});
        this.querySubscription = this.route.queryParams.subscribe(
            (queryParam: any) => { this.hash = queryParam['request_trans_hash'];
                if (this.hash) { this.transaction(this.hash);}
            });
    }

    newSendModel() {
        this.sendModel = new Send;
    }

    sendMoney() {
        this.sending = true;
        this.successMessage = false;
        this.errorMessage = "";
        this.sendRequestService.sendMoney(this.sendModel)
            .subscribe( data => { this.successMessage = true;
                    this.sending = false;
                    this.sendForm.reset();
                    this.newSendModel();},
                error => { this.sending = false;
                    if (error.detail == 'No user') {
                        this.openSendNoUserModal();
                    } else {
                        this.errorMessage = error.detail;
                    }});
    }

    public openSendNoUserModal() {
        this.sendNoUserModal = this.modalService.show(SendNoUserComponent);
        this.sendNoUserModal.content.sendModel = this.sendModel;
    }

    transaction(hash: string) {
        this.sendRequestService.transaction(hash)
            .subscribe( data => { this.sendModel['amount'] = data.amount;
                this.sendModel['receiver'] = data.send_to_email;
                this.wallets = this.wallets.filter(wallet => wallet.currency === data.currency);},
            error => { this.errorMessage = error.detail;});
    }

    ngOnDestroy(){
        this.querySubscription.unsubscribe();
    }
}
