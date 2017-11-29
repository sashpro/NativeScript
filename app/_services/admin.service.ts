/* Admin service */
import { Injectable }                                 from '@angular/core';
import { Response }                                   from '@angular/http';
import 'rxjs/Rx';

import { SendEmail }                                  from '../_models/index';
import { ApiService }                                 from './api.service';
import { GlobalStorageService }                       from './global-storage.service';

@Injectable()
export class AdminService {

    constructor( private globalStorageService: GlobalStorageService,
                 private http: ApiService ) { }

    getUsers( substring: string ) {
        /*
        Get list of users
        :param substring:
        :return: list of users
         */
        return this.http.get(`/user/admin/users/?substring=${substring}`)
            .map((response: Response) => {return response.json()});

    }

    getUser( pk: number ) {
        /*
        Get user by id
        :param pk: users id
        :return: information about user
         */
        return this.http.get('/user/admin/user/' + pk + '/')
            .map((response: Response) => { return response.json();});
    }

    activateDeactivateUser( pk: number, states: boolean ) {
        /*
        Activate or deactivate user
        :param pk: users id
        :param states:
        :return:
         */
        return this.http.patch('/user/admin/user/' + pk + '/',
             { "is_active": states })
            .map((response: Response) => { return response.json();});
    }

    getUserWallets( pk: number ) {
        /*
        Get users wallets by users id
        :param pk: users id
        :return: list of users wallets
         */
        return this.http.get('/wallet/admin/' + pk + '/')
            .map((response: Response) => {let proc_resp = response.json();
                    proc_resp.map(wallet => { wallet.precision = +this.globalStorageService.getCurrencyPrecision(wallet.currency)});
                return proc_resp;
            });
    }

    getUsersTransactions() {
        /*
        Get users' transactions
        :return: list of users' transactions
         */
        return this.http.get('/wallet/admin/total_user_transactions/')
            .map((response: Response) => {return response.json();});
    }

    getUserTransactions( pk: number ) {
        /*
        Get user transactions by user id
        :param pk: user id
        :return: list of users transactions
         */
        return this.http.get('/wallet/admin/total_user_transactions/' + pk + '/')
            .map((response: Response) => {return response.json();});
    }

    getTotalAmount() {
        /*
        Get total amount at system
        :return: list of total amount
         */
        return this.http.get('/wallet/admin/total_amount/')
            .map((response: Response) => { return response.json();});
    }

    getWallets() {
        /*
        Get total amount at system
        :return: list of total amount
         */
        return this.http.get('/wallet/')
            .map((response: Response) => response.json());
    }

    getUserLogs(pk: number){
        return this.http.get('/user/admin/user/' + pk + '/logs/')
            .map((response: Response) => response.json());

    }

    sendEmail(email: SendEmail) {
        /*
        Send email for user
        :return:
        */
        return this.http.post('/dashboard/sendmail/',
                { "message": email.message,
                  "subject": email.subject,
                  "user": email.user, })
            .map((response: Response) => { });
    }

}
