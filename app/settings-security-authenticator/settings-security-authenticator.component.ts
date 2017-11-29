import { Component, OnInit }                         from '@angular/core';
import { BsModalService }                            from 'ngx-bootstrap/modal';
import { BsModalRef }                                from 'ngx-bootstrap/modal/modal-options.class';
import { FormGroup, FormBuilder, Validators }        from '@angular/forms';

import { TwoFactorAuthenticationService }               from './../_services/index';
import { UserService }                                  from './../_services/index';

import { SmsRequest }                                   from './../_models/index';
import { SmsVerify }                                    from './../_models/index';

@Component({
    selector: 'modal-content',
    templateUrl: './settings-security-authenticator.component.html',
    styleUrls: ['./settings-security-authenticator.component.css']
})
export class SettingsSecurityAuthenticatorComponent implements OnInit {

    smsRequestModel = new SmsRequest;
    smsVerifyModel = new SmsVerify;
    errorMessage: string;

    constructor( public bsModalRef: BsModalRef,
                 private twoFactorAuthenticationService: TwoFactorAuthenticationService,
                 private userService: UserService) {
    }

    ngOnInit() {
        this.userService.getCurrentUser()
            .subscribe(userData => { this.smsRequestModel['phone_number'] = userData.phone.replace(/\+/gi, "");
                                     this.smsRequest();});
    }

    smsRequest() {
        this.errorMessage = '';
        this.twoFactorAuthenticationService.smsRequest(this.smsRequestModel)
            .subscribe( data => { },
                        error => { this.errorMessage = error.detail;});
    }

    smsVerify() {
        this.twoFactorAuthenticationService.smsVerify(this.smsVerifyModel)
            .subscribe( data => { this.bsModalRef.hide();},
                        error => { this.errorMessage = error.mfa_code;});
    }

}
