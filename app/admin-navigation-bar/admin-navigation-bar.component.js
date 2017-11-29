"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var index_1 = require("./../_services/index");
var AdminNavigationBarComponent = (function () {
    function AdminNavigationBarComponent(router, adminService) {
        this.router = router;
        this.adminService = adminService;
        this.wallets = {};
        this.totalAmount = {};
    }
    AdminNavigationBarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.adminService.getWallets()
            .subscribe(function (data) {
            for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                var wallet = data_1[_i];
                if (wallet.currency == 'USD') {
                    wallet.amount = Number(wallet.amount.toFixed(2));
                }
                _this.wallets[wallet.currency] = wallet.amount;
            }
        });
        this.adminService.getTotalAmount()
            .subscribe(function (data) { _this.totalAmount = data.total; });
    };
    AdminNavigationBarComponent.prototype.refresh = function () {
        window.location.reload();
    };
    AdminNavigationBarComponent = __decorate([
        core_1.Component({
            selector: 'admin-navigation-bar',
            templateUrl: './admin-navigation-bar.component.html',
            styleUrls: ['./admin-navigation-bar.component.css']
        }),
        __metadata("design:paramtypes", [router_1.Router,
            index_1.AdminService])
    ], AdminNavigationBarComponent);
    return AdminNavigationBarComponent;
}());
exports.AdminNavigationBarComponent = AdminNavigationBarComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRtaW4tbmF2aWdhdGlvbi1iYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWRtaW4tbmF2aWdhdGlvbi1iYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJFO0FBQzNFLDBDQUE2RTtBQUU3RSw4Q0FBa0Y7QUFRbEY7SUFLSSxxQ0FBcUIsTUFBYyxFQUNkLFlBQTBCO1FBRDFCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUovQyxZQUFPLEdBQVEsRUFBRSxDQUFDO1FBQ2xCLGdCQUFXLEdBQVEsRUFBRSxDQUFDO0lBRytCLENBQUM7SUFFdEQsOENBQVEsR0FBUjtRQUFBLGlCQVdDO1FBVkcsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLEVBQUU7YUFDekIsU0FBUyxDQUFFLFVBQUEsSUFBSTtZQUNaLEdBQUcsQ0FBQyxDQUFlLFVBQUksRUFBSixhQUFJLEVBQUosa0JBQUksRUFBSixJQUFJO2dCQUFsQixJQUFJLE1BQU0sYUFBQTtnQkFDWCxFQUFFLENBQUMsQ0FBRSxNQUFNLENBQUMsUUFBUSxJQUFJLEtBQU0sQ0FBQyxDQUFDLENBQUM7b0JBQzdCLE1BQU0sQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7Z0JBQ3BELENBQUM7Z0JBQ0QsS0FBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQzthQUNqRDtRQUFBLENBQUMsQ0FBQyxDQUFDO1FBQ1osSUFBSSxDQUFDLFlBQVksQ0FBQyxjQUFjLEVBQUU7YUFDN0IsU0FBUyxDQUFDLFVBQUEsSUFBSSxJQUFLLEtBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFBLENBQUMsQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFFRCw2Q0FBTyxHQUFQO1FBQ0ksTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBdkJRLDJCQUEyQjtRQUx2QyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLHNCQUFzQjtZQUNoQyxXQUFXLEVBQUUsdUNBQXVDO1lBQ3BELFNBQVMsRUFBRSxDQUFDLHNDQUFzQyxDQUFDO1NBQ3RELENBQUM7eUNBTStCLGVBQU07WUFDQSxvQkFBWTtPQU50QywyQkFBMkIsQ0F5QnZDO0lBQUQsa0NBQUM7Q0FBQSxBQXpCRCxJQXlCQztBQXpCWSxrRUFBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9ICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IEFkbWluU2VydmljZSB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gJy4vLi4vX3NlcnZpY2VzL2luZGV4JztcblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2FkbWluLW5hdmlnYXRpb24tYmFyJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vYWRtaW4tbmF2aWdhdGlvbi1iYXIuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL2FkbWluLW5hdmlnYXRpb24tYmFyLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBBZG1pbk5hdmlnYXRpb25CYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgd2FsbGV0czogYW55ID0ge307XG4gICAgdG90YWxBbW91bnQ6IGFueSA9IHt9O1xuXG4gICAgY29uc3RydWN0b3IoIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgICAgICAgICAgIHByaXZhdGUgYWRtaW5TZXJ2aWNlOiBBZG1pblNlcnZpY2UsICkgeyB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5hZG1pblNlcnZpY2UuZ2V0V2FsbGV0cygpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKCBkYXRhID0+IHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCB3YWxsZXQgb2YgZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIHdhbGxldC5jdXJyZW5jeSA9PSAnVVNEJyApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdhbGxldC5hbW91bnQgPSBOdW1iZXIod2FsbGV0LmFtb3VudC50b0ZpeGVkKDIpKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMud2FsbGV0c1t3YWxsZXQuY3VycmVuY3ldID0gd2FsbGV0LmFtb3VudDtcbiAgICAgICAgICAgICAgICB9fSk7XG4gICAgICAgIHRoaXMuYWRtaW5TZXJ2aWNlLmdldFRvdGFsQW1vdW50KClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoZGF0YSA9PiB7dGhpcy50b3RhbEFtb3VudCA9IGRhdGEudG90YWw7fSk7XG4gICAgfVxuXG4gICAgcmVmcmVzaCgpIHtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIH1cblxufVxuIl19