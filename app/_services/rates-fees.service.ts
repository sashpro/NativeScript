/* Rates Fees Service */
import { Injectable }                                 from '@angular/core';
import { Response }                                   from '@angular/http';
import { Subject }                                    from 'rxjs/Subject';
import { Observable }                                 from 'rxjs/Observable';
import 'rxjs/Rx';

import { ChangeFee }                                  from '../_models/index';
import { ApiService }                                 from './api.service';


@Injectable()
export class RateFeeService {
    private currentRates = new Subject;
    private currentActiveRates = new Subject;
    private currentFees = new Subject;

    constructor( private http: ApiService ) { }

    getRates(date: string): Observable<any> {
        /*
        Get rates.
         */
        this.http.get('/rates_fee/exchange_rate_list/?date_since=' + date)
            .map((response: Response) => { return response.json();})
            .catch((error: any) => { return Observable.throw(error);})
            .subscribe((data: Response) => { this.setRates(data);});
        return this.currentRates;
    }

    setRates(data) {
        /*
        Set rates.
         */
        this.currentRates.next(data);
    }

    getActiveRates(): Observable<any> {
        /*
        Get active rates.
         */
        this.http.get('/rates_fee/exchange_rate_list/?active=True')
            .map((response: Response) => { return response.json();})
            .catch((error: any) => { return Observable.throw(error);})
            .subscribe((data: Response) => { this.setActiveRates(data);});
        return this.currentActiveRates;
    }

    setActiveRates(data) {
        /*
        Set active rates.
         */
        this.currentActiveRates.next(data);
    }

    changeRate(changeRate: any) {
        /*
        Change rate.
        :param changeRate:
        :return:
         */
        return this.http.post('/rates_fee/exchange/pairs/create_rate/',
                              { "pair": changeRate.pair.pk,
                                "buy_rate": changeRate.new_buy_rate,
                                "sell_rate": changeRate.new_sell_rate,
                              })
            .map((response: Response) => { this.getActiveRates();});
    }

    getFees(): Observable<any> {
        /*
        Get fees.
         */
        this.http.get('/rates_fee/service/list/')
            .map((response: Response) => { return response.json();})
            .catch((error: any) => { return Observable.throw(error);})
            .subscribe((data: Response) => { this.setFees(data);});
        return this.currentFees;
    }

    setFees(data) {
        /*
        Set fees.
         */
        this.currentFees.next(data);
    }

    updateFee(changeFee: ChangeFee) {
        /*
        Change fee.
        :param changeFee:
        :return:
         */
        return this.http.patch('/rates_fee/service/fee/' + changeFee.id + '/',
                              { "const_fee": changeFee.const_fee,
                                "percent_fee": changeFee.percent_fee,
                              })
            .map((response: Response) => { this.getFees();});
    }

    getFilterServices ( currency: string, operation: string ) {
        /*
        Get filter services.
        :param currency:
        :param operation:
        :return:
         */
        return this.http.get('/rates_fee/service/list/?currency=' + currency + '&operation_type=' + operation)
            .map((response: Response) => { return response.json();});
    }
}
