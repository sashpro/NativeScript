/* Approve Service */
import { Injectable }                                from '@angular/core';
import { Response }                                  from '@angular/http';
import { Observable }                                from 'rxjs/Observable';
import { Subject }                                   from 'rxjs/Subject';
import 'rxjs/Rx';


import { ApiService }                                 from './api.service';


@Injectable()
export class ApproveService {
    private activeTransactions = new Subject;

    constructor( private http: ApiService ) { }

    getActiveTransactions(): Observable<any> {
        /*
        Get active transactions.
        :return:
         */
        this.http.get('/wallet/transaction/active/list/')
            .map((response: Response) => { return response.json();})
            .catch((error: any) => { return Observable.throw(error);})
            .subscribe((data: Response) => { this.setActiveTransactions(data);});
        return this.activeTransactions;
    }

    setActiveTransactions(data) {
        /*
        Set active transactions.
         */
        this.activeTransactions.next(data);
    }

    acceptTransaction(hash: string) {
        /*
        Accept transaction.
        :return:
         */
        return this.http.patch('/wallet/transaction/accept/' + hash + '/', null)
            .map((response: Response) => { this.getActiveTransactions();});
    }

    approveTransaction(hash: string) {
        /*
        Approve transaction.
        :return:
         */
        return this.http.patch('/wallet/transaction/approve/' + hash + '/', null)
            .map((response: Response) => { this.getActiveTransactions();});
    }

    declineTransaction(hash: string) {
        /*
        Decline transaction.
        :return:
         */
        return this.http.patch('/wallet/transaction/decline/' + hash + '/', null)
            .map((response: Response) => { this.getActiveTransactions();});
    }
}
