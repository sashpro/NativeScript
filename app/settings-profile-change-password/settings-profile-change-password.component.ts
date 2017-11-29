import { Component, OnInit }                         from '@angular/core';
import { BsModalService }                            from 'ngx-bootstrap/modal';
import { BsModalRef }                                from 'ngx-bootstrap/modal/modal-options.class';
import { FormGroup, FormBuilder, Validators }        from '@angular/forms';

import { Authentication }                            from './../_models/index';
import { UserService }                               from './../_services/index';
import { PasswordValidation }                        from './../_validations/index';

@Component({
    selector: 'modal-content',
    templateUrl: './settings-profile-change-password.component.html',
    styleUrls: ['./settings-profile-change-password.component.css']
})
export class SettingsProfileChangePasswordComponent implements OnInit {

    passwordModel: any = {};
    errorMessage: string;
    changePasswordForm: FormGroup;

    constructor( public bsModalRef: BsModalRef,
                 private userService: UserService,
                 fb: FormBuilder ) {
        this.changePasswordForm = fb.group({ password: ['', Validators.required],
                                             confirmPassword: ['', Validators.required]},
                                           { validator: PasswordValidation.MatchPassword})
    }

    ngOnInit() { }

    changePassword() {
        this.userService.changePassword(this.passwordModel)
                        .subscribe( data => { this.bsModalRef.hide();},
                                    error => { this.errorMessage = error.new_password2;});
    }

}
