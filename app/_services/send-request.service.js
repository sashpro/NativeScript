"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* Send Request Service */
var core_1 = require("@angular/core");
require("rxjs/Rx");
var wallet_service_1 = require("./wallet.service");
var api_service_1 = require("./api.service");
var SendRequestService = (function () {
    function SendRequestService(http, walletService) {
        this.http = http;
        this.walletService = walletService;
    }
    SendRequestService.prototype.sendMoney = function (send) {
        var _this = this;
        /*
        Send money.
        :param send:
         */
        return this.http.post('/wallet/send_money/', send)
            .map(function (response) { _this.walletService.refreshWallets(); });
    };
    SendRequestService.prototype.requestMoney = function (request) {
        /*
        Request money.
        :param request:
         */
        return this.http.post('/wallet/request_money/', request)
            .map(function (response) { });
    };
    SendRequestService.prototype.transaction = function (hash) {
        /*
        Get transaction by hash.
        :param hash:
         */
        return this.http.get('/wallet/transaction/' + hash + '/')
            .map(function (response) { return response.json(); });
    };
    SendRequestService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [api_service_1.ApiService,
            wallet_service_1.WalletService])
    ], SendRequestService);
    return SendRequestService;
}());
exports.SendRequestService = SendRequestService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VuZC1yZXF1ZXN0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzZW5kLXJlcXVlc3Quc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDBCQUEwQjtBQUMxQixzQ0FBMkU7QUFFM0UsbUJBQWlCO0FBR2pCLG1EQUE4RTtBQUM5RSw2Q0FBMkU7QUFHM0U7SUFFSSw0QkFBcUIsSUFBZ0IsRUFDaEIsYUFBNEI7UUFENUIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNoQixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtJQUFLLENBQUM7SUFFdkQsc0NBQVMsR0FBVCxVQUFVLElBQVU7UUFBcEIsaUJBT0M7UUFORzs7O1dBR0c7UUFDSCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMscUJBQXFCLEVBQUUsSUFBSSxDQUFDO2FBQzdDLEdBQUcsQ0FBQyxVQUFDLFFBQWtCLElBQU8sS0FBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFBLENBQUMsQ0FBQyxDQUFDO0lBQzlFLENBQUM7SUFFRCx5Q0FBWSxHQUFaLFVBQWEsT0FBZ0I7UUFDekI7OztXQUdHO1FBQ0gsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLHdCQUF3QixFQUFFLE9BQU8sQ0FBQzthQUNuRCxHQUFHLENBQUMsVUFBQyxRQUFrQixJQUFPLENBQUMsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFRCx3Q0FBVyxHQUFYLFVBQVksSUFBWTtRQUNwQjs7O1dBR0c7UUFDSCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsc0JBQXNCLEdBQUcsSUFBSSxHQUFFLEdBQUcsQ0FBQzthQUNuRCxHQUFHLENBQUMsVUFBQyxRQUFrQixJQUFPLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQSxDQUFDLENBQUMsQ0FBQztJQUNqRSxDQUFDO0lBOUJRLGtCQUFrQjtRQUQ5QixpQkFBVSxFQUFFO3lDQUdrQix3QkFBVTtZQUNELDhCQUFhO09BSHhDLGtCQUFrQixDQStCOUI7SUFBRCx5QkFBQztDQUFBLEFBL0JELElBK0JDO0FBL0JZLGdEQUFrQiIsInNvdXJjZXNDb250ZW50IjpbIi8qIFNlbmQgUmVxdWVzdCBTZXJ2aWNlICovXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJlc3BvbnNlIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0ICdyeGpzL1J4JztcblxuaW1wb3J0IHsgU2VuZCwgUmVxdWVzdCB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSAnLi4vX21vZGVscy9pbmRleCc7XG5pbXBvcnQgeyBXYWxsZXRTZXJ2aWNlIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tICcuL3dhbGxldC5zZXJ2aWNlJztcbmltcG9ydCB7IEFwaVNlcnZpY2UgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gJy4vYXBpLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2VuZFJlcXVlc3RTZXJ2aWNlIHtcblxuICAgIGNvbnN0cnVjdG9yKCBwcml2YXRlIGh0dHA6IEFwaVNlcnZpY2UsXG4gICAgICAgICAgICAgICAgIHByaXZhdGUgd2FsbGV0U2VydmljZTogV2FsbGV0U2VydmljZSApIHsgfVxuXG4gICAgc2VuZE1vbmV5KHNlbmQ6IFNlbmQpIHtcbiAgICAgICAgLypcbiAgICAgICAgU2VuZCBtb25leS5cbiAgICAgICAgOnBhcmFtIHNlbmQ6XG4gICAgICAgICAqL1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoJy93YWxsZXQvc2VuZF9tb25leS8nLCBzZW5kKVxuICAgICAgICAgICAgLm1hcCgocmVzcG9uc2U6IFJlc3BvbnNlKSA9PiB7IHRoaXMud2FsbGV0U2VydmljZS5yZWZyZXNoV2FsbGV0cygpO30pO1xuICAgIH1cblxuICAgIHJlcXVlc3RNb25leShyZXF1ZXN0OiBSZXF1ZXN0KSB7XG4gICAgICAgIC8qXG4gICAgICAgIFJlcXVlc3QgbW9uZXkuXG4gICAgICAgIDpwYXJhbSByZXF1ZXN0OlxuICAgICAgICAgKi9cbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KCcvd2FsbGV0L3JlcXVlc3RfbW9uZXkvJywgcmVxdWVzdClcbiAgICAgICAgICAgIC5tYXAoKHJlc3BvbnNlOiBSZXNwb25zZSkgPT4geyB9KTtcbiAgICB9XG5cbiAgICB0cmFuc2FjdGlvbihoYXNoOiBzdHJpbmcpIHtcbiAgICAgICAgLypcbiAgICAgICAgR2V0IHRyYW5zYWN0aW9uIGJ5IGhhc2guXG4gICAgICAgIDpwYXJhbSBoYXNoOlxuICAgICAgICAgKi9cbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoJy93YWxsZXQvdHJhbnNhY3Rpb24vJyArIGhhc2ggKycvJylcbiAgICAgICAgICAgIC5tYXAoKHJlc3BvbnNlOiBSZXNwb25zZSkgPT4geyByZXR1cm4gcmVzcG9uc2UuanNvbigpO30pO1xuICAgIH1cbn1cbiJdfQ==