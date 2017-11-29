/* Authentication service */
import { Injectable }                                 from '@angular/core';
import { Response }                                   from '@angular/http';
import { CookieService }                              from 'angular2-cookie/core';
import 'rxjs/Rx';

import { Authentication, Email, ResetPassword, User } from '../_models/index';
import { UserService }                                from './user.service';
import { ApiService }                                 from './api.service';


@Injectable()
export class AuthenticationService {
    email = new Email;
    token: string;

    constructor(private http: ApiService,
                private userService: UserService,
                private _cookieService:CookieService) {
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }

    getEmail() {
        /*
        Get email.
        :return: email
        */
        return this.email;
    }

    checkEmail(email: string) {
        /*
        Check if the user is registered or not.
        :param email:
        */
        return this.http.get('/user/rest-auth/user_exist/' + email + '/')
            .map((response: Response) => { return response.json();});
    }

    login(authentication: Authentication) {
        /*
        Login.
        :param authentication:
        */
        return this.http.post('/rest-auth/login/', authentication)
            .map((response: Response) => {
                let res = response.json();
                if (res.token) {
                    this.userService.refreshCurrentUser();
                    res.user['token'] = res.token;
                    localStorage.setItem('currentUser', JSON.stringify(res.user));
                }
                return response.json();});
    }

    register(user: Authentication) {
        /*
        Registration user.
        :param user:
        */
        return this.http.post("/rest-auth/registration/",
                { "email": user.email,
                  "password1": user.password,
                  "password2": user.password, })
            .map((response: Response) => { });
    }

    registrationSecondStep(user: User) {
        /*
        Second step of registration. Update user information.
        :param user:
        */
        return this.http.patch("/rest-auth/user/",
                { "first_name": user.first_name,
                  "last_name": user.last_name,
                  "phone": user.phone,
                  "country": user.country,})
            .map((response: Response) => { this.userService.refreshCurrentUser();});
    }

    resetPassword(email: Email) {
        /*
        Reset user password. Send letter to email.
        :param email:
        */
        return this.http.post('/rest-auth/password/reset/', email)
            .map((response: Response) => { return response.json();});
    }

    resetPasswordConfirm(resetPassword: ResetPassword) {
        /*
        Reset user password. Change user password.
        :param resetPassword:
        */
        return this.http.post('/rest-auth/password/reset/confirm/',
                { "new_password1": resetPassword.password,
                  "new_password2": resetPassword.password,
                  "token": resetPassword.token,
                  "uid": resetPassword.uid })
            .map((response: Response) => { return response.json();});
    }

    logout() {
        /*
        Logout.
        */
        return this.http.post("/rest-auth/logout/", {})
            .map((response: Response) => {
                this.userService.removeCurrentUser();
                this._cookieService.remove('csrftoken');
        });
    }
}
