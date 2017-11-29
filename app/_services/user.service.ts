/* Current user service */
import { Injectable }                                 from '@angular/core';
import { Response }                                   from '@angular/http';
import { Router }                                     from '@angular/router';
import { BsModalService }                             from 'ngx-bootstrap/modal';
import { Observable }                                 from 'rxjs/Observable';
import { BehaviorSubject }                            from 'rxjs/BehaviorSubject';

import { Authentication, ChangePhone, User }          from '../_models/index';
import { ApiService }                                 from './api.service';

import { AutoLogoutComponent }                        from '../auto-logout/auto-logout.component';


@Injectable()
export class UserService {
    private currentUser: User | null = null;
    private currentUserObserver = new BehaviorSubject(null);

    constructor( private http: ApiService,
                 private router: Router,
                 private modalService: BsModalService, ) {
        let storedUser = localStorage.getItem('currentUser');
        if (storedUser !== null) {
            this.setCurrentUser(JSON.parse(storedUser));
            this.refreshCurrentUser();
        }
        this.http.errorUnauthorized.subscribe( (error) => {
            if (error) {
                if ( !error.isLogin && this.router.url != '/' ) {
                    this.removeCurrentUser();
                    this.modalService.show(AutoLogoutComponent);
                }
            }
        });
    }

    refreshCurrentUser(): void {
        /*
        Refresh information about the current user
        */
        this.http.get('/rest-auth/user/')
            .map((response: Response) => {
                let user = response.json();
                if ( user.groups_name.indexOf('managers') != -1 ) {
                    user.role = 'manager';
                } else if ( user.groups_name.indexOf('users') != -1 ) {
                    user.role = 'user';
                }
                return user;
            })
            .catch((error: any) => {
                this.setCurrentUser(null);
                return Observable.throw(error);
            })
            .subscribe((data: User) => {
                this.setCurrentUser(data)
            });
    }

    getCurrentUser(): Observable<User> {
        /*
        Get information about the current user
        :return: Observer
        */
        if (this.currentUserObserver.getValue() === null || this.currentUserObserver.getValue() === undefined) {
            this.refreshCurrentUser();
        }
        return this.currentUserObserver;
    }

    setCurrentUser(user: User | null) {
        /*
        Set information about the current user
        :return:
        */
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUser = user;
        this.currentUserObserver.next(user)
    }

    updateUserInformation(user: User) {
        /*
        Update information about the current user
        :return: information about the current user
        */
        return this.http.patch("/rest-auth/user/",
                { "username": user.username,
                  "first_name": user.first_name,
                  "last_name": user.last_name,
                  "date_of_birth": user.date_of_birth,
                  "address": user.address,
                  "city": user.city,
                  "postal_code": user.postal_code, })
            .map((response: Response) => { this.setCurrentUser(response.json());});
    }

    updateUserAvatar(userAvatar: File) {
        /*
        Update avatar of current user
        :return: information about the current user
        */
        let formData = new FormData();
        formData.append('avatar', userAvatar, 'avatar.jpg');
        return this.http.patch("/rest-auth/user/", formData)
            .map((response: Response) => { this.setCurrentUser(response.json());});
    }

    updateUserPhone(userPhone: ChangePhone) {
        /*
        Update current user phone
        :return:
        */
        return this.http.patch("/user/phone/update/", userPhone)
            .map((response: Response) =>  { this.refreshCurrentUser();});
    }

    changePassword(user: Authentication) {
        /*
        Change password of the current user
        :return:
        */
        return this.http.post("/rest-auth/password/change/",
                { "new_password1": user.password,
                  "new_password2": user.password,})
            .map((response: Response) => { });
    }

    removeCurrentUser() {
        /*
        Remove information about the current user
        :return:
        */
        this.router.navigate(['/']);
        localStorage.setItem('currentUser', JSON.stringify(null));
        localStorage.removeItem('currentUserWallets');
        this.setCurrentUser(null);
    }
}
