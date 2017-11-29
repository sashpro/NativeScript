/* Api service */
import { Injectable }                                 from '@angular/core';
import { Http, Headers, RequestOptions }              from '@angular/http';
import { CookieService }                              from 'angular2-cookie/core';
import { Observable }                                 from 'rxjs/Observable';
import { BehaviorSubject }                            from 'rxjs/BehaviorSubject';
import 'rxjs/Rx';


@Injectable()
export class ApiService {
    headers: Headers;
    options: RequestOptions;
    apiURL = '/api/v1.0';
    errorUnauthorized = new BehaviorSubject(null);

    constructor( private http: Http,
                 private _cookieService:CookieService, ) { }

    private _refreshHeader() {
        this.headers = new Headers({ 'Content-Type': 'application/json',
            'Accept': 'application/json; charset=utf-8',
            'X-CSRFToken': this._cookieService.get('csrftoken')});
        this.options = new RequestOptions({ headers: this.headers });
    }

    getApiUrl(url: string) {
        return this.apiURL + url;
    }

    get(url: string) {
        /*
        Get method.
        :param url:
        */
        this._refreshHeader();
        let apiUrl = this.getApiUrl(url);
        return this.http.get(apiUrl, this.options)
            .catch((error: any)=> { return this.catchError(error);});
    }

    post(url: string, body: any) {
        /*
        Post method.
        :param url:
        :param body:
        */
        this._refreshHeader();
        let apiUrl = this.getApiUrl(url);
        return this.http.post(apiUrl, body, this.options)
            .catch((error: any)=> { return this.catchError(error);});
    }

    put(url: string, body: any) {
        /*
        Put method.
        :param url:
        :param body:
        */
        this._refreshHeader();
        let apiUrl = this.getApiUrl(url);
        return this.http.put(apiUrl, body, this.options)
            .catch((error: any)=> { return this.catchError(error);});
    }

    patch(url: string, body: any) {
        /*
        Patch method.
        :param url:
        :param body:
        */
        if ( Object.prototype.toString.call(body) === "[object FormData]" ) {
            this.headers = new Headers({
                'Accept': 'application/json',
                'X-CSRFToken': this._cookieService.get('csrftoken')
            });
            this.options = new RequestOptions({headers: this.headers});
        } else {
            this._refreshHeader();
        }
        let apiUrl = this.getApiUrl(url);
        return this.http.patch(apiUrl, body, this.options)
            .catch((error: any)=> { return this.catchError(error);});
    }

    delete(url: string) {
        /*
        Delete method.
        :param url:
        */
        this._refreshHeader();
        let apiUrl = this.getApiUrl(url);
        return this.http.delete(apiUrl, this.options)
            .catch((error: any)=> { return this.catchError(error);});
    }

    catchError(error: any) {
        if (error.status==401) {
            let error = {'isLogin': false};
            this.errorUnauthorized.next(error);
        } else if (error.status==504) {
            return Observable.throw({"detail": "Server is not available, please try again later"});
        }
        return Observable.throw(JSON.parse(error._body));
    }

}
