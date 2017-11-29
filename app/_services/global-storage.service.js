"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* Global storage service */
var core_1 = require("@angular/core");
var api_service_1 = require("./api.service");
var GlobalStorageService = (function () {
    function GlobalStorageService(http) {
        this.http = http;
    }
    GlobalStorageService.prototype.loadInitialData = function () {
        var _this = this;
        /*
        Load initial data.
         */
        var result = Promise.all([
            this.http.get('/wallet/currency/')
                .map(function (response) { return response.json(); })
                .toPromise()
                .then(function (data) { _this._currency_table = data; })
                .catch(function (error) { Promise.resolve(); }),
            this.http.get('/user/countries')
                .map(function (response) { return response.json(); })
                .toPromise()
                .then(function (data) { _this._country_list = data; })
                .catch(function (error) { Promise.resolve(); })
        ]);
        return result;
    };
    GlobalStorageService.prototype.getCurrencyTable = function () {
        return this._currency_table;
    };
    GlobalStorageService.prototype.getCurrencyList = function () {
        return Object.keys(this._currency_table);
    };
    GlobalStorageService.prototype.getCurrencyPrecision = function (corency_name) {
        return this._currency_table[corency_name].precision;
    };
    GlobalStorageService.prototype.getCountryList = function () {
        return this._country_list;
    };
    GlobalStorageService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [api_service_1.ApiService])
    ], GlobalStorageService);
    return GlobalStorageService;
}());
exports.GlobalStorageService = GlobalStorageService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLXN0b3JhZ2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImdsb2JhbC1zdG9yYWdlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw0QkFBNEI7QUFDNUIsc0NBQTJFO0FBRzNFLDZDQUEyRTtBQUkzRTtJQUlJLDhCQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO0lBQUcsQ0FBQztJQUV4Qyw4Q0FBZSxHQUFmO1FBQUEsaUJBaUJDO1FBaEJHOztXQUVHO1FBQ0gsSUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQztZQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQztpQkFDN0IsR0FBRyxDQUFDLFVBQUMsUUFBa0IsSUFBSyxPQUFBLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBZixDQUFlLENBQUM7aUJBQzVDLFNBQVMsRUFBRTtpQkFDWCxJQUFJLENBQUMsVUFBQSxJQUFJLElBQUssS0FBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUEsQ0FBQSxDQUFDLENBQUM7aUJBQzNDLEtBQUssQ0FBQyxVQUFDLEtBQVUsSUFBTSxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUEsQ0FBQSxDQUFDLENBQUM7WUFDL0MsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUM7aUJBQzNCLEdBQUcsQ0FBQyxVQUFDLFFBQWtCLElBQUssT0FBQSxRQUFRLENBQUMsSUFBSSxFQUFFLEVBQWYsQ0FBZSxDQUFDO2lCQUM1QyxTQUFTLEVBQUU7aUJBQ1gsSUFBSSxDQUFDLFVBQUEsSUFBSSxJQUFLLEtBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFBLENBQUEsQ0FBQyxDQUFDO2lCQUN6QyxLQUFLLENBQUMsVUFBQyxLQUFVLElBQU0sT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFBLENBQUEsQ0FBQyxDQUFDO1NBQzlDLENBQUMsQ0FBQztRQUNQLE1BQU0sQ0FBQyxNQUFNLENBQUM7SUFDbEIsQ0FBQztJQUVELCtDQUFnQixHQUFoQjtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDO0lBQ2hDLENBQUM7SUFFRCw4Q0FBZSxHQUFmO1FBQ0ksTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFRCxtREFBb0IsR0FBcEIsVUFBc0IsWUFBb0I7UUFDdEMsTUFBTSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ3hELENBQUM7SUFFRCw2Q0FBYyxHQUFkO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDOUIsQ0FBQztJQXZDUSxvQkFBb0I7UUFEaEMsaUJBQVUsRUFBRTt5Q0FLaUIsd0JBQVU7T0FKM0Isb0JBQW9CLENBd0NoQztJQUFELDJCQUFDO0NBQUEsQUF4Q0QsSUF3Q0M7QUF4Q1ksb0RBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiLyogR2xvYmFsIHN0b3JhZ2Ugc2VydmljZSAqL1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZXNwb25zZSB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tICdAYW5ndWxhci9odHRwJztcblxuaW1wb3J0IHsgQXBpU2VydmljZSB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSAnLi9hcGkuc2VydmljZSc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEdsb2JhbFN0b3JhZ2VTZXJ2aWNlIHtcbiAgICBwcml2YXRlIF9jdXJyZW5jeV90YWJsZTogYW55O1xuICAgIHByaXZhdGUgX2NvdW50cnlfbGlzdDogYW55O1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBBcGlTZXJ2aWNlKSB7fVxuXG4gICAgbG9hZEluaXRpYWxEYXRhICgpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICAvKlxuICAgICAgICBMb2FkIGluaXRpYWwgZGF0YS5cbiAgICAgICAgICovXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgIHRoaXMuaHR0cC5nZXQoJy93YWxsZXQvY3VycmVuY3kvJylcbiAgICAgICAgICAgICAgICAubWFwKChyZXNwb25zZTogUmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgICAgICAgICAudG9Qcm9taXNlKClcbiAgICAgICAgICAgICAgICAudGhlbihkYXRhID0+IHt0aGlzLl9jdXJyZW5jeV90YWJsZSA9IGRhdGF9KVxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4ge1Byb21pc2UucmVzb2x2ZSgpfSksXG4gICAgICAgICAgICB0aGlzLmh0dHAuZ2V0KCcvdXNlci9jb3VudHJpZXMnKVxuICAgICAgICAgICAgICAgIC5tYXAoKHJlc3BvbnNlOiBSZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAgICAgICAgIC50b1Byb21pc2UoKVxuICAgICAgICAgICAgICAgIC50aGVuKGRhdGEgPT4ge3RoaXMuX2NvdW50cnlfbGlzdCA9IGRhdGF9KVxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4ge1Byb21pc2UucmVzb2x2ZSgpfSlcbiAgICAgICAgICAgIF0pO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIGdldEN1cnJlbmN5VGFibGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jdXJyZW5jeV90YWJsZTtcbiAgICB9XG5cbiAgICBnZXRDdXJyZW5jeUxpc3QoKSB7XG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLl9jdXJyZW5jeV90YWJsZSk7XG4gICAgfVxuXG4gICAgZ2V0Q3VycmVuY3lQcmVjaXNpb24gKGNvcmVuY3lfbmFtZTogc3RyaW5nKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2N1cnJlbmN5X3RhYmxlW2NvcmVuY3lfbmFtZV0ucHJlY2lzaW9uO1xuICAgIH1cblxuICAgIGdldENvdW50cnlMaXN0ICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvdW50cnlfbGlzdDtcbiAgICB9XG59XG4iXX0=