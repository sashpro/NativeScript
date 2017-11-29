import { Component, OnInit }                         from '@angular/core';
import { BsModalService }                            from 'ngx-bootstrap/modal';
import { BsModalRef }                                from 'ngx-bootstrap/modal/modal-options.class';

import { SignInComponent }                           from '../sign-in/sign-in.component';
import { Authentication }                            from '../_models/index';
import { AuthenticationService }                     from '../_services/index';

@Component({
    selector: 'sign-up',
    templateUrl: './sign-up.component.html',
    styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

    signUpModel = new Authentication;
    message = false;
    errorMessage: string;
    emailMessage: string;
    passwordMessage: string;
    bsModalRef: BsModalRef;

    constructor( private modalService: BsModalService,
                 private authenticationService: AuthenticationService ) {
        this.modalService = modalService;
    }

    ngOnInit() {
        this.signUpModel['email'] = this.authenticationService.getEmail().email;
    };

    register() {
        this.message = false;
        this.emailMessage = '';
        this.passwordMessage = '';
        this.errorMessage = '';
        this.authenticationService.register(this.signUpModel)
            .subscribe(
                data  => { this.message = true;},
                error => { this.emailMessage = error.email;
                    for (let message of error.password1) {
                        this.passwordMessage += ' ' + message;
                    }
                    this.errorMessage = error.detail;});
    }

    public openModalWithComponent() {
        this.bsModalRef = this.modalService.show(SignInComponent);
    }
}
