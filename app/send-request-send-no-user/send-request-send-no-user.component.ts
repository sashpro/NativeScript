import { Component, OnInit }                          from '@angular/core';
import { FormGroup, FormControl, Validators}          from '@angular/forms';
import { BsModalRef }                                 from 'ngx-bootstrap/modal/modal-options.class';

import { Send }                                       from '../_models/index';
import { SendRequestService }                         from '../_services/index';


@Component({
    selector: 'no-user',
    templateUrl: 'send-request-send-no-user.component.html',
    styleUrls: ['send-request-send-no-user.component.css']
})
export class SendNoUserComponent implements OnInit {

    sendModel = new Send;
    sendForm: FormGroup;
    sending = false;
    successMessage = false;
    errorMessage: string;

    constructor( public bsModalRef: BsModalRef,
                 private sendRequestService: SendRequestService, ) {
        this.sendForm = new FormGroup({
            "repeat_receiver": new FormControl("", [Validators.required, Validators.email])
        });
    }

    ngOnInit() { };

    send() {
        this.sending = true;
        this.successMessage = false;
        this.errorMessage = '';
        this.sendRequestService.sendMoney(this.sendModel)
            .subscribe( data => {  this.sending = false;
                this.successMessage = true;
                this.sendForm.reset();},
            error => { this.sending = false;
                this.errorMessage = error.detail;});
    }

}
