import { Component, OnInit }                         from '@angular/core';
import { BsModalService }                            from 'ngx-bootstrap/modal';
import { BsModalRef }                                from 'ngx-bootstrap/modal/modal-options.class';

import { User }                                      from '../_models/index';
import { UserService }                               from '../_services/index';

import { SettingsProfileChangePasswordComponent }    from '../settings-profile-change-password/settings-profile-change-password.component';


@Component({
    selector: 'settings-profile-user-profile',
    templateUrl: './settings-profile-user-profile.component.html',
    styleUrls: ['./settings-profile-user-profile.component.css']
})
export class SettingsProfileUserProfileComponent implements OnInit {
    userModel = new User;
    changePasswordModal: BsModalRef;
    messageSuccess = false;
    messageError: string;
    newAvatar: File;

    constructor( private modalService: BsModalService,
                 private userService: UserService ) { }

    ngOnInit() {
        this.userService.getCurrentUser()
            .subscribe(data => { if (data) { this.userModel['avatar'] = data.avatar;}});
    }

    imageUpload(image) {
        let reader = new FileReader();
        if ( image.target.files[0] ) {
            this.newAvatar = image.target.files[0];
            reader.onloadend = () => {
                this.userModel['avatar'] = reader.result;
            };
            reader.readAsDataURL(this.newAvatar);
        }
    }

    uploadPhoto() {
        if (this.newAvatar) {
            this.messageSuccess = false;
            this.messageError = "";
            this.userService.updateUserAvatar(this.newAvatar)
                .subscribe( data => { this.messageSuccess = true;},
                    error => { this.messageError = error.detail === undefined ? error.avatar : error.detail });
        }
    }

    public openChangePasswordComponent() {
        this.changePasswordModal = this.modalService.show(SettingsProfileChangePasswordComponent);
    }
}
