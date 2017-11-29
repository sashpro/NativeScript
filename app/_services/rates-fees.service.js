"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* Rates Fees Service */
var core_1 = require("@angular/core");
var Subject_1 = require("rxjs/Subject");
var Observable_1 = require("rxjs/Observable");
require("rxjs/Rx");
var api_service_1 = require("./api.service");
var RateFeeService = (function () {
    function RateFeeService(http) {
        this.http = http;
        this.currentRates = new Subject_1.Subject;
        this.currentActiveRates = new Subject_1.Subject;
        this.currentFees = new Subject_1.Subject;
    }
    RateFeeService.prototype.getRates = function (date) {
        var _this = this;
        /*
        Get rates.
         */
        this.http.get('/rates_fee/exchange_rate_list/?date_since=' + date)
            .map(function (response) { return response.json(); })
            .catch(function (error) { return Observable_1.Observable.throw(error); })
            .subscribe(function (data) { _this.setRates(data); });
        return this.currentRates;
    };
    RateFeeService.prototype.setRates = function (data) {
        /*
        Set rates.
         */
        this.currentRates.next(data);
    };
    RateFeeService.prototype.getActiveRates = function () {
        var _this = this;
        /*
        Get active rates.
         */
        this.http.get('/rates_fee/exchange_rate_list/?active=True')
            .map(function (response) { return response.json(); })
            .catch(function (error) { return Observable_1.Observable.throw(error); })
            .subscribe(function (data) { _this.setActiveRates(data); });
        return this.currentActiveRates;
    };
    RateFeeService.prototype.setActiveRates = function (data) {
        /*
        Set active rates.
         */
        this.currentActiveRates.next(data);
    };
    RateFeeService.prototype.changeRate = function (changeRate) {
        var _this = this;
        /*
        Change rate.
        :param changeRate:
        :return:
         */
        return this.http.post('/rates_fee/exchange/pairs/create_rate/', { "pair": changeRate.pair.pk,
            "buy_rate": changeRate.new_buy_rate,
            "sell_rate": changeRate.new_sell_rate,
        })
            .map(function (response) { _this.getActiveRates(); });
    };
    RateFeeService.prototype.getFees = function () {
        var _this = this;
        /*
        Get fees.
         */
        this.http.get('/rates_fee/service/list/')
            .map(function (response) { return response.json(); })
            .catch(function (error) { return Observable_1.Observable.throw(error); })
            .subscribe(function (data) { _this.setFees(data); });
        return this.currentFees;
    };
    RateFeeService.prototype.setFees = function (data) {
        /*
        Set fees.
         */
        this.currentFees.next(data);
    };
    RateFeeService.prototype.updateFee = function (changeFee) {
        var _this = this;
        /*
        Change fee.
        :param changeFee:
        :return:
         */
        return this.http.patch('/rates_fee/service/fee/' + changeFee.id + '/', { "const_fee": changeFee.const_fee,
            "percent_fee": changeFee.percent_fee,
        })
            .map(function (response) { _this.getFees(); });
    };
    RateFeeService.prototype.getFilterServices = function (currency, operation) {
        /*
        Get filter services.
        :param currency:
        :param operation:
        :return:
         */
        return this.http.get('/rates_fee/service/list/?currency=' + currency + '&operation_type=' + operation)
            .map(function (response) { return response.json(); });
    };
    RateFeeService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [api_service_1.ApiService])
    ], RateFeeService);
    return RateFeeService;
}());
exports.RateFeeService = RateFeeService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmF0ZXMtZmVlcy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmF0ZXMtZmVlcy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsd0JBQXdCO0FBQ3hCLHNDQUEyRTtBQUUzRSx3Q0FBMEU7QUFDMUUsOENBQTZFO0FBQzdFLG1CQUFpQjtBQUdqQiw2Q0FBMkU7QUFJM0U7SUFLSSx3QkFBcUIsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUo3QixpQkFBWSxHQUFHLElBQUksaUJBQU8sQ0FBQztRQUMzQix1QkFBa0IsR0FBRyxJQUFJLGlCQUFPLENBQUM7UUFDakMsZ0JBQVcsR0FBRyxJQUFJLGlCQUFPLENBQUM7SUFFUSxDQUFDO0lBRTNDLGlDQUFRLEdBQVIsVUFBUyxJQUFZO1FBQXJCLGlCQVNDO1FBUkc7O1dBRUc7UUFDSCxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyw0Q0FBNEMsR0FBRyxJQUFJLENBQUM7YUFDN0QsR0FBRyxDQUFDLFVBQUMsUUFBa0IsSUFBTyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUEsQ0FBQyxDQUFDO2FBQ3ZELEtBQUssQ0FBQyxVQUFDLEtBQVUsSUFBTyxNQUFNLENBQUMsdUJBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQSxDQUFDLENBQUM7YUFDekQsU0FBUyxDQUFDLFVBQUMsSUFBYyxJQUFPLEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQSxDQUFDLENBQUMsQ0FBQztRQUM1RCxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQztJQUM3QixDQUFDO0lBRUQsaUNBQVEsR0FBUixVQUFTLElBQUk7UUFDVDs7V0FFRztRQUNILElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFRCx1Q0FBYyxHQUFkO1FBQUEsaUJBU0M7UUFS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RSxDQUFDO0lBakdRLGNBQWM7UUFEMUIsaUJBQVUsRUFBRTt5Q0FNa0Isd0JBQVU7T0FMNUIsY0FBYyxDQWtHMUI7SUFBRCxxQkFBQztDQUFBLEFBbEdELElBa0dDO0FBbEdZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiLyogUmF0ZXMgRmVlcyBTZXJ2aWNlICovXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJlc3BvbnNlIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgU3ViamVjdCB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSAncnhqcy9TdWJqZWN0JztcbmltcG9ydCB7IE9ic2VydmFibGUgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5pbXBvcnQgJ3J4anMvUngnO1xuXG5pbXBvcnQgeyBDaGFuZ2VGZWUgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tICcuLi9fbW9kZWxzL2luZGV4JztcbmltcG9ydCB7IEFwaVNlcnZpY2UgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gJy4vYXBpLnNlcnZpY2UnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBSYXRlRmVlU2VydmljZSB7XG4gICAgcHJpdmF0ZSBjdXJyZW50UmF0ZXMgPSBuZXcgU3ViamVjdDtcbiAgICBwcml2YXRlIGN1cnJlbnRBY3RpdmVSYXRlcyA9IG5ldyBTdWJqZWN0O1xuICAgIHByaXZhdGUgY3VycmVudEZlZXMgPSBuZXcgU3ViamVjdDtcblxuICAgIGNvbnN0cnVjdG9yKCBwcml2YXRlIGh0dHA6IEFwaVNlcnZpY2UgKSB7IH1cblxuICAgIGdldFJhdGVzKGRhdGU6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgICAgIC8qXG4gICAgICAgIEdldCByYXRlcy5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuaHR0cC5nZXQoJy9yYXRlc19mZWUvZXhjaGFuZ2VfcmF0ZV9saXN0Lz9kYXRlX3NpbmNlPScgKyBkYXRlKVxuICAgICAgICAgICAgLm1hcCgocmVzcG9uc2U6IFJlc3BvbnNlKSA9PiB7IHJldHVybiByZXNwb25zZS5qc29uKCk7fSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4geyByZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvcik7fSlcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKGRhdGE6IFJlc3BvbnNlKSA9PiB7IHRoaXMuc2V0UmF0ZXMoZGF0YSk7fSk7XG4gICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRSYXRlcztcbiAgICB9XG5cbiAgICBzZXRSYXRlcyhkYXRhKSB7XG4gICAgICAgIC8qXG4gICAgICAgIFNldCByYXRlcy5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuY3VycmVudFJhdGVzLm5leHQoZGF0YSk7XG4gICAgfVxuXG4gICAgZ2V0QWN0aXZlUmF0ZXMoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICAgICAgLypcbiAgICAgICAgR2V0IGFjdGl2ZSByYXRlcy5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuaHR0cC5nZXQoJy9yYXRlc19mZWUvZXhjaGFuZ2VfcmF0ZV9saXN0Lz9hY3RpdmU9VHJ1ZScpXG4gICAgICAgICAgICAubWFwKChyZXNwb25zZTogUmVzcG9uc2UpID0+IHsgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTt9KVxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiB7IHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycm9yKTt9KVxuICAgICAgICAgICAgLnN1YnNjcmliZSgoZGF0YTogUmVzcG9uc2UpID0+IHsgdGhpcy5zZXRBY3RpdmVSYXRlcyhkYXRhKTt9KTtcbiAgICAgICAgcmV0dXJuIHRoaXMuY3VycmVudEFjdGl2ZVJhdGVzO1xuICAgIH1cblxuICAgIHNldEFjdGl2ZVJhdGVzKGRhdGEpIHtcbiAgICAgICAgLypcbiAgICAgICAgU2V0IGFjdGl2ZSByYXRlcy5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuY3VycmVudEFjdGl2ZVJhdGVzLm5leHQoZGF0YSk7XG4gICAgfVxuXG4gICAgY2hhbmdlUmF0ZShjaGFuZ2VSYXRlOiBhbnkpIHtcbiAgICAgICAgLypcbiAgICAgICAgQ2hhbmdlIHJhdGUuXG4gICAgICAgIDpwYXJhbSBjaGFuZ2VSYXRlOlxuICAgICAgICA6cmV0dXJuOlxuICAgICAgICAgKi9cbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KCcvcmF0ZXNfZmVlL2V4Y2hhbmdlL3BhaXJzL2NyZWF0ZV9yYXRlLycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IFwicGFpclwiOiBjaGFuZ2VSYXRlLnBhaXIucGssXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYnV5X3JhdGVcIjogY2hhbmdlUmF0ZS5uZXdfYnV5X3JhdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2VsbF9yYXRlXCI6IGNoYW5nZVJhdGUubmV3X3NlbGxfcmF0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAubWFwKChyZXNwb25zZTogUmVzcG9uc2UpID0+IHsgdGhpcy5nZXRBY3RpdmVSYXRlcygpO30pO1xuICAgIH1cblxuICAgIGdldEZlZXMoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICAgICAgLypcbiAgICAgICAgR2V0IGZlZXMuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmh0dHAuZ2V0KCcvcmF0ZXNfZmVlL3NlcnZpY2UvbGlzdC8nKVxuICAgICAgICAgICAgLm1hcCgocmVzcG9uc2U6IFJlc3BvbnNlKSA9PiB7IHJldHVybiByZXNwb25zZS5qc29uKCk7fSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4geyByZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvcik7fSlcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKGRhdGE6IFJlc3BvbnNlKSA9PiB7IHRoaXMuc2V0RmVlcyhkYXRhKTt9KTtcbiAgICAgICAgcmV0dXJuIHRoaXMuY3VycmVudEZlZXM7XG4gICAgfVxuXG4gICAgc2V0RmVlcyhkYXRhKSB7XG4gICAgICAgIC8qXG4gICAgICAgIFNldCBmZWVzLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5jdXJyZW50RmVlcy5uZXh0KGRhdGEpO1xuICAgIH1cblxuICAgIHVwZGF0ZUZlZShjaGFuZ2VGZWU6IENoYW5nZUZlZSkge1xuICAgICAgICAvKlxuICAgICAgICBDaGFuZ2UgZmVlLlxuICAgICAgICA6cGFyYW0gY2hhbmdlRmVlOlxuICAgICAgICA6cmV0dXJuOlxuICAgICAgICAgKi9cbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wYXRjaCgnL3JhdGVzX2ZlZS9zZXJ2aWNlL2ZlZS8nICsgY2hhbmdlRmVlLmlkICsgJy8nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBcImNvbnN0X2ZlZVwiOiBjaGFuZ2VGZWUuY29uc3RfZmVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInBlcmNlbnRfZmVlXCI6IGNoYW5nZUZlZS5wZXJjZW50X2ZlZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAubWFwKChyZXNwb25zZTogUmVzcG9uc2UpID0+IHsgdGhpcy5nZXRGZWVzKCk7fSk7XG4gICAgfVxuXG4gICAgZ2V0RmlsdGVyU2VydmljZXMgKCBjdXJyZW5jeTogc3RyaW5nLCBvcGVyYXRpb246IHN0cmluZyApIHtcbiAgICAgICAgLypcbiAgICAgICAgR2V0IGZpbHRlciBzZXJ2aWNlcy5cbiAgICAgICAgOnBhcmFtIGN1cnJlbmN5OlxuICAgICAgICA6cGFyYW0gb3BlcmF0aW9uOlxuICAgICAgICA6cmV0dXJuOlxuICAgICAgICAgKi9cbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoJy9yYXRlc19mZWUvc2VydmljZS9saXN0Lz9jdXJyZW5jeT0nICsgY3VycmVuY3kgKyAnJm9wZXJhdGlvbl90eXBlPScgKyBvcGVyYXRpb24pXG4gICAgICAgICAgICAubWFwKChyZXNwb25zZTogUmVzcG9uc2UpID0+IHsgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTt9KTtcbiAgICB9XG59XG4iXX0=