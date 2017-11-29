import { Component, OnInit }                          from '@angular/core';
import { FormGroup, FormControl, Validators}          from '@angular/forms';
import { BsModalService }                             from 'ngx-bootstrap/modal';
import { BsModalRef }                                 from 'ngx-bootstrap/modal/modal-options.class';

import { SettingsSecurityChangePhoneNumberComponent } from '../settings-security-change-phone-number/settings-security-change-phone-number.component';
import { UserService }                                from '../_services/index';
import { ChangePhone }                                from '../_models/index';

@Component({
    selector: 'settings-security-phone-number',
    templateUrl: 'settings-security-phone-number.component.html',
    styleUrls: ['settings-security-phone-number.component.css']
})
export class SettingsSecurityPhoneNumberComponent implements OnInit {

    currentPhone: string;
    phoneModel = new ChangePhone;
    phoneForm: FormGroup;
    changePhoneModal: BsModalRef;
    errorMessage: string;

    constructor( private modalService: BsModalService,
                 private userService: UserService ) {
        this.phoneForm = new FormGroup({
            "currentPhone": new FormControl({value: "", disabled: true}, Validators.required),
            "phone": new FormControl("", [Validators.required, Validators.minLength(9), Validators.maxLength(10)])
        });
    }

    ngOnInit() {
        this.userService.getCurrentUser()
            .subscribe(data => { if (data) { this.currentPhone = data.phone;}});
    }

    openChangePhoneModal() {
        this.changePhoneModal = this.modalService.show(SettingsSecurityChangePhoneNumberComponent);
        this.changePhoneModal.content.phone = this.phoneForm.value.phone;
    }
}
