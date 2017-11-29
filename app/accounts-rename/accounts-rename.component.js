"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var index_1 = require("./../_models/index");
var index_2 = require("./../_services/index");
var AccountsRenameComponent = (function () {
    function AccountsRenameComponent(walletService, route) {
        var _this = this;
        this.walletService = walletService;
        this.route = route;
        this.accountRenameModel = new index_1.Rename;
        this.successMessage = false;
        this.routeSubscription = route.params.subscribe(function (params) {
            _this.accountRenameModel['walletID'] = params['id'];
        });
    }
    AccountsRenameComponent.prototype.ngOnInit = function () { };
    AccountsRenameComponent.prototype.renameWallet = function () {
        var _this = this;
        this.successMessage = false;
        this.errorMessage = '';
        this.walletService.renameWallet(this.accountRenameModel)
            .subscribe(function (data) { _this.successMessage = true; }, function (error) { _this.errorMessage = error.detail; });
    };
    AccountsRenameComponent.prototype.ngOnDestroy = function () {
        this.routeSubscription.unsubscribe();
    };
    AccountsRenameComponent = __decorate([
        core_1.Component({
            selector: 'accounts-rename',
            templateUrl: './accounts-rename.component.html',
            styleUrls: ['./accounts-rename.component.css']
        }),
        __metadata("design:paramtypes", [index_2.WalletService,
            router_1.ActivatedRoute])
    ], AccountsRenameComponent);
    return AccountsRenameComponent;
}());
exports.AccountsRenameComponent = AccountsRenameComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3VudHMtcmVuYW1lLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFjY291bnRzLXJlbmFtZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBbUU7QUFDbkUsMENBQXFFO0FBSXJFLDRDQUF3RTtBQUN4RSw4Q0FBMEU7QUFPMUU7SUFPSSxpQ0FBcUIsYUFBNEIsRUFDNUIsS0FBcUI7UUFEMUMsaUJBSUM7UUFKb0Isa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFMMUMsdUJBQWtCLEdBQUcsSUFBSSxjQUFNLENBQUM7UUFDaEMsbUJBQWMsR0FBRyxLQUFLLENBQUM7UUFLbkIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQUEsTUFBTTtZQUNsRCxLQUFJLENBQUMsa0JBQWtCLENBQUMsVUFBVSxDQUFDLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQUEsQ0FBQyxDQUFDLENBQUM7SUFDOUQsQ0FBQztJQUVELDBDQUFRLEdBQVIsY0FBYSxDQUFDO0lBRWQsOENBQVksR0FBWjtRQUFBLGlCQU1DO1FBTEcsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7UUFDNUIsSUFBSSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDO2FBQ3JDLFNBQVMsQ0FBRSxVQUFBLElBQUksSUFBTSxLQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxDQUFBLENBQUMsRUFDdEMsVUFBQSxLQUFLLElBQU0sS0FBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUEsQ0FBQyxDQUFDLENBQUM7SUFDakYsQ0FBQztJQUVELDZDQUFXLEdBQVg7UUFDSSxJQUFJLENBQUMsaUJBQWlCLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDekMsQ0FBQztJQXpCUSx1QkFBdUI7UUFMbkMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxpQkFBaUI7WUFDM0IsV0FBVyxFQUFFLGtDQUFrQztZQUMvQyxTQUFTLEVBQUUsQ0FBQyxpQ0FBaUMsQ0FBQztTQUNqRCxDQUFDO3lDQVFzQyxxQkFBYTtZQUNyQix1QkFBYztPQVJqQyx1QkFBdUIsQ0EyQm5DO0lBQUQsOEJBQUM7Q0FBQSxBQTNCRCxJQTJCQztBQTNCWSwwREFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95IH0gICAgICAgZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9ICAgICAgICAgICAgICAgICAgICAgZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9ICAgICAgICAgICAgICAgICAgICAgICBmcm9tICdyeGpzL1N1YnNjcmlwdGlvbic7XG5cblxuaW1wb3J0IHsgUmVuYW1lIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gJy4vLi4vX21vZGVscy9pbmRleCc7XG5pbXBvcnQgeyBXYWxsZXRTZXJ2aWNlIH0gICAgICAgICAgICAgICAgICAgICAgZnJvbSAnLi8uLi9fc2VydmljZXMvaW5kZXgnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2FjY291bnRzLXJlbmFtZScsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2FjY291bnRzLXJlbmFtZS5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vYWNjb3VudHMtcmVuYW1lLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBBY2NvdW50c1JlbmFtZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBwcml2YXRlIHJvdXRlU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gICAgYWNjb3VudFJlbmFtZU1vZGVsID0gbmV3IFJlbmFtZTtcbiAgICBzdWNjZXNzTWVzc2FnZSA9IGZhbHNlO1xuICAgIGVycm9yTWVzc2FnZTogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoIHByaXZhdGUgd2FsbGV0U2VydmljZTogV2FsbGV0U2VydmljZSxcbiAgICAgICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUgKSB7XG4gICAgICAgIHRoaXMucm91dGVTdWJzY3JpcHRpb24gPSByb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XG4gICAgICAgICAgICB0aGlzLmFjY291bnRSZW5hbWVNb2RlbFsnd2FsbGV0SUQnXSA9IHBhcmFtc1snaWQnXTt9KTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHsgfVxuXG4gICAgcmVuYW1lV2FsbGV0KCkge1xuICAgICAgICB0aGlzLnN1Y2Nlc3NNZXNzYWdlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gJyc7XG4gICAgICAgIHRoaXMud2FsbGV0U2VydmljZS5yZW5hbWVXYWxsZXQodGhpcy5hY2NvdW50UmVuYW1lTW9kZWwpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoIGRhdGEgPT4geyB0aGlzLnN1Y2Nlc3NNZXNzYWdlID0gdHJ1ZTt9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvciA9PiB7IHRoaXMuZXJyb3JNZXNzYWdlID0gZXJyb3IuZGV0YWlsO30pO1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCl7XG4gICAgICAgIHRoaXMucm91dGVTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG5cbn1cblxuIl19