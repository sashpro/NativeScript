/* Global storage service */
import { Injectable }                                 from '@angular/core';
import { Response }                                   from '@angular/http';

import { ApiService }                                 from './api.service';


@Injectable()
export class GlobalStorageService {
    private _currency_table: any;
    private _country_list: any;

    constructor(private http: ApiService) {}

    loadInitialData (): Promise<any> {
        /*
        Load initial data.
         */
        const result = Promise.all([
            this.http.get('/wallet/currency/')
                .map((response: Response) => response.json())
                .toPromise()
                .then(data => {this._currency_table = data})
                .catch((error: any) => {Promise.resolve()}),
            this.http.get('/user/countries')
                .map((response: Response) => response.json())
                .toPromise()
                .then(data => {this._country_list = data})
                .catch((error: any) => {Promise.resolve()})
            ]);
        return result;
    }

    getCurrencyTable() {
        return this._currency_table;
    }

    getCurrencyList() {
        return Object.keys(this._currency_table);
    }

    getCurrencyPrecision (corency_name: string): number {
        return this._currency_table[corency_name].precision;
    }

    getCountryList () {
        return this._country_list;
    }
}
