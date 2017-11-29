"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var index_1 = require("./../_services/index");
var AccountsTransferComponent = (function () {
    function AccountsTransferComponent(walletService, route) {
        var _this = this;
        this.walletService = walletService;
        this.route = route;
        this.successMessage = false;
        this.transferModel = {};
        this.routeSubscription = route.params
            .subscribe(function (params) {
            _this.walletID = params['id'];
            _this.getWalletCurrency();
        });
    }
    AccountsTransferComponent.prototype.ngOnInit = function () { };
    AccountsTransferComponent.prototype.getWalletCurrency = function () {
        var _this = this;
        this.walletService.getWallet(this.walletID)
            .subscribe(function (data) {
            _this.walletCurrency = data.currency;
            _this.getWallets();
        });
    };
    AccountsTransferComponent.prototype.getWallets = function () {
        var _this = this;
        this.walletService.getWallets()
            .subscribe(function (wallets) {
            _this.wallets = wallets.filter(function (wallet) { return wallet.currency === _this.walletCurrency && wallet.pk != _this.walletID; });
        });
    };
    AccountsTransferComponent.prototype.transfer = function () {
        var _this = this;
        this.transferModel["wallet_from"] = this.walletID;
        this.successMessage = false;
        this.walletService.transfer(this.transferModel)
            .subscribe(function (data) {
            _this.successMessage = true;
            _this.errorMessage = '';
        }, function (error) { _this.errorMessage = error.detail; });
    };
    AccountsTransferComponent.prototype.ngOnDestroy = function () {
        this.routeSubscription.unsubscribe();
    };
    AccountsTransferComponent = __decorate([
        core_1.Component({
            selector: 'accounts-transfer',
            templateUrl: './accounts-transfer.component.html',
            styleUrls: ['./accounts-transfer.component.css']
        }),
        __metadata("design:paramtypes", [index_1.WalletService,
            router_1.ActivatedRoute])
    ], AccountsTransferComponent);
    return AccountsTransferComponent;
}());
exports.AccountsTransferComponent = AccountsTransferComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3VudHMtdHJhbnNmZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWNjb3VudHMtdHJhbnNmZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQW1FO0FBQ25FLDBDQUFxRTtBQUdyRSw4Q0FBMEU7QUFPMUU7SUFXSSxtQ0FBcUIsYUFBNEIsRUFDNUIsS0FBcUI7UUFEMUMsaUJBTUM7UUFOb0Isa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFMMUMsbUJBQWMsR0FBRyxLQUFLLENBQUM7UUFFdkIsa0JBQWEsR0FBUSxFQUFFLENBQUM7UUFJcEIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLEtBQUssQ0FBQyxNQUFNO2FBQ2hDLFNBQVMsQ0FBQyxVQUFBLE1BQU07WUFBTSxLQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNoRCxLQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUFBLENBQUMsQ0FBQyxDQUFDO0lBRXhDLENBQUM7SUFFRCw0Q0FBUSxHQUFSLGNBQWEsQ0FBQztJQUVkLHFEQUFpQixHQUFqQjtRQUFBLGlCQUlDO1FBSEcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQzthQUN0QyxTQUFTLENBQUUsVUFBQSxJQUFJO1lBQU0sS0FBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQ3RELEtBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUFBLENBQUMsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFRCw4Q0FBVSxHQUFWO1FBQUEsaUJBS0M7UUFKRyxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsRUFBRTthQUMxQixTQUFTLENBQUMsVUFBQSxPQUFPO1lBQ2QsS0FBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsTUFBTSxDQUFDLFFBQVEsS0FBSyxLQUFJLENBQUMsY0FBYyxJQUFJLE1BQU0sQ0FBQyxFQUFFLElBQUksS0FBSSxDQUFDLFFBQVEsRUFBckUsQ0FBcUUsQ0FBQyxDQUFDO1FBQ25ILENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVELDRDQUFRLEdBQVI7UUFBQSxpQkFPQztRQU5HLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUNsRCxJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztRQUM1QixJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO2FBQzFDLFNBQVMsQ0FBRSxVQUFBLElBQUk7WUFBTSxLQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztZQUN6QyxLQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQztRQUFBLENBQUMsRUFDNUIsVUFBQSxLQUFLLElBQU0sS0FBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUEsQ0FBQyxDQUFDLENBQUM7SUFDM0QsQ0FBQztJQUVELCtDQUFXLEdBQVg7UUFDSSxJQUFJLENBQUMsaUJBQWlCLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDekMsQ0FBQztJQTdDUSx5QkFBeUI7UUFMckMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxtQkFBbUI7WUFDN0IsV0FBVyxFQUFFLG9DQUFvQztZQUNqRCxTQUFTLEVBQUUsQ0FBQyxtQ0FBbUMsQ0FBQztTQUNuRCxDQUFDO3lDQVlzQyxxQkFBYTtZQUNyQix1QkFBYztPQVpqQyx5QkFBeUIsQ0ErQ3JDO0lBQUQsZ0NBQUM7Q0FBQSxBQS9DRCxJQStDQztBQS9DWSw4REFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95IH0gICAgICAgZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9ICAgICAgICAgICAgICAgICAgICAgZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9ICAgICAgICAgICAgICAgICAgICAgICBmcm9tICdyeGpzL1N1YnNjcmlwdGlvbic7XG5cbmltcG9ydCB7IFdhbGxldFNlcnZpY2UgfSAgICAgICAgICAgICAgICAgICAgICBmcm9tICcuLy4uL19zZXJ2aWNlcy9pbmRleCc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnYWNjb3VudHMtdHJhbnNmZXInLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9hY2NvdW50cy10cmFuc2Zlci5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vYWNjb3VudHMtdHJhbnNmZXIuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEFjY291bnRzVHJhbnNmZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgcHJpdmF0ZSByb3V0ZVN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICAgIHdhbGxldHM6IGFueTtcbiAgICB3YWxsZXRJRDogbnVtYmVyO1xuICAgIHdhbGxldEN1cnJlbmN5OiBzdHJpbmc7XG4gICAgYWNjb3VudFJlbmFtZU1vZGVsOiBhbnk7XG4gICAgc3VjY2Vzc01lc3NhZ2UgPSBmYWxzZTtcbiAgICBlcnJvck1lc3NhZ2U6IHN0cmluZztcbiAgICB0cmFuc2Zlck1vZGVsOiBhbnkgPSB7fTtcblxuICAgIGNvbnN0cnVjdG9yKCBwcml2YXRlIHdhbGxldFNlcnZpY2U6IFdhbGxldFNlcnZpY2UsXG4gICAgICAgICAgICAgICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlICkge1xuICAgICAgICB0aGlzLnJvdXRlU3Vic2NyaXB0aW9uID0gcm91dGUucGFyYW1zXG4gICAgICAgICAgICAuc3Vic2NyaWJlKHBhcmFtcyA9PiB7IHRoaXMud2FsbGV0SUQgPSBwYXJhbXNbJ2lkJ107XG4gICAgICAgICAgICAgICAgdGhpcy5nZXRXYWxsZXRDdXJyZW5jeSgpO30pO1xuXG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7IH1cblxuICAgIGdldFdhbGxldEN1cnJlbmN5KCkge1xuICAgICAgICB0aGlzLndhbGxldFNlcnZpY2UuZ2V0V2FsbGV0KHRoaXMud2FsbGV0SUQpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKCBkYXRhID0+IHsgdGhpcy53YWxsZXRDdXJyZW5jeSA9IGRhdGEuY3VycmVuY3k7XG4gICAgICAgICAgICAgICAgdGhpcy5nZXRXYWxsZXRzKCk7fSk7XG4gICAgfVxuXG4gICAgZ2V0V2FsbGV0cygpIHtcbiAgICAgICAgdGhpcy53YWxsZXRTZXJ2aWNlLmdldFdhbGxldHMoKVxuICAgICAgICAgICAgLnN1YnNjcmliZSh3YWxsZXRzID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLndhbGxldHMgPSB3YWxsZXRzLmZpbHRlcih3YWxsZXQgPT4gd2FsbGV0LmN1cnJlbmN5ID09PSB0aGlzLndhbGxldEN1cnJlbmN5ICYmIHdhbGxldC5wayAhPSB0aGlzLndhbGxldElEKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIHRyYW5zZmVyKCkge1xuICAgICAgICB0aGlzLnRyYW5zZmVyTW9kZWxbXCJ3YWxsZXRfZnJvbVwiXSA9IHRoaXMud2FsbGV0SUQ7XG4gICAgICAgIHRoaXMuc3VjY2Vzc01lc3NhZ2UgPSBmYWxzZTtcbiAgICAgICAgdGhpcy53YWxsZXRTZXJ2aWNlLnRyYW5zZmVyKHRoaXMudHJhbnNmZXJNb2RlbClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoIGRhdGEgPT4geyB0aGlzLnN1Y2Nlc3NNZXNzYWdlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSAnJzt9LFxuICAgICAgICAgICAgICAgIGVycm9yID0+IHsgdGhpcy5lcnJvck1lc3NhZ2UgPSBlcnJvci5kZXRhaWw7fSk7XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKXtcbiAgICAgICAgdGhpcy5yb3V0ZVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cblxufVxuXG4iXX0=