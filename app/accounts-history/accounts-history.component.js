"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var index_1 = require("../_services/index");
var AccountsHistoryComponent = (function () {
    function AccountsHistoryComponent(walletService, route) {
        var _this = this;
        this.walletService = walletService;
        this.route = route;
        this.routeSubscription = route.params.subscribe(function (params) {
            _this.transaction(params['id']);
        });
    }
    AccountsHistoryComponent.prototype.ngOnInit = function () { };
    AccountsHistoryComponent.prototype.transaction = function (walletID) {
        var _this = this;
        this.walletService.transaction(walletID)
            .subscribe(function (data) { _this.transactions = data; });
    };
    AccountsHistoryComponent.prototype.ngOnDestroy = function () {
        this.routeSubscription.unsubscribe();
    };
    AccountsHistoryComponent = __decorate([
        core_1.Component({
            selector: 'accounts-history',
            templateUrl: './accounts-history.component.html',
            styleUrls: ['./accounts-history.component.css']
        }),
        __metadata("design:paramtypes", [index_1.WalletService,
            router_1.ActivatedRoute])
    ], AccountsHistoryComponent);
    return AccountsHistoryComponent;
}());
exports.AccountsHistoryComponent = AccountsHistoryComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3VudHMtaGlzdG9yeS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhY2NvdW50cy1oaXN0b3J5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyRTtBQUMzRSwwQ0FBNkU7QUFJN0UsNENBQWdGO0FBT2hGO0lBS0ksa0NBQXFCLGFBQTRCLEVBQzVCLEtBQXFCO1FBRDFDLGlCQUlDO1FBSm9CLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3RDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFBLE1BQU07WUFDbEQsS0FBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUFBLENBQUMsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFRCwyQ0FBUSxHQUFSLGNBQWEsQ0FBQztJQUVkLDhDQUFXLEdBQVgsVUFBWSxRQUFnQjtRQUE1QixpQkFHQztRQUZHLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQzthQUNuQyxTQUFTLENBQUUsVUFBQSxJQUFJLElBQU0sS0FBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsQ0FBQSxDQUFDLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBRUQsOENBQVcsR0FBWDtRQUNJLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN6QyxDQUFDO0lBcEJRLHdCQUF3QjtRQUxwQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGtCQUFrQjtZQUM1QixXQUFXLEVBQUUsbUNBQW1DO1lBQ2hELFNBQVMsRUFBRSxDQUFDLGtDQUFrQyxDQUFDO1NBQ2xELENBQUM7eUNBTXNDLHFCQUFhO1lBQ3JCLHVCQUFjO09BTmpDLHdCQUF3QixDQXNCcEM7SUFBRCwrQkFBQztDQUFBLEFBdEJELElBc0JDO0FBdEJZLDREQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gICAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gJ3J4anMvU3Vic2NyaXB0aW9uJztcblxuaW1wb3J0IHsgVHJhbnNhY3Rpb25IaXN0b3J5IH0gICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSAnLi4vX21vZGVscy9pbmRleCc7XG5pbXBvcnQgeyBXYWxsZXRTZXJ2aWNlIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tICcuLi9fc2VydmljZXMvaW5kZXgnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2FjY291bnRzLWhpc3RvcnknLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9hY2NvdW50cy1oaXN0b3J5LmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9hY2NvdW50cy1oaXN0b3J5LmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBBY2NvdW50c0hpc3RvcnlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgcHJpdmF0ZSByb3V0ZVN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICAgIHRyYW5zYWN0aW9uczogVHJhbnNhY3Rpb25IaXN0b3J5W107XG5cbiAgICBjb25zdHJ1Y3RvciggcHJpdmF0ZSB3YWxsZXRTZXJ2aWNlOiBXYWxsZXRTZXJ2aWNlLFxuICAgICAgICAgICAgICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSApIHtcbiAgICAgICAgdGhpcy5yb3V0ZVN1YnNjcmlwdGlvbiA9IHJvdXRlLnBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHtcbiAgICAgICAgICAgIHRoaXMudHJhbnNhY3Rpb24ocGFyYW1zWydpZCddKTt9KTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHsgfVxuXG4gICAgdHJhbnNhY3Rpb24od2FsbGV0SUQ6IG51bWJlcikge1xuICAgICAgICB0aGlzLndhbGxldFNlcnZpY2UudHJhbnNhY3Rpb24od2FsbGV0SUQpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKCBkYXRhID0+IHsgdGhpcy50cmFuc2FjdGlvbnMgPSBkYXRhO30pO1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCl7XG4gICAgICAgIHRoaXMucm91dGVTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG5cbn1cblxuIl19