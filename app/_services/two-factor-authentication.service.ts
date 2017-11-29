/* Two factor authentication service */
import { Injectable }                                 from '@angular/core';
import { Response }                                   from '@angular/http';
import { Observable }                                 from 'rxjs/Observable';
import { Subject }                                    from 'rxjs/Subject';

import { SmsRequest, SmsVerify }                      from './../_models/index';
import { ApiService }                                 from './api.service';

@Injectable()
export class TwoFactorAuthenticationService {
    twoFactorStatus = new Subject;

    constructor( private http: ApiService ) {
        this.twoFactorStatus.next(null);
    }

    getTwoFactorStatus(): Observable<any> {
        /*
        Get information about two factor authentication.
        :return:
        */
        this.http.get('/mfa/')
            .map((response: Response) => { return response.json();})
            .subscribe(data => {
                  if (data.enabled) {
                      this.setTwoFactorStatus('active');
                  } else {
                      this.setTwoFactorStatus('not active');
                  }
            });
        return this.twoFactorStatus;
    }

    setTwoFactorStatus(data) {
        /*
        Set information about two factor authentication.
        */
        this.twoFactorStatus.next(data);
    }


    smsRequest(smsRequest: SmsRequest) {
        /*
        Sms request.
        :param smsRequest:
        :return:
        */
        return this.http.put('/mfa/sms/request/', smsRequest)
            .map((response: Response) => { return response.json();});
    }

    smsVerify(smsVerify: SmsVerify) {
        /*
        Sms verify.
        :param smsVerify:
        :return:
        */
        return this.http.put('/mfa/sms/verify/', smsVerify)
            .map((response: Response) => { this.getTwoFactorStatus();});
    }

    deactivate() {
        /*
        Deactivate two factor authentication.
        :return:
        */
        return this.http.delete('/mfa/')
            .map((response: Response) => { this.getTwoFactorStatus();});
    }

}
