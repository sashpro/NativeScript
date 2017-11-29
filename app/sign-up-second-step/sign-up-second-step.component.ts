import { Component, OnInit }            from '@angular/core';
import { Router }                       from '@angular/router';
import { BsModalRef }                   from 'ngx-bootstrap/modal/modal-options.class';

import { AuthenticationService }        from '../_services/index';
import { GlobalStorageService }               from '../_services/index';

@Component({
    selector: 'sign-up-second-step',
    templateUrl: './sign-up-second-step.component.html',
    styleUrls: ['./sign-up-second-step.component.css']
})
export class SignUpSecondStepComponent implements OnInit {

    model: any = {};
    model_copy: any = {};
    email: string;
    country_list: any = [];
    code: any;
    USAid = 238;


    constructor( public bsModalRef: BsModalRef,
                 private router: Router,
                 private globalStorageService: GlobalStorageService,
                 private authenticationService: AuthenticationService) { }

    ngOnInit() {
        this.country_list = this.globalStorageService.getCountryList();
        this.model['country'] = this.country_list[this.USAid].pk;
        this.code = '+' + this.country_list[this.USAid].phone;
    }

    changCountry(country_index) {
        this.model['country'] = this.country_list[country_index].pk;
        this.code = '+' + this.country_list[country_index].phone;
        if (this.code == '+380') this.code = '+38';


    }

    registrationSecondStep() {
        this.model_copy =  Object.assign({}, this.model);
        this.model_copy['phone']  = (this.code + this.model['phone']).replace(/\D/g,'');
        this.authenticationService.registrationSecondStep(this.model_copy)
            .subscribe(
                data => {
                    this.router.navigate(['/']);
                    this.bsModalRef.hide();
                });
    }

}
