import { Component, OnInit }                         from '@angular/core';
import { BsModalRef }                                from 'ngx-bootstrap/modal/modal-options.class';

import { Email }                                     from '../_models/index';
import { AuthenticationService }                     from '../_services/index';

@Component({
    selector: 'reset-password',
    templateUrl: './reset-password.component.html',
    styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

    resetPasswordModel = new Email;
    messageSuccess: string;
    messageError: string;

    constructor( public bsModalRef: BsModalRef,
                 private authenticationService: AuthenticationService ) { }

    ngOnInit() {
        this.resetPasswordModel = this.authenticationService.getEmail();
    };

    resetPassword() {
        this.messageError = '';
        this.messageSuccess = '';
        this.authenticationService.resetPassword(this.resetPasswordModel)
            .subscribe( data => { this.messageSuccess = data.detail;},
                error => { this.messageError = error.non_field_errors;});
    }

}
