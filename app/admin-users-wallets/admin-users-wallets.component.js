"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var index_1 = require("./../_services/index");
var AdminUsersWalletsComponent = (function () {
    function AdminUsersWalletsComponent(adminService, route) {
        var _this = this;
        this.adminService = adminService;
        this.route = route;
        this.wallets = new Array();
        this.routeSubscription = route.params.subscribe(function (params) {
            _this.adminService.getUserWallets(params['id']).subscribe(function (data) { return _this.wallets = data; });
        });
    }
    AdminUsersWalletsComponent.prototype.ngOnInit = function () { };
    AdminUsersWalletsComponent.prototype.ngOnDestroy = function () {
        this.routeSubscription.unsubscribe();
    };
    AdminUsersWalletsComponent = __decorate([
        core_1.Component({
            selector: 'admin-users-wallets',
            templateUrl: './admin-users-wallets.component.html',
            styleUrls: ['./admin-users-wallets.component.css']
        }),
        __metadata("design:paramtypes", [index_1.AdminService,
            router_1.ActivatedRoute])
    ], AdminUsersWalletsComponent);
    return AdminUsersWalletsComponent;
}());
exports.AdminUsersWalletsComponent = AdminUsersWalletsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRtaW4tdXNlcnMtd2FsbGV0cy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhZG1pbi11c2Vycy13YWxsZXRzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyRTtBQUMzRSwwQ0FBNkU7QUFJN0UsOENBQWlGO0FBT2pGO0lBS0ksb0NBQXFCLFlBQTBCLEVBQzFCLEtBQXFCO1FBRDFDLGlCQUlDO1FBSm9CLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBSDFDLFlBQU8sR0FBRyxJQUFJLEtBQUssRUFBVSxDQUFDO1FBSTFCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFBLE1BQU07WUFDbEQsS0FBSSxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFFLFVBQUEsSUFBSSxJQUFJLE9BQUEsS0FBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLEVBQW5CLENBQW1CLENBQUMsQ0FBQztRQUFBLENBQUMsQ0FBQyxDQUFDO0lBQ2xHLENBQUM7SUFFRCw2Q0FBUSxHQUFSLGNBQWEsQ0FBQztJQUVkLGdEQUFXLEdBQVg7UUFDSSxJQUFJLENBQUMsaUJBQWlCLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDekMsQ0FBQztJQWZRLDBCQUEwQjtRQUx0QyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLHFCQUFxQjtZQUMvQixXQUFXLEVBQUUsc0NBQXNDO1lBQ25ELFNBQVMsRUFBRSxDQUFDLHFDQUFxQyxDQUFDO1NBQ3JELENBQUM7eUNBTXFDLG9CQUFZO1lBQ25CLHVCQUFjO09BTmpDLDBCQUEwQixDQWlCdEM7SUFBRCxpQ0FBQztDQUFBLEFBakJELElBaUJDO0FBakJZLGdFQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3kgfSAgICAgICAgICAgICAgIGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gJ3J4anMvU3Vic2NyaXB0aW9uJztcblxuaW1wb3J0IHsgV2FsbGV0IH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSAnLi8uLi9fbW9kZWxzL2luZGV4JztcbmltcG9ydCB7IEFkbWluU2VydmljZSB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSAnLi8uLi9fc2VydmljZXMvaW5kZXgnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2FkbWluLXVzZXJzLXdhbGxldHMnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9hZG1pbi11c2Vycy13YWxsZXRzLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9hZG1pbi11c2Vycy13YWxsZXRzLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBBZG1pblVzZXJzV2FsbGV0c0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBwcml2YXRlIHJvdXRlU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gICAgd2FsbGV0cyA9IG5ldyBBcnJheTxXYWxsZXQ+KCk7XG5cbiAgICBjb25zdHJ1Y3RvciggcHJpdmF0ZSBhZG1pblNlcnZpY2U6IEFkbWluU2VydmljZSxcbiAgICAgICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUgKSB7XG4gICAgICAgIHRoaXMucm91dGVTdWJzY3JpcHRpb24gPSByb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XG4gICAgICAgICAgICB0aGlzLmFkbWluU2VydmljZS5nZXRVc2VyV2FsbGV0cyhwYXJhbXNbJ2lkJ10pLnN1YnNjcmliZSggZGF0YSA9PiB0aGlzLndhbGxldHMgPSBkYXRhKTt9KTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHsgfVxuXG4gICAgbmdPbkRlc3Ryb3koKXtcbiAgICAgICAgdGhpcy5yb3V0ZVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cblxufVxuXG4iXX0=