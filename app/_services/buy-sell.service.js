"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* Buy - Sell service */
var core_1 = require("@angular/core");
require("rxjs/Rx");
var index_1 = require("../_models/index");
var wallet_service_1 = require("./wallet.service");
var api_service_1 = require("./api.service");
var BuySellService = (function () {
    function BuySellService(http, walletService) {
        this.http = http;
        this.walletService = walletService;
        this.buyExchangeModel = new index_1.Exchange;
        this.sellExchangeModel = new index_1.Exchange;
    }
    BuySellService.prototype.newBuyExchangeModel = function () {
        /*
        Get new buy exchange model
        :return: buy model
         */
        this.buyExchangeModel = new index_1.Exchange;
        this.buyExchangeModel["operation"] = "BUY";
        this.buyExchangeModel["amount"] = 0;
        this.buyExchangeModel["other_amount"] = 0;
        return this.buyExchangeModel;
    };
    BuySellService.prototype.getBuyExchangeModel = function () {
        /*
        Get buy exchange model
        :return: buy model
         */
        return this.buyExchangeModel;
    };
    BuySellService.prototype.newSellExchangeModel = function () {
        /*
        Get new sell exchange model
        :return: sell model
         */
        this.sellExchangeModel = new index_1.Exchange;
        this.sellExchangeModel["operation"] = "SELL";
        this.sellExchangeModel["amount"] = 0;
        this.sellExchangeModel["other_amount"] = 0;
        return this.sellExchangeModel;
    };
    BuySellService.prototype.getSellExchangeModel = function () {
        /*
        Get sell exchange model
        :return: sell model
         */
        return this.sellExchangeModel;
    };
    BuySellService.prototype.exchangeRate = function (exchangeRate) {
        /*
        Get exchange rate
        :return: rate
         */
        return this.http.get('/rates_fee/exchange_rate/?operation=' + exchangeRate.operation + '&wallet_from_currency=' + exchangeRate.wallet_from_currency + '&wallet_to_currency=' + exchangeRate.wallet_to_currency)
            .map(function (response) { return response.json(); });
    };
    BuySellService.prototype.exchange = function (exchange) {
        var _this = this;
        /*
        Buy or sell some currency
        :return:
         */
        return this.http.post('/wallet/exchange/', {
            "operation": exchange.operation,
            "amount": exchange.amount,
            "message": exchange.message,
            "wallet_to": exchange.wallet_to.pk,
            "wallet_from": exchange.wallet_from.pk,
        })
            .map(function (response) { _this.walletService.refreshWallets(); });
    };
    BuySellService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [api_service_1.ApiService,
            wallet_service_1.WalletService])
    ], BuySellService);
    return BuySellService;
}());
exports.BuySellService = BuySellService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV5LXNlbGwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImJ1eS1zZWxsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx3QkFBd0I7QUFDeEIsc0NBQTJFO0FBRzNFLG1CQUFpQjtBQUVqQiwwQ0FBOEU7QUFDOUUsbURBQThFO0FBQzlFLDZDQUEyRTtBQUkzRTtJQUlJLHdCQUFxQixJQUFnQixFQUNoQixhQUE0QjtRQUQ1QixTQUFJLEdBQUosSUFBSSxDQUFZO1FBQ2hCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBSmpELHFCQUFnQixHQUFHLElBQUksZ0JBQVEsQ0FBQztRQUNoQyxzQkFBaUIsR0FBRyxJQUFJLGdCQUFRLENBQUM7SUFHcUIsQ0FBQztJQUV2RCw0Q0FBbUIsR0FBbkI7UUFDSTs7O1dBR0c7UUFDSCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxnQkFBUSxDQUFDO1FBQ3JDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsR0FBRyxLQUFLLENBQUM7UUFDM0MsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNwQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7SUFDakMsQ0FBQztJQUVELDRDQUFtQixHQUFuQjtRQUNJOzs7V0FHRztRQUNILE1BQU0sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7SUFDakMsQ0FBQztJQUVELDZDQUFvQixHQUFwQjtRQUNJOzs7V0FHRztRQUNILElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLGdCQUFRLENBQUM7UUFDdEMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFdBQVcsQ0FBQyxHQUFHLE1BQU0sQ0FBQztRQUM3QyxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDM0MsTUFBTSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztJQUNsQyxDQUFDO0lBRUQsNkNBQW9CLEdBQXBCO1FBQ0k7OztXQUdHO1FBQ0gsTUFBTSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztJQUNsQyxDQUFDO0lBRUQscUNBQVksR0FBWixVQUFhLFlBQTBCO1FBQ25DOzs7V0FHRztRQUNILE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxzQ0FBc0MsR0FBRyxZQUFZLENBQUMsU0FBUyxHQUFHLHdCQUF3QixHQUFHLFlBQVksQ0FBQyxvQkFBb0IsR0FBRyxzQkFBc0IsR0FBRyxZQUFZLENBQUMsa0JBQWtCLENBQUM7YUFDMU0sR0FBRyxDQUFDLFVBQUMsUUFBa0IsSUFBTyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUEsQ0FBQyxDQUFDLENBQUM7SUFDakUsQ0FBQztJQUVELGlDQUFRLEdBQVIsVUFBUyxRQUFrQjtRQUEzQixpQkFjQztRQWJHOzs7V0FHRztRQUNILE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsRUFDL0I7WUFDQyxXQUFXLEVBQUUsUUFBUSxDQUFDLFNBQVM7WUFDL0IsUUFBUSxFQUFFLFFBQVEsQ0FBQyxNQUFNO1lBQ3pCLFNBQVMsRUFBRSxRQUFRLENBQUMsT0FBTztZQUMzQixXQUFXLEVBQUUsUUFBUSxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQ2xDLGFBQWEsRUFBRSxRQUFRLENBQUMsV0FBVyxDQUFDLEVBQUU7U0FDdEMsQ0FBRTthQUNSLEdBQUcsQ0FBQyxVQUFDLFFBQWtCLElBQU8sS0FBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFBLENBQUMsQ0FBQyxDQUFDO0lBQzlFLENBQUM7SUF0RVEsY0FBYztRQUQxQixpQkFBVSxFQUFFO3lDQUtrQix3QkFBVTtZQUNELDhCQUFhO09BTHhDLGNBQWMsQ0F1RTFCO0lBQUQscUJBQUM7Q0FBQSxBQXZFRCxJQXVFQztBQXZFWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEJ1eSAtIFNlbGwgc2VydmljZSAqL1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZXNwb25zZSB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5pbXBvcnQgJ3J4anMvUngnO1xuXG5pbXBvcnQgeyBFeGNoYW5nZSwgRXhjaGFuZ2VSYXRlIH0gICAgICAgICAgICAgICAgICAgICBmcm9tICcuLi9fbW9kZWxzL2luZGV4JztcbmltcG9ydCB7IFdhbGxldFNlcnZpY2UgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gJy4vd2FsbGV0LnNlcnZpY2UnO1xuaW1wb3J0IHsgQXBpU2VydmljZSB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSAnLi9hcGkuc2VydmljZSc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEJ1eVNlbGxTZXJ2aWNlIHtcbiAgICBidXlFeGNoYW5nZU1vZGVsID0gbmV3IEV4Y2hhbmdlO1xuICAgIHNlbGxFeGNoYW5nZU1vZGVsID0gbmV3IEV4Y2hhbmdlO1xuXG4gICAgY29uc3RydWN0b3IoIHByaXZhdGUgaHR0cDogQXBpU2VydmljZSxcbiAgICAgICAgICAgICAgICAgcHJpdmF0ZSB3YWxsZXRTZXJ2aWNlOiBXYWxsZXRTZXJ2aWNlICkgeyB9XG5cbiAgICBuZXdCdXlFeGNoYW5nZU1vZGVsKCkge1xuICAgICAgICAvKlxuICAgICAgICBHZXQgbmV3IGJ1eSBleGNoYW5nZSBtb2RlbFxuICAgICAgICA6cmV0dXJuOiBidXkgbW9kZWxcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuYnV5RXhjaGFuZ2VNb2RlbCA9IG5ldyBFeGNoYW5nZTtcbiAgICAgICAgdGhpcy5idXlFeGNoYW5nZU1vZGVsW1wib3BlcmF0aW9uXCJdID0gXCJCVVlcIjtcbiAgICAgICAgdGhpcy5idXlFeGNoYW5nZU1vZGVsW1wiYW1vdW50XCJdID0gMDtcbiAgICAgICAgdGhpcy5idXlFeGNoYW5nZU1vZGVsW1wib3RoZXJfYW1vdW50XCJdID0gMDtcbiAgICAgICAgcmV0dXJuIHRoaXMuYnV5RXhjaGFuZ2VNb2RlbDtcbiAgICB9XG5cbiAgICBnZXRCdXlFeGNoYW5nZU1vZGVsKCkge1xuICAgICAgICAvKlxuICAgICAgICBHZXQgYnV5IGV4Y2hhbmdlIG1vZGVsXG4gICAgICAgIDpyZXR1cm46IGJ1eSBtb2RlbFxuICAgICAgICAgKi9cbiAgICAgICAgcmV0dXJuIHRoaXMuYnV5RXhjaGFuZ2VNb2RlbDtcbiAgICB9XG5cbiAgICBuZXdTZWxsRXhjaGFuZ2VNb2RlbCgpIHtcbiAgICAgICAgLypcbiAgICAgICAgR2V0IG5ldyBzZWxsIGV4Y2hhbmdlIG1vZGVsXG4gICAgICAgIDpyZXR1cm46IHNlbGwgbW9kZWxcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuc2VsbEV4Y2hhbmdlTW9kZWwgPSBuZXcgRXhjaGFuZ2U7XG4gICAgICAgIHRoaXMuc2VsbEV4Y2hhbmdlTW9kZWxbXCJvcGVyYXRpb25cIl0gPSBcIlNFTExcIjtcbiAgICAgICAgdGhpcy5zZWxsRXhjaGFuZ2VNb2RlbFtcImFtb3VudFwiXSA9IDA7XG4gICAgICAgIHRoaXMuc2VsbEV4Y2hhbmdlTW9kZWxbXCJvdGhlcl9hbW91bnRcIl0gPSAwO1xuICAgICAgICByZXR1cm4gdGhpcy5zZWxsRXhjaGFuZ2VNb2RlbDtcbiAgICB9XG5cbiAgICBnZXRTZWxsRXhjaGFuZ2VNb2RlbCgpIHtcbiAgICAgICAgLypcbiAgICAgICAgR2V0IHNlbGwgZXhjaGFuZ2UgbW9kZWxcbiAgICAgICAgOnJldHVybjogc2VsbCBtb2RlbFxuICAgICAgICAgKi9cbiAgICAgICAgcmV0dXJuIHRoaXMuc2VsbEV4Y2hhbmdlTW9kZWw7XG4gICAgfVxuXG4gICAgZXhjaGFuZ2VSYXRlKGV4Y2hhbmdlUmF0ZTogRXhjaGFuZ2VSYXRlKSB7XG4gICAgICAgIC8qXG4gICAgICAgIEdldCBleGNoYW5nZSByYXRlXG4gICAgICAgIDpyZXR1cm46IHJhdGVcbiAgICAgICAgICovXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KCcvcmF0ZXNfZmVlL2V4Y2hhbmdlX3JhdGUvP29wZXJhdGlvbj0nICsgZXhjaGFuZ2VSYXRlLm9wZXJhdGlvbiArICcmd2FsbGV0X2Zyb21fY3VycmVuY3k9JyArIGV4Y2hhbmdlUmF0ZS53YWxsZXRfZnJvbV9jdXJyZW5jeSArICcmd2FsbGV0X3RvX2N1cnJlbmN5PScgKyBleGNoYW5nZVJhdGUud2FsbGV0X3RvX2N1cnJlbmN5KVxuICAgICAgICAgICAgLm1hcCgocmVzcG9uc2U6IFJlc3BvbnNlKSA9PiB7IHJldHVybiByZXNwb25zZS5qc29uKCk7fSk7XG4gICAgfVxuXG4gICAgZXhjaGFuZ2UoZXhjaGFuZ2U6IEV4Y2hhbmdlKSB7XG4gICAgICAgIC8qXG4gICAgICAgIEJ1eSBvciBzZWxsIHNvbWUgY3VycmVuY3lcbiAgICAgICAgOnJldHVybjpcbiAgICAgICAgICovXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCgnL3dhbGxldC9leGNoYW5nZS8nLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgIFwib3BlcmF0aW9uXCI6IGV4Y2hhbmdlLm9wZXJhdGlvbixcbiAgICAgICAgICAgICAgICAgICBcImFtb3VudFwiOiBleGNoYW5nZS5hbW91bnQsXG4gICAgICAgICAgICAgICAgICAgXCJtZXNzYWdlXCI6IGV4Y2hhbmdlLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgXCJ3YWxsZXRfdG9cIjogZXhjaGFuZ2Uud2FsbGV0X3RvLnBrLFxuICAgICAgICAgICAgICAgICAgIFwid2FsbGV0X2Zyb21cIjogZXhjaGFuZ2Uud2FsbGV0X2Zyb20ucGssXG4gICAgICAgICAgICAgICAgICB9LClcbiAgICAgICAgICAgIC5tYXAoKHJlc3BvbnNlOiBSZXNwb25zZSkgPT4geyB0aGlzLndhbGxldFNlcnZpY2UucmVmcmVzaFdhbGxldHMoKTt9KTtcbiAgICB9XG59XG4iXX0=