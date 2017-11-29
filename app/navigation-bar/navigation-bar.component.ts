import { Component, OnInit }                          from '@angular/core';
import { Router }                                     from '@angular/router';
import { BsModalService }                             from 'ngx-bootstrap/modal';
import { BsModalRef }                                 from 'ngx-bootstrap/modal/modal-options.class';

import { ExchangeRate, User }                         from '../_models/index';
import { AuthenticationService, BuySellService }      from '../_services/index';
import { UserService }                                from '../_services/index';

import { SignInComponent }                            from '../sign-in/sign-in.component';
import { SignUpSecondStepComponent }                  from '../sign-up-second-step/sign-up-second-step.component';


@Component({
    selector: 'navigation-bar',
    templateUrl: './navigation-bar.component.html',
    styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

    signInModal: BsModalRef;
    signUpSecondStepModal: BsModalRef;
    FRGCrate: number;
    BTCrate: number;
    currentUser = new User;
    error: any;
    mobileMenuSate: boolean = false;

    constructor( private authenticationService: AuthenticationService,
                 private buySellService: BuySellService,
                 private modalService: BsModalService,
                 private router: Router,
                 private userService: UserService, ) {
    }

    ngOnInit() {
        this.userService.getCurrentUser()
            .subscribe(userData => {this.doUserUpdate(userData)});
        this.getFRGCrate();
        this.getBTCrate();
        this.router.events.subscribe(res => {this.mobileMenuSate = false;});
    }

    showMenu() {
        this.mobileMenuSate = !this.mobileMenuSate;
    }

    doUserUpdate(userData) {
        this.currentUser = userData;
        if (this.currentUser) {
            if ( this.currentUser.first_name=='' || this.currentUser.last_name=='' ) {
                if ( !this.signUpSecondStepModal ) {
                    this.signUpSecondStepModal = this.modalService.show(SignUpSecondStepComponent)
                }
            }
        }
    }

    getFRGCrate() {
        var FRGCRateModel = new ExchangeRate;
        FRGCRateModel["operation"] = 'BUY';
        FRGCRateModel["wallet_from_currency"] = 'USD';
        FRGCRateModel["wallet_to_currency"] = 'FRGC';
        this.buySellService.exchangeRate(FRGCRateModel)
                           .subscribe( data => { this.FRGCrate = data;});
    }

    getBTCrate() {
        var BTCRateModel = new ExchangeRate;
        BTCRateModel["operation"] = 'BUY';
        BTCRateModel["wallet_from_currency"] = 'USD';
        BTCRateModel["wallet_to_currency"] = 'BTC';
        this.buySellService.exchangeRate(BTCRateModel)
                           .subscribe( data => { this.BTCrate = data;});
    }

    public openModalWithComponent() {
        this.signInModal = this.modalService.show(SignInComponent);
    }

    doLogout() {
        this.authenticationService.logout().subscribe( (data) => {});
    }

}
