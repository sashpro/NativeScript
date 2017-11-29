import { Component, OnInit }                            from '@angular/core';
import { BsModalService }                               from 'ngx-bootstrap/modal';
import { BsModalRef }                                   from 'ngx-bootstrap/modal/modal-options.class';

import { SettingsSecurityAuthenticatorComponent }       from '../settings-security-authenticator/settings-security-authenticator.component';
import { TwoFactorAuthenticationService }               from '../_services/index';

@Component({
    selector: 'settings-security-two-factor-authentication',
    templateUrl: 'settings-security-two-factor-authentication.component.html',
    styleUrls: ['settings-security-two-factor-authentication.component.css']
})
export class SettingsSecurityTwoFactorAuthComponent implements OnInit {

    twoFactorStatus: string;
    AuthenticatorModal: BsModalRef;

    constructor( private modalService: BsModalService,
                 private twoFactorAuthenticationService: TwoFactorAuthenticationService ) { }

    ngOnInit() {
        this.twoFactorAuthenticationService.getTwoFactorStatus()
            .subscribe(data => { this.twoFactorStatus = data;});
    }

    deactivateAuthenticator() {
        this.twoFactorAuthenticationService.deactivate()
            .subscribe(data => { });
    }

    public openAuthenticatorModal() {
        this.AuthenticatorModal = this.modalService.show(SettingsSecurityAuthenticatorComponent);
    }
}
