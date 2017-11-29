"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* Api service */
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var core_2 = require("angular2-cookie/core");
var Observable_1 = require("rxjs/Observable");
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
require("rxjs/Rx");
var ApiService = (function () {
    function ApiService(http, _cookieService) {
        this.http = http;
        this._cookieService = _cookieService;
        this.apiURL = '/api/v1.0';
        this.errorUnauthorized = new BehaviorSubject_1.BehaviorSubject(null);
    }
    ApiService.prototype._refreshHeader = function () {
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json',
            'Accept': 'application/json; charset=utf-8',
            'X-CSRFToken': this._cookieService.get('csrftoken') });
        this.options = new http_1.RequestOptions({ headers: this.headers });
    };
    ApiService.prototype.getApiUrl = function (url) {
        return this.apiURL + url;
    };
    ApiService.prototype.get = function (url) {
        var _this = this;
        /*
        Get method.
        :param url:
        */
        this._refreshHeader();
        var apiUrl = this.getApiUrl(url);
        return this.http.get(apiUrl, this.options)
            .catch(function (error) { return _this.catchError(error); });
    };
    ApiService.prototype.post = function (url, body) {
        var _this = this;
        /*
        Post method.
        :param url:
        :param body:
        */
        this._refreshHeader();
        var apiUrl = this.getApiUrl(url);
        return this.http.post(apiUrl, body, this.options)
            .catch(function (error) { return _this.catchError(error); });
    };
    ApiService.prototype.put = function (url, body) {
        var _this = this;
        /*
        Put method.
        :param url:
        :param body:
        */
        this._refreshHeader();
        var apiUrl = this.getApiUrl(url);
        return this.http.put(apiUrl, body, this.options)
            .catch(function (error) { return _this.catchError(error); });
    };
    ApiService.prototype.patch = function (url, body) {
        var _this = this;
        /*
        Patch method.
        :param url:
        :param body:
        */
        if (Object.prototype.toString.call(body) === "[object FormData]") {
            this.headers = new http_1.Headers({
                'Accept': 'application/json',
                'X-CSRFToken': this._cookieService.get('csrftoken')
            });
            this.options = new http_1.RequestOptions({ headers: this.headers });
        }
        else {
            this._refreshHeader();
        }
        var apiUrl = this.getApiUrl(url);
        return this.http.patch(apiUrl, body, this.options)
            .catch(function (error) { return _this.catchError(error); });
    };
    ApiService.prototype.delete = function (url) {
        var _this = this;
        /*
        Delete method.
        :param url:
        */
        this._refreshHeader();
        var apiUrl = this.getApiUrl(url);
        return this.http.delete(apiUrl, this.options)
            .catch(function (error) { return _this.catchError(error); });
    };
    ApiService.prototype.catchError = function (error) {
        if (error.status == 401) {
            var error_1 = { 'isLogin': false };
            this.errorUnauthorized.next(error_1);
        }
        else if (error.status == 504) {
            return Observable_1.Observable.throw({ "detail": "Server is not available, please try again later" });
        }
        return Observable_1.Observable.throw(JSON.parse(error._body));
    };
    ApiService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http,
            core_2.CookieService])
    ], ApiService);
    return ApiService;
}());
exports.ApiService = ApiService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcGkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGlCQUFpQjtBQUNqQixzQ0FBMkU7QUFDM0Usc0NBQTJFO0FBQzNFLDZDQUFrRjtBQUNsRiw4Q0FBNkU7QUFDN0Usd0RBQWtGO0FBQ2xGLG1CQUFpQjtBQUlqQjtJQU1JLG9CQUFxQixJQUFVLEVBQ1YsY0FBNEI7UUFENUIsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUNWLG1CQUFjLEdBQWQsY0FBYyxDQUFjO1FBSmpELFdBQU0sR0FBRyxXQUFXLENBQUM7UUFDckIsc0JBQWlCLEdBQUcsSUFBSSxpQ0FBZSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBR1MsQ0FBQztJQUVoRCxtQ0FBYyxHQUF0QjtRQUNJLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxjQUFPLENBQUMsRUFBRSxjQUFjLEVBQUUsa0JBQWtCO1lBQzNELFFBQVEsRUFBRSxpQ0FBaUM7WUFDM0MsYUFBYSxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxFQUFDLENBQUMsQ0FBQztRQUMxRCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUkscUJBQWMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztJQUNqRSxDQUFDO0lBRUQsOEJBQVMsR0FBVCxVQUFVLEdBQVc7UUFDakIsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO0lBQzdCLENBQUM7SUFFRCx3QkFBRyxHQUFILFVBQUksR0FBVztRQUFmLGlCQVNDO1FBUkc7OztVQUdFO1FBQ0YsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3RCLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxD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QUssQ0FBQyxDQUFDLENBQUEsQ0FBQyxDQUFDLENBQUM7SUFDakUsQ0FBQztJQUVELCtCQUFVLEdBQVYsVUFBVyxLQUFVO1FBQ2pCLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLElBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNwQixJQUFJLE9BQUssR0FBRyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQUMsQ0FBQztZQUMvQixJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLE9BQUssQ0FBQyxDQUFDO1FBQ3ZDLENBQUM7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sSUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQzNCLE1BQU0sQ0FBQyx1QkFBVSxDQUFDLEtBQUssQ0FBQyxFQUFDLFFBQVEsRUFBRSxpREFBaUQsRUFBQyxDQUFDLENBQUM7UUFDM0YsQ0FBQztRQUNELE1BQU0sQ0FBQyx1QkFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUE5RlEsVUFBVTtRQUR0QixpQkFBVSxFQUFFO3lDQU9rQixXQUFJO1lBQ0ssb0JBQWE7T0FQeEMsVUFBVSxDQWdHdEI7SUFBRCxpQkFBQztDQUFBLEFBaEdELElBZ0dDO0FBaEdZLGdDQUFVIiwic291cmNlc0NvbnRlbnQiOlsiLyogQXBpIHNlcnZpY2UgKi9cbmltcG9ydCB7IEluamVjdGFibGUgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cCwgSGVhZGVycywgUmVxdWVzdE9wdGlvbnMgfSAgICAgICAgICAgICAgZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgeyBDb29raWVTZXJ2aWNlIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tICdhbmd1bGFyMi1jb29raWUvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSAncnhqcy9CZWhhdmlvclN1YmplY3QnO1xuaW1wb3J0ICdyeGpzL1J4JztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQXBpU2VydmljZSB7XG4gICAgaGVhZGVyczogSGVhZGVycztcbiAgICBvcHRpb25zOiBSZXF1ZXN0T3B0aW9ucztcbiAgICBhcGlVUkwgPSAnL2FwaS92MS4wJztcbiAgICBlcnJvclVuYXV0aG9yaXplZCA9IG5ldyBCZWhhdmlvclN1YmplY3QobnVsbCk7XG5cbiAgICBjb25zdHJ1Y3RvciggcHJpdmF0ZSBodHRwOiBIdHRwLFxuICAgICAgICAgICAgICAgICBwcml2YXRlIF9jb29raWVTZXJ2aWNlOkNvb2tpZVNlcnZpY2UsICkgeyB9XG5cbiAgICBwcml2YXRlIF9yZWZyZXNoSGVhZGVyKCkge1xuICAgICAgICB0aGlzLmhlYWRlcnMgPSBuZXcgSGVhZGVycyh7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLTgnLFxuICAgICAgICAgICAgJ1gtQ1NSRlRva2VuJzogdGhpcy5fY29va2llU2VydmljZS5nZXQoJ2NzcmZ0b2tlbicpfSk7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucyh7IGhlYWRlcnM6IHRoaXMuaGVhZGVycyB9KTtcbiAgICB9XG5cbiAgICBnZXRBcGlVcmwodXJsOiBzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXBpVVJMICsgdXJsO1xuICAgIH1cblxuICAgIGdldCh1cmw6IHN0cmluZykge1xuICAgICAgICAvKlxuICAgICAgICBHZXQgbWV0aG9kLlxuICAgICAgICA6cGFyYW0gdXJsOlxuICAgICAgICAqL1xuICAgICAgICB0aGlzLl9yZWZyZXNoSGVhZGVyKCk7XG4gICAgICAgIGxldCBhcGlVcmwgPSB0aGlzLmdldEFwaVVybCh1cmwpO1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldChhcGlVcmwsIHRoaXMub3B0aW9ucylcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3I6IGFueSk9PiB7IHJldHVybiB0aGlzLmNhdGNoRXJyb3IoZXJyb3IpO30pO1xuICAgIH1cblxuICAgIHBvc3QodXJsOiBzdHJpbmcsIGJvZHk6IGFueSkge1xuICAgICAgICAvKlxuICAgICAgICBQb3N0IG1ldGhvZC5cbiAgICAgICAgOnBhcmFtIHVybDpcbiAgICAgICAgOnBhcmFtIGJvZHk6XG4gICAgICAgICovXG4gICAgICAgIHRoaXMuX3JlZnJlc2hIZWFkZXIoKTtcbiAgICAgICAgbGV0IGFwaVVybCA9IHRoaXMuZ2V0QXBpVXJsKHVybCk7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChhcGlVcmwsIGJvZHksIHRoaXMub3B0aW9ucylcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3I6IGFueSk9PiB7IHJldHVybiB0aGlzLmNhdGNoRXJyb3IoZXJyb3IpO30pO1xuICAgIH1cblxuICAgIHB1dCh1cmw6IHN0cmluZywgYm9keTogYW55KSB7XG4gICAgICAgIC8qXG4gICAgICAgIFB1dCBtZXRob2QuXG4gICAgICAgIDpwYXJhbSB1cmw6XG4gICAgICAgIDpwYXJhbSBib2R5OlxuICAgICAgICAqL1xuICAgICAgICB0aGlzLl9yZWZyZXNoSGVhZGVyKCk7XG4gICAgICAgIGxldCBhcGlVcmwgPSB0aGlzLmdldEFwaVVybCh1cmwpO1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnB1dChhcGlVcmwsIGJvZHksIHRoaXMub3B0aW9ucylcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3I6IGFueSk9PiB7IHJldHVybiB0aGlzLmNhdGNoRXJyb3IoZXJyb3IpO30pO1xuICAgIH1cblxuICAgIHBhdGNoKHVybDogc3RyaW5nLCBib2R5OiBhbnkpIHtcbiAgICAgICAgLypcbiAgICAgICAgUGF0Y2ggbWV0aG9kLlxuICAgICAgICA6cGFyYW0gdXJsOlxuICAgICAgICA6cGFyYW0gYm9keTpcbiAgICAgICAgKi9cbiAgICAgICAgaWYgKCBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYm9keSkgPT09IFwiW29iamVjdCBGb3JtRGF0YV1cIiApIHtcbiAgICAgICAgICAgIHRoaXMuaGVhZGVycyA9IG5ldyBIZWFkZXJzKHtcbiAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICdYLUNTUkZUb2tlbic6IHRoaXMuX2Nvb2tpZVNlcnZpY2UuZ2V0KCdjc3JmdG9rZW4nKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMgPSBuZXcgUmVxdWVzdE9wdGlvbnMoe2hlYWRlcnM6IHRoaXMuaGVhZGVyc30pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fcmVmcmVzaEhlYWRlcigpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBhcGlVcmwgPSB0aGlzLmdldEFwaVVybCh1cmwpO1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBhdGNoKGFwaVVybCwgYm9keSwgdGhpcy5vcHRpb25zKVxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcjogYW55KT0+IHsgcmV0dXJuIHRoaXMuY2F0Y2hFcnJvcihlcnJvcik7fSk7XG4gICAgfVxuXG4gICAgZGVsZXRlKHVybDogc3RyaW5nKSB7XG4gICAgICAgIC8qXG4gICAgICAgIERlbGV0ZSBtZXRob2QuXG4gICAgICAgIDpwYXJhbSB1cmw6XG4gICAgICAgICovXG4gICAgICAgIHRoaXMuX3JlZnJlc2hIZWFkZXIoKTtcbiAgICAgICAgbGV0IGFwaVVybCA9IHRoaXMuZ2V0QXBpVXJsKHVybCk7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlKGFwaVVybCwgdGhpcy5vcHRpb25zKVxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcjogYW55KT0+IHsgcmV0dXJuIHRoaXMuY2F0Y2hFcnJvcihlcnJvcik7fSk7XG4gICAgfVxuXG4gICAgY2F0Y2hFcnJvcihlcnJvcjogYW55KSB7XG4gICAgICAgIGlmIChlcnJvci5zdGF0dXM9PTQwMSkge1xuICAgICAgICAgICAgbGV0IGVycm9yID0geydpc0xvZ2luJzogZmFsc2V9O1xuICAgICAgICAgICAgdGhpcy5lcnJvclVuYXV0aG9yaXplZC5uZXh0KGVycm9yKTtcbiAgICAgICAgfSBlbHNlIGlmIChlcnJvci5zdGF0dXM9PTUwNCkge1xuICAgICAgICAgICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coe1wiZGV0YWlsXCI6IFwiU2VydmVyIGlzIG5vdCBhdmFpbGFibGUsIHBsZWFzZSB0cnkgYWdhaW4gbGF0ZXJcIn0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBPYnNlcnZhYmxlLnRocm93KEpTT04ucGFyc2UoZXJyb3IuX2JvZHkpKTtcbiAgICB9XG5cbn1cbiJdfQ==