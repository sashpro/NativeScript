import { Component, OnInit }                         from '@angular/core';
import { Router }                                    from '@angular/router';
import { BsModalService }                            from 'ngx-bootstrap/modal';
import { BsModalRef }                                from 'ngx-bootstrap/modal/modal-options.class';
import { SignInComponent }                           from '../sign-in/sign-in.component';

import { Email }                                     from './../_models/index';
import { AuthenticationService }                     from './../_services/index';


@Component({
    selector: 'start-page-get-started',
    templateUrl: './start-page-get-started.component.html',
    styleUrls: ['./start-page-get-started.component.css']
})
export class StartPageGetStartedComponent implements OnInit {

    authentication = new Email;
    bsModalRef: BsModalRef;
    private modalService: any;

    constructor( modalService: BsModalService,
                 private authenticationService: AuthenticationService,
                 private router: Router ) {
        this.modalService = modalService;
    }

    ngOnInit() {
        this.authentication = this.authenticationService.getEmail();
    };

    getStarted() {
        this.authenticationService.checkEmail(this.authentication.email)
                                  .subscribe( data => { if (data) {
                                                            this.bsModalRef = this.modalService.show(SignInComponent);
                                                        } else {
                                                            this.router.navigate(['/sign-up']);
                                                        }});
    };
}
