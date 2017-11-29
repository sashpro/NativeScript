import { Component, OnInit }                         from '@angular/core';

import { User }                                      from './../_models/index';
import { UserService }                               from './../_services/index';

@Component({
    selector: 'settings-profile-personal-details',
    templateUrl: './settings-profile-personal-details.component.html',
    styleUrls: ['./settings-profile-personal-details.component.css']
})
export class SettingsProfilePersonalDetailsComponent implements OnInit {

    userModel = new User;
    messageSuccess = false;
    messageError: string;

    constructor( private userService: UserService ) { }

    ngOnInit() {
        this.userService.getCurrentUser()
            .subscribe(userData => { this.userModel = userData;});
    }

    updateUserInformation() {
        this.messageSuccess = false;
        this.messageError = "";
        this.userService.updateUserInformation(this.userModel)
                               .subscribe( data => { this.messageSuccess = true;},
                                           error => { this.messageError = error.detail;});
    }
}
