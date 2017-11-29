import { Component, OnInit }                          from '@angular/core';
import { FormGroup, FormControl, Validators}          from '@angular/forms';
import { BsModalRef }                                 from 'ngx-bootstrap/modal/modal-options.class';

import { SendEmail }                                  from '../_models/index';
import { AdminService }                               from '../_services/index';


@Component({
    selector: 'send-email',
    templateUrl: './send-email.component.html',
    styleUrls: ['./send-email.component.css']
})
export class SendEmailComponent implements OnInit {

    user: string;
    full_name: string;
    emailModel = new SendEmail;
    emailForm: FormGroup;
    errorMessage: string;

    constructor( public bsModalRef: BsModalRef,
                 private adminService: AdminService, ) {
        this.emailForm = new FormGroup({
            "subject": new FormControl("", Validators.required),
            "message": new FormControl("", Validators.required)
        });
    }

    ngOnInit() { };

    sendEmail() {
        this.emailModel.user = this.user;
        this.errorMessage = '';
        this.adminService.sendEmail(this.emailModel)
            .subscribe( data => { this.bsModalRef.hide();},
            error => { this.errorMessage = error.detail;});
    }
}
