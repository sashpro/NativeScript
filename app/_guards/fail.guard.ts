import { Injectable }                         from '@angular/core';
import { Router, CanActivate }                from '@angular/router';
import { ActivatedRouteSnapshot }             from '@angular/router';

import { GlobalStorageService }               from '../_services/index'

@Injectable()
export class FailGuard implements CanActivate {
    currentUser: any;

    constructor( private router: Router,
                 private globalService: GlobalStorageService ) {}

    canActivate(route: ActivatedRouteSnapshot) {
        if (this.globalService.getCountryList()) {
            this.router.navigate(['/']);
            return false;
        }

        return true;
    }
}
