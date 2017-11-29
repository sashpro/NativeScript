"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* Admin service */
var core_1 = require("@angular/core");
require("rxjs/Rx");
var api_service_1 = require("./api.service");
var global_storage_service_1 = require("./global-storage.service");
var AdminService = (function () {
    function AdminService(globalStorageService, http) {
        this.globalStorageService = globalStorageService;
        this.http = http;
    }
    AdminService.prototype.getUsers = function (substring) {
        /*
        Get list of users
        :param substring:
        :return: list of users
         */
        return this.http.get("/user/admin/users/?substring=" + substring)
            .map(function (response) { return response.json(); });
    };
    AdminService.prototype.getUser = function (pk) {
        /*
        Get user by id
        :param pk: users id
        :return: information about user
         */
        return this.http.get('/user/admin/user/' + pk + '/')
            .map(function (response) { return response.json(); });
    };
    AdminService.prototype.activateDeactivateUser = function (pk, states) {
        /*
        Activate or deactivate user
        :param pk: users id
        :param states:
        :return:
         */
        return this.http.patch('/user/admin/user/' + pk + '/', { "is_active": states })
            .map(function (response) { return response.json(); });
    };
    AdminService.prototype.getUserWallets = function (pk) {
        var _this = this;
        /*
        Get users wallets by users id
        :param pk: users id
        :return: list of users wallets
         */
        return this.http.get('/wallet/admin/' + pk + '/')
            .map(function (response) {
            var proc_resp = response.json();
            proc_resp.map(function (wallet) { wallet.precision = +_this.globalStorageService.getCurrencyPrecision(wallet.currency); });
            return proc_resp;
        });
    };
    AdminService.prototype.getUsersTransactions = function () {
        /*
        Get users' transactions
        :return: list of users' transactions
         */
        return this.http.get('/wallet/admin/total_user_transactions/')
            .map(function (response) { return response.json(); });
    };
    AdminService.prototype.getUserTransactions = function (pk) {
        /*
        Get user transactions by user id
        :param pk: user id
        :return: list of users transactions
         */
        return this.http.get('/wallet/admin/total_user_transactions/' + pk + '/')
            .map(function (response) { return response.json(); });
    };
    AdminService.prototype.getTotalAmount = function () {
        /*
        Get total amount at system
        :return: list of total amount
         */
        return this.http.get('/wallet/admin/total_amount/')
            .map(function (response) { return response.json(); });
    };
    AdminService.prototype.getWallets = function () {
        /*
        Get total amount at system
        :return: list of total amount
         */
        return this.http.get('/wallet/')
            .map(function (response) { return response.json(); });
    };
    AdminService.prototype.getUserLogs = function (pk) {
        return this.http.get('/user/admin/user/' + pk + '/logs/')
            .map(function (response) { return response.json(); });
    };
    AdminService.prototype.sendEmail = function (email) {
        /*
        Send email for user
        :return:
        */
        return this.http.post('/dashboard/sendmail/', { "message": email.message,
            "subject": email.subject,
            "user": email.user, })
            .map(function (response) { });
    };
    AdminService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [global_storage_service_1.GlobalStorageService,
            api_service_1.ApiService])
    ], AdminService);
    return AdminService;
}());
exports.AdminService = AdminService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRtaW4uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFkbWluLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxtQkFBbUI7QUFDbkIsc0NBQTJFO0FBRTNFLG1CQUFpQjtBQUdqQiw2Q0FBMkU7QUFDM0UsbUVBQXNGO0FBR3RGO0lBRUksc0JBQXFCLG9CQUEwQyxFQUMxQyxJQUFnQjtRQURoQix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBQzFDLFNBQUksR0FBSixJQUFJLENBQVk7SUFBSyxDQUFDO0lBRTNDLCtCQUFRLEdBQVIsVUFBVSxTQUFpQjtRQUN2Qjs7OztXQUlHO1FBQ0gsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGtDQUFnQyxTQUFXLENBQUM7YUFDNUQsR0FBRyxDQUFDLFVBQUMsUUFBa0IsSUFBTSxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFBLENBQUEsQ0FBQyxDQUFDLENBQUM7SUFFL0QsQ0FBQztJQUVELDhCQUFPLEdBQVAsVUFBUyxFQUFVO1FBQ2Y7Ozs7V0FJRztRQUNILE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsR0FBRyxFQUFFLEdBQUcsR0FBRyxDQUFDO2FBQy9DLEdBQUcsQ0FBQyxVQUFDLFFBQWtCLElBQU8sTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFBLENBQUMsQ0FBQyxDQUFDO0lBQ2pFLENBQUM7SUFFRCw2Q0FBc0IsR0FBdEIsVUFBd0IsRUFBVSxFQUFFLE1BQWU7UUFDL0M7Ozs7O1dBS0c7UUFDSCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsbUJBQW1CLEdBQUcsRUFBRSxHQUFHLEdBQUcsRUFDaEQsRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLENBQUM7YUFDeEIsR0FBRyxDQUFDLFVBQUMsUUFBa0IsSUFBTyxNQUFNLENBQUMs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IEFkbWluIHNlcnZpY2UgKi9cbmltcG9ydCB7IEluamVjdGFibGUgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmVzcG9uc2UgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgJ3J4anMvUngnO1xuXG5pbXBvcnQgeyBTZW5kRW1haWwgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tICcuLi9fbW9kZWxzL2luZGV4JztcbmltcG9ydCB7IEFwaVNlcnZpY2UgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gJy4vYXBpLnNlcnZpY2UnO1xuaW1wb3J0IHsgR2xvYmFsU3RvcmFnZVNlcnZpY2UgfSAgICAgICAgICAgICAgICAgICAgICAgZnJvbSAnLi9nbG9iYWwtc3RvcmFnZS5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEFkbWluU2VydmljZSB7XG5cbiAgICBjb25zdHJ1Y3RvciggcHJpdmF0ZSBnbG9iYWxTdG9yYWdlU2VydmljZTogR2xvYmFsU3RvcmFnZVNlcnZpY2UsXG4gICAgICAgICAgICAgICAgIHByaXZhdGUgaHR0cDogQXBpU2VydmljZSApIHsgfVxuXG4gICAgZ2V0VXNlcnMoIHN1YnN0cmluZzogc3RyaW5nICkge1xuICAgICAgICAvKlxuICAgICAgICBHZXQgbGlzdCBvZiB1c2Vyc1xuICAgICAgICA6cGFyYW0gc3Vic3RyaW5nOlxuICAgICAgICA6cmV0dXJuOiBsaXN0IG9mIHVzZXJzXG4gICAgICAgICAqL1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldChgL3VzZXIvYWRtaW4vdXNlcnMvP3N1YnN0cmluZz0ke3N1YnN0cmluZ31gKVxuICAgICAgICAgICAgLm1hcCgocmVzcG9uc2U6IFJlc3BvbnNlKSA9PiB7cmV0dXJuIHJlc3BvbnNlLmpzb24oKX0pO1xuXG4gICAgfVxuXG4gICAgZ2V0VXNlciggcGs6IG51bWJlciApIHtcbiAgICAgICAgLypcbiAgICAgICAgR2V0IHVzZXIgYnkgaWRcbiAgICAgICAgOnBhcmFtIHBrOiB1c2VycyBpZFxuICAgICAgICA6cmV0dXJuOiBpbmZvcm1hdGlvbiBhYm91dCB1c2VyXG4gICAgICAgICAqL1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCgnL3VzZXIvYWRtaW4vdXNlci8nICsgcGsgKyAnLycpXG4gICAgICAgICAgICAubWFwKChyZXNwb25zZTogUmVzcG9uc2UpID0+IHsgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTt9KTtcbiAgICB9XG5cbiAgICBhY3RpdmF0ZURlYWN0aXZhdGVVc2VyKCBwazogbnVtYmVyLCBzdGF0ZXM6IGJvb2xlYW4gKSB7XG4gICAgICAgIC8qXG4gICAgICAgIEFjdGl2YXRlIG9yIGRlYWN0aXZhdGUgdXNlclxuICAgICAgICA6cGFyYW0gcGs6IHVzZXJzIGlkXG4gICAgICAgIDpwYXJhbSBzdGF0ZXM6XG4gICAgICAgIDpyZXR1cm46XG4gICAgICAgICAqL1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBhdGNoKCcvdXNlci9hZG1pbi91c2VyLycgKyBwayArICcvJyxcbiAgICAgICAgICAgICB7IFwiaXNfYWN0aXZlXCI6IHN0YXRlcyB9KVxuICAgICAgICAgICAgLm1hcCgocmVzcG9uc2U6IFJlc3BvbnNlKSA9PiB7IHJldHVybiByZXNwb25zZS5qc29uKCk7fSk7XG4gICAgfVxuXG4gICAgZ2V0VXNlcldhbGxldHMoIHBrOiBudW1iZXIgKSB7XG4gICAgICAgIC8qXG4gICAgICAgIEdldCB1c2VycyB3YWxsZXRzIGJ5IHVzZXJzIGlkXG4gICAgICAgIDpwYXJhbSBwazogdXNlcnMgaWRcbiAgICAgICAgOnJldHVybjogbGlzdCBvZiB1c2VycyB3YWxsZXRzXG4gICAgICAgICAqL1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCgnL3dhbGxldC9hZG1pbi8nICsgcGsgKyAnLycpXG4gICAgICAgICAgICAubWFwKChyZXNwb25zZTogUmVzcG9uc2UpID0+IHtsZXQgcHJvY19yZXNwID0gcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgICAgICAgICBwcm9jX3Jlc3AubWFwKHdhbGxldCA9PiB7IHdhbGxldC5wcmVjaXNpb24gPSArdGhpcy5nbG9iYWxTdG9yYWdlU2VydmljZS5nZXRDdXJyZW5jeVByZWNpc2lvbih3YWxsZXQuY3VycmVuY3kpfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb2NfcmVzcDtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdldFVzZXJzVHJhbnNhY3Rpb25zKCkge1xuICAgICAgICAvKlxuICAgICAgICBHZXQgdXNlcnMnIHRyYW5zYWN0aW9uc1xuICAgICAgICA6cmV0dXJuOiBsaXN0IG9mIHVzZXJzJyB0cmFuc2FjdGlvbnNcbiAgICAgICAgICovXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KCcvd2FsbGV0L2FkbWluL3RvdGFsX3VzZXJfdHJhbnNhY3Rpb25zLycpXG4gICAgICAgICAgICAubWFwKChyZXNwb25zZTogUmVzcG9uc2UpID0+IHtyZXR1cm4gcmVzcG9uc2UuanNvbigpO30pO1xuICAgIH1cblxuICAgIGdldFVzZXJUcmFuc2FjdGlvbnMoIHBrOiBudW1iZXIgKSB7XG4gICAgICAgIC8qXG4gICAgICAgIEdldCB1c2VyIHRyYW5zYWN0aW9ucyBieSB1c2VyIGlkXG4gICAgICAgIDpwYXJhbSBwazogdXNlciBpZFxuICAgICAgICA6cmV0dXJuOiBsaXN0IG9mIHVzZXJzIHRyYW5zYWN0aW9uc1xuICAgICAgICAgKi9cbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoJy93YWxsZXQvYWRtaW4vdG90YWxfdXNlcl90cmFuc2FjdGlvbnMvJyArIHBrICsgJy8nKVxuICAgICAgICAgICAgLm1hcCgocmVzcG9uc2U6IFJlc3BvbnNlKSA9PiB7cmV0dXJuIHJlc3BvbnNlLmpzb24oKTt9KTtcbiAgICB9XG5cbiAgICBnZXRUb3RhbEFtb3VudCgpIHtcbiAgICAgICAgLypcbiAgICAgICAgR2V0IHRvdGFsIGFtb3VudCBhdCBzeXN0ZW1cbiAgICAgICAgOnJldHVybjogbGlzdCBvZiB0b3RhbCBhbW91bnRcbiAgICAgICAgICovXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KCcvd2FsbGV0L2FkbWluL3RvdGFsX2Ftb3VudC8nKVxuICAgICAgICAgICAgLm1hcCgocmVzcG9uc2U6IFJlc3BvbnNlKSA9PiB7IHJldHVybiByZXNwb25zZS5qc29uKCk7fSk7XG4gICAgfVxuXG4gICAgZ2V0V2FsbGV0cygpIHtcbiAgICAgICAgLypcbiAgICAgICAgR2V0IHRvdGFsIGFtb3VudCBhdCBzeXN0ZW1cbiAgICAgICAgOnJldHVybjogbGlzdCBvZiB0b3RhbCBhbW91bnRcbiAgICAgICAgICovXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KCcvd2FsbGV0LycpXG4gICAgICAgICAgICAubWFwKChyZXNwb25zZTogUmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSk7XG4gICAgfVxuXG4gICAgZ2V0VXNlckxvZ3MocGs6IG51bWJlcil7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KCcvdXNlci9hZG1pbi91c2VyLycgKyBwayArICcvbG9ncy8nKVxuICAgICAgICAgICAgLm1hcCgocmVzcG9uc2U6IFJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpO1xuXG4gICAgfVxuXG4gICAgc2VuZEVtYWlsKGVtYWlsOiBTZW5kRW1haWwpIHtcbiAgICAgICAgLypcbiAgICAgICAgU2VuZCBlbWFpbCBmb3IgdXNlclxuICAgICAgICA6cmV0dXJuOlxuICAgICAgICAqL1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoJy9kYXNoYm9hcmQvc2VuZG1haWwvJyxcbiAgICAgICAgICAgICAgICB7IFwibWVzc2FnZVwiOiBlbWFpbC5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgXCJzdWJqZWN0XCI6IGVtYWlsLnN1YmplY3QsXG4gICAgICAgICAgICAgICAgICBcInVzZXJcIjogZW1haWwudXNlciwgfSlcbiAgICAgICAgICAgIC5tYXAoKHJlc3BvbnNlOiBSZXNwb25zZSkgPT4geyB9KTtcbiAgICB9XG5cbn1cbiJdfQ==