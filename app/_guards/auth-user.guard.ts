import { Injectable }                         from '@angular/core';
import { Router, CanActivate }                from '@angular/router';
import { ActivatedRouteSnapshot }             from '@angular/router';
import { BsModalService }                     from 'ngx-bootstrap/modal';
import { BsModalRef }                         from 'ngx-bootstrap/modal/modal-options.class';
import { Observable }                         from 'rxjs/Observable';

import { SignUpSecondStepComponent }          from '../sign-up-second-step/sign-up-second-step.component';
import { UserService }                        from '../_services/index';


@Injectable()
export class AuthUserGuard implements CanActivate {

    constructor( private router: Router,
                 private userService: UserService,
                 private modalService: BsModalService,) {
    }

    canActivate(route: ActivatedRouteSnapshot): Observable<boolean> | boolean {
        return this.userService.getCurrentUser()
            .map( isAuth => {
                let signUpSecondStepModal: BsModalRef;
                if (( isAuth ) && (isAuth.role === 'user')) {
                    if ( !(isAuth.first_name || isAuth.last_name || isAuth.phone || isAuth.country) ) {
                        signUpSecondStepModal = this.modalService.show(SignUpSecondStepComponent);
                        return false;
                    }
                    return true;
                }
                this.router.navigate(['/']);
                return false;
            })
            .catch( error => {
                this.router.navigate(['/']);
                return Observable.of(false);
            });
    }
}
