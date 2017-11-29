import { Component, OnInit }                          from '@angular/core';
import { FormGroup, FormControl, Validators}          from '@angular/forms';
import { BsModalRef }                                 from 'ngx-bootstrap/modal/modal-options.class';

import { UserService }                                from '../_services/index';
import { ChangePhone }                                from '../_models/index';


@Component({
    selector: 'settings-security-change-phone-number',
    templateUrl: 'settings-security-change-phone-number.component.html',
    styleUrls: ['settings-security-change-phone-number.component.css']
})
export class SettingsSecurityChangePhoneNumberComponent implements OnInit {

    phone: number;
    phoneModel = new ChangePhone;
    phoneForm: FormGroup;
    errorMessage: string;

    constructor( public bsModalRef: BsModalRef,
                 private userService: UserService) {
        this.phoneForm = new FormGroup({
            "mfa_code": new FormControl("", Validators.required)
        });
    }

    ngOnInit() {
        setTimeout(() => { this.phoneModel.phone_number = this.phone;
            this.userService.updateUserPhone(this.phoneModel)
                .subscribe(data => { },
                    error => { this.errorMessage = error.detail;});
        }, 500);
    }

    changePhone() {
        this.errorMessage = '';
        this.userService.updateUserPhone(this.phoneModel)
            .subscribe(data => { this.bsModalRef.hide();},
                error => { this.errorMessage = error.detail;});
    }

}
