import { Component, OnInit, OnDestroy }              from '@angular/core';
import { ActivatedRoute }                            from '@angular/router';
import { Subscription }                              from 'rxjs/Subscription';

import { ResetPassword }                             from './../_models/index';
import { AuthenticationService }                     from './../_services/index';


@Component({
    selector: 'reset-password-confirm',
    templateUrl: './reset-password-confirm.component.html',
    styleUrls: ['./reset-password-confirm.component.css']
})
export class ResetPasswordConfirmComponent implements OnInit {

    private routeSubscription: Subscription;
    resetPasswordModel = new ResetPassword;
    messageSuccess: string;
    messageError: string;
    messagePassword: string;

    constructor( private authenticationService: AuthenticationService,
                 private route: ActivatedRoute ) {
        this.routeSubscription = route.params.subscribe(params => {
            this.resetPasswordModel['uid'] = params['uid'];
            this.resetPasswordModel['token'] = params['token'];
            console.log(this.resetPasswordModel);});
    }

    ngOnInit() { }

   resetPasswordConfirm() {
        console.log(this.resetPasswordModel);
        this.messageSuccess = '';
        this.messageError = '';
        this.messagePassword = '';
        this.authenticationService.resetPasswordConfirm(this.resetPasswordModel)
            .subscribe( data => { this.messageSuccess = data.detail;},
            error => { this.messageError = error.non_field_errors;
                       this.messagePassword = error.new_password2;});
    }

    ngOnDestroy(){
        this.routeSubscription.unsubscribe();
    }

}

