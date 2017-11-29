import { Component, OnInit }                          from '@angular/core';
import { Router }                                     from '@angular/router';
import { BsModalService }                             from 'ngx-bootstrap/modal';
import { BsModalRef }                                 from 'ngx-bootstrap/modal/modal-options.class';

import { Authentication }                             from '../_models/index';
import { AuthenticationService, UserService }         from '../_services/index';

import { ResetPasswordComponent }                     from '../reset-password/reset-password.component';


@Component({
    selector: 'modal-content',
    templateUrl: './sign-in.component.html',
    styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

    signInModel = new Authentication;
    errorMessage: string;
    twoFactorAuthentication = false;
    resetPasswordModal: BsModalRef;

    constructor( public bsModalRef: BsModalRef,
                 private modalService: BsModalService,
                 private router: Router,
                 private userService: UserService,
                 private authenticationService: AuthenticationService ) { }

    ngOnInit() {
        this.signInModel['email'] = this.authenticationService.getEmail().email;
    };

    login() {
        this.errorMessage = '';
        this.authenticationService.login(this.signInModel)
            .subscribe( data => {
                if (data.mfa_required) {
                    this.twoFactorAuthentication = true;
                } else {
                    this.userService.getCurrentUser();
                    this.router.navigate(['/']);
                    this.bsModalRef.hide();
                }
            },
            error => { this.errorMessage = error.non_field_errors;});
    }

    resendCode() {
        delete this.signInModel.mfa_code;
        this.login();
    }

     public openResetPasswordModal() {
        this.resetPasswordModal = this.modalService.show(ResetPasswordComponent);
        this.bsModalRef.hide();
    }

}
