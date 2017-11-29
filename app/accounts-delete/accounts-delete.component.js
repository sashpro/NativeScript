"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var router_2 = require("@angular/router");
var index_1 = require("./../_services/index");
var AccountsDeleteComponent = (function () {
    function AccountsDeleteComponent(route, router, walletService) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.walletService = walletService;
        this.routeSubscription = route.params.subscribe(function (params) { _this.walletID = params['id']; });
    }
    AccountsDeleteComponent.prototype.ngOnInit = function () { };
    AccountsDeleteComponent.prototype.delete = function () {
        var _this = this;
        this.walletService.delete(this.walletID)
            .subscribe(function (data) { _this.router.navigate(['/accounts']); }, function (error) { _this.errorMessage = error.detail; });
    };
    AccountsDeleteComponent.prototype.ngOnDestroy = function () {
        this.routeSubscription.unsubscribe();
    };
    AccountsDeleteComponent = __decorate([
        core_1.Component({
            selector: 'accounts-delete',
            templateUrl: './accounts-delete.component.html',
            styleUrls: ['./accounts-delete.component.css']
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            router_2.Router,
            index_1.WalletService])
    ], AccountsDeleteComponent);
    return AccountsDeleteComponent;
}());
exports.AccountsDeleteComponent = AccountsDeleteComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3VudHMtZGVsZXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFjY291bnRzLWRlbGV0ZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBbUU7QUFDbkUsMENBQXFFO0FBQ3JFLDBDQUFxRTtBQUdyRSw4Q0FBMEU7QUFPMUU7SUFNSSxpQ0FBcUIsS0FBcUIsRUFDckIsTUFBYyxFQUNkLGFBQTRCO1FBRmpELGlCQUtDO1FBTG9CLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM3QyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNLElBQU0sS0FBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQSxDQUFDLENBQzFDLENBQUM7SUFDckQsQ0FBQztJQUVELDBDQUFRLEdBQVIsY0FBYSxDQUFDO0lBRWQsd0NBQU0sR0FBTjtRQUFBLGlCQUlDO1FBSEcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQzthQUNyQixTQUFTLENBQUUsVUFBQSxJQUFJLElBQU0sS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUEsQ0FBQyxFQUMvQyxVQUFBLEtBQUssSUFBTSxLQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQSxDQUFDLENBQUMsQ0FBQztJQUNqRixDQUFDO0lBRUQsNkNBQVcsR0FBWDtRQUNJLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN6QyxDQUFDO0lBdkJRLHVCQUF1QjtRQUxuQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGlCQUFpQjtZQUMzQixXQUFXLEVBQUUsa0NBQWtDO1lBQy9DLFNBQVMsRUFBRSxDQUFDLGlDQUFpQyxDQUFDO1NBQ2pELENBQUM7eUNBTzhCLHVCQUFjO1lBQ2IsZUFBTTtZQUNDLHFCQUFhO09BUnhDLHVCQUF1QixDQXlCbkM7SUFBRCw4QkFBQztDQUFBLEFBekJELElBeUJDO0FBekJZLDBEQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3kgfSAgICAgICBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gICAgICAgICAgICAgICAgICAgICBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgUm91dGVyIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSAgICAgICAgICAgICAgICAgICAgICAgZnJvbSAncnhqcy9TdWJzY3JpcHRpb24nO1xuXG5pbXBvcnQgeyBXYWxsZXRTZXJ2aWNlIH0gICAgICAgICAgICAgICAgICAgICAgZnJvbSAnLi8uLi9fc2VydmljZXMvaW5kZXgnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2FjY291bnRzLWRlbGV0ZScsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2FjY291bnRzLWRlbGV0ZS5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vYWNjb3VudHMtZGVsZXRlLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBBY2NvdW50c0RlbGV0ZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBwcml2YXRlIHJvdXRlU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gICAgd2FsbGV0SUQ6IGFueTtcbiAgICBlcnJvck1lc3NhZ2U6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKCBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICAgICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICAgICAgICAgICAgICAgcHJpdmF0ZSB3YWxsZXRTZXJ2aWNlOiBXYWxsZXRTZXJ2aWNlICkge1xuICAgICAgICB0aGlzLnJvdXRlU3Vic2NyaXB0aW9uID0gcm91dGUucGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4geyB0aGlzLndhbGxldElEID0gcGFyYW1zWydpZCddO31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkgeyB9XG5cbiAgICBkZWxldGUoKSB7XG4gICAgICAgIHRoaXMud2FsbGV0U2VydmljZS5kZWxldGUodGhpcy53YWxsZXRJRClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLnN1YnNjcmliZSggZGF0YSA9PiB7IHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2FjY291bnRzJ10pO30sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yID0+IHsgdGhpcy5lcnJvck1lc3NhZ2UgPSBlcnJvci5kZXRhaWw7fSk7XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKXtcbiAgICAgICAgdGhpcy5yb3V0ZVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cblxufVxuXG4iXX0=