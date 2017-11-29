"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* Approve Service */
var core_1 = require("@angular/core");
var Observable_1 = require("rxjs/Observable");
var Subject_1 = require("rxjs/Subject");
require("rxjs/Rx");
var api_service_1 = require("./api.service");
var ApproveService = (function () {
    function ApproveService(http) {
        this.http = http;
        this.activeTransactions = new Subject_1.Subject;
    }
    ApproveService.prototype.getActiveTransactions = function () {
        var _this = this;
        /*
        Get active transactions.
        :return:
         */
        this.http.get('/wallet/transaction/active/list/')
            .map(function (response) { return response.json(); })
            .catch(function (error) { return Observable_1.Observable.throw(error); })
            .subscribe(function (data) { _this.setActiveTransactions(data); });
        return this.activeTransactions;
    };
    ApproveService.prototype.setActiveTransactions = function (data) {
        /*
        Set active transactions.
         */
        this.activeTransactions.next(data);
    };
    ApproveService.prototype.acceptTransaction = function (hash) {
        var _this = this;
        /*
        Accept transaction.
        :return:
         */
        return this.http.patch('/wallet/transaction/accept/' + hash + '/', null)
            .map(function (response) { _this.getActiveTransactions(); });
    };
    ApproveService.prototype.approveTransaction = function (hash) {
        var _this = this;
        /*
        Approve transaction.
        :return:
         */
        return this.http.patch('/wallet/transaction/approve/' + hash + '/', null)
            .map(function (response) { _this.getActiveTransactions(); });
    };
    ApproveService.prototype.declineTransaction = function (hash) {
        var _this = this;
        /*
        Decline transaction.
        :return:
         */
        return this.http.patch('/wallet/transaction/decline/' + hash + '/', null)
            .map(function (response) { _this.getActiveTransactions(); });
    };
    ApproveService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [api_service_1.ApiService])
    ], ApproveService);
    return ApproveService;
}());
exports.ApproveService = ApproveService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwcm92ZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwcm92ZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEscUJBQXFCO0FBQ3JCLHNDQUEwRTtBQUUxRSw4Q0FBNEU7QUFDNUUsd0NBQXlFO0FBQ3pFLG1CQUFpQjtBQUdqQiw2Q0FBMkU7QUFJM0U7SUFHSSx3QkFBcUIsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUY3Qix1QkFBa0IsR0FBRyxJQUFJLGlCQUFPLENBQUM7SUFFQyxDQUFDO0lBRTNDLDhDQUFxQixHQUFyQjtRQUFBLGlCQVVDO1FBVEc7OztXQUdHO1FBQ0gsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsa0NBQWtDLENBQUM7YUFDNUMsR0FBRyxDQUFDLFVBQUMsUUFBa0IsSUFBTyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUEsQ0FBQyxDQUFDO2FBQ3ZELEtBQUssQ0FBQyxVQUFDLEtBQVUsSUFBTyxNQUFNLENBQUMsdUJBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQSxDQUFDLENBQUM7YUFDekQsU0FBUyxDQUFDLFVBQUMsSUFBYyxJQUFPLEtBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFBLENBQUMsQ0FBQyxDQUFDO1FBQ3pFLE1BQU0sQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUM7SUFDbkMsQ0FBQztJQUVELDhDQUFxQixHQUFyQixVQUFzQixJQUFJO1FBQ3RCOztXQUVHO1FBQ0gsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRUQsMENBQWlCLEdBQWpCLFVBQWtCLElBQVk7UUFBOUIsaUJBT0M7UUFORzs7O1dBR0c7UUFDSCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsNkJBQTZCLEdBQUcsSUFBSSxHQUFHLEdBQUcsRUFBRSxJQUFJLENBQUM7YUFDbkUsR0FBRyxDQUFDLFVBQUMsUUFBa0IsSUFBTyxLQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxDQUFBLENBQUMsQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7SUFFRCwyQ0FBa0IsR0FBbEIsVUFBbUIsSUFBWTtRQUEvQixpQkFPQztRQU5HOzs7V0FHRztRQUNILE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyw4QkFBOEIsR0FBRyxJQUFJLEdBQUcsR0FBRyxFQUFFLElBQUksQ0FBQzthQUNwRSxHQUFHLENBQUMsVUFBQyxRQUFrQixJQUFPLEtBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLENBQUEsQ0FBQyxDQUFDLENBQUM7SUFDdkUsQ0FBQztJQUVELDJDQUFrQixHQUFsQixVQUFtQixJQUFZO1FBQS9CLGlCQU9DO1FBTkc7OztXQUdHO1FBQ0gsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLDhCQUE4QixHQUFHLElBQUksR0FBRyxHQUFHLEVBQUUsSUFBSSxDQUFDO2FBQ3BFLEdBQUcsQ0FBQyxVQUFDLFFBQWtCLElBQU8sS0FBSSxDQUFDLHFCQUFxQixFQUFFLENBQUMsQ0FBQSxDQUFDLENBQUMsQ0FBQztJQUN2RSxDQUFDO0lBakRRLGNBQWM7UUFEMUIsaUJBQVUsRUFBRTt5Q0FJa0Isd0JBQVU7T0FINUIsY0FBYyxDQWtEMUI7SUFBRCxxQkFBQztDQUFBLEFBbERELElBa0RDO0FBbERZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiLyogQXBwcm92ZSBTZXJ2aWNlICovXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmVzcG9uc2UgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcbmltcG9ydCB7IFN1YmplY3QgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSAncnhqcy9TdWJqZWN0JztcbmltcG9ydCAncnhqcy9SeCc7XG5cblxuaW1wb3J0IHsgQXBpU2VydmljZSB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSAnLi9hcGkuc2VydmljZSc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEFwcHJvdmVTZXJ2aWNlIHtcbiAgICBwcml2YXRlIGFjdGl2ZVRyYW5zYWN0aW9ucyA9IG5ldyBTdWJqZWN0O1xuXG4gICAgY29uc3RydWN0b3IoIHByaXZhdGUgaHR0cDogQXBpU2VydmljZSApIHsgfVxuXG4gICAgZ2V0QWN0aXZlVHJhbnNhY3Rpb25zKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgICAgIC8qXG4gICAgICAgIEdldCBhY3RpdmUgdHJhbnNhY3Rpb25zLlxuICAgICAgICA6cmV0dXJuOlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5odHRwLmdldCgnL3dhbGxldC90cmFuc2FjdGlvbi9hY3RpdmUvbGlzdC8nKVxuICAgICAgICAgICAgLm1hcCgocmVzcG9uc2U6IFJlc3BvbnNlKSA9PiB7IHJldHVybiByZXNwb25zZS5qc29uKCk7fSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4geyByZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvcik7fSlcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKGRhdGE6IFJlc3BvbnNlKSA9PiB7IHRoaXMuc2V0QWN0aXZlVHJhbnNhY3Rpb25zKGRhdGEpO30pO1xuICAgICAgICByZXR1cm4gdGhpcy5hY3RpdmVUcmFuc2FjdGlvbnM7XG4gICAgfVxuXG4gICAgc2V0QWN0aXZlVHJhbnNhY3Rpb25zKGRhdGEpIHtcbiAgICAgICAgLypcbiAgICAgICAgU2V0IGFjdGl2ZSB0cmFuc2FjdGlvbnMuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmFjdGl2ZVRyYW5zYWN0aW9ucy5uZXh0KGRhdGEpO1xuICAgIH1cblxuICAgIGFjY2VwdFRyYW5zYWN0aW9uKGhhc2g6IHN0cmluZykge1xuICAgICAgICAvKlxuICAgICAgICBBY2NlcHQgdHJhbnNhY3Rpb24uXG4gICAgICAgIDpyZXR1cm46XG4gICAgICAgICAqL1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBhdGNoKCcvd2FsbGV0L3RyYW5zYWN0aW9uL2FjY2VwdC8nICsgaGFzaCArICcvJywgbnVsbClcbiAgICAgICAgICAgIC5tYXAoKHJlc3BvbnNlOiBSZXNwb25zZSkgPT4geyB0aGlzLmdldEFjdGl2ZVRyYW5zYWN0aW9ucygpO30pO1xuICAgIH1cblxuICAgIGFwcHJvdmVUcmFuc2FjdGlvbihoYXNoOiBzdHJpbmcpIHtcbiAgICAgICAgLypcbiAgICAgICAgQXBwcm92ZSB0cmFuc2FjdGlvbi5cbiAgICAgICAgOnJldHVybjpcbiAgICAgICAgICovXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucGF0Y2goJy93YWxsZXQvdHJhbnNhY3Rpb24vYXBwcm92ZS8nICsgaGFzaCArICcvJywgbnVsbClcbiAgICAgICAgICAgIC5tYXAoKHJlc3BvbnNlOiBSZXNwb25zZSkgPT4geyB0aGlzLmdldEFjdGl2ZVRyYW5zYWN0aW9ucygpO30pO1xuICAgIH1cblxuICAgIGRlY2xpbmVUcmFuc2FjdGlvbihoYXNoOiBzdHJpbmcpIHtcbiAgICAgICAgLypcbiAgICAgICAgRGVjbGluZSB0cmFuc2FjdGlvbi5cbiAgICAgICAgOnJldHVybjpcbiAgICAgICAgICovXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucGF0Y2goJy93YWxsZXQvdHJhbnNhY3Rpb24vZGVjbGluZS8nICsgaGFzaCArICcvJywgbnVsbClcbiAgICAgICAgICAgIC5tYXAoKHJlc3BvbnNlOiBSZXNwb25zZSkgPT4geyB0aGlzLmdldEFjdGl2ZVRyYW5zYWN0aW9ucygpO30pO1xuICAgIH1cbn1cbiJdfQ==