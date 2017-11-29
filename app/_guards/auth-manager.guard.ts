import { Injectable }                         from '@angular/core';
import { Router, CanActivate }                from '@angular/router';
import { ActivatedRouteSnapshot }             from '@angular/router';
import { Observable }                         from 'rxjs/Observable';

import { UserService }                        from './../_services/index';

@Injectable()
export class AuthManagerGuard implements CanActivate {
    currentUser: any;

    constructor( private router: Router,
                 private userService: UserService, ) {
        this.userService.getCurrentUser()
            .subscribe(userData => {this.currentUser = userData})
    }

    canActivate(route: ActivatedRouteSnapshot): Observable<boolean> | boolean {
        return this.userService.getCurrentUser()
            .map( isAuth => {
                if (( isAuth ) && (isAuth.role === 'manager')) {
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
