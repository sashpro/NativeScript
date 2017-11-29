"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var index_1 = require("../_services/index");
var AdminUsersTransactionsComponent = (function () {
    function AdminUsersTransactionsComponent(adminService, route) {
        var _this = this;
        this.adminService = adminService;
        this.route = route;
        this.loggers = new Array();
        this.routeSubscription = route.params.subscribe(function (params) {
            _this.adminService.getUserLogs(params['id']).subscribe(function (data) {
                _this.loggers = data;
            });
        });
    }
    AdminUsersTransactionsComponent.prototype.ngOnInit = function () { };
    AdminUsersTransactionsComponent.prototype.ngOnDestroy = function () {
        this.routeSubscription.unsubscribe();
    };
    AdminUsersTransactionsComponent = __decorate([
        core_1.Component({
            selector: 'admin-users-transactions',
            templateUrl: './admin-users-transactions.component.html',
            styleUrls: ['./admin-users-transactions.component.css']
        }),
        __metadata("design:paramtypes", [index_1.AdminService,
            router_1.ActivatedRoute])
    ], AdminUsersTransactionsComponent);
    return AdminUsersTransactionsComponent;
}());
exports.AdminUsersTransactionsComponent = AdminUsersTransactionsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRtaW4tdXNlcnMtdHJhbnNhY3Rpb25zLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFkbWluLXVzZXJzLXRyYW5zYWN0aW9ucy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkU7QUFDM0UsMENBQTZFO0FBSTdFLDRDQUFnRjtBQU9oRjtJQUtJLHlDQUFxQixZQUEwQixFQUMxQixLQUFxQjtRQUQxQyxpQkFLQztRQUxvQixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUgxQyxZQUFPLEdBQUcsSUFBSSxLQUFLLEVBQWMsQ0FBQztRQUk5QixJQUFJLENBQUMsaUJBQWlCLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNO1lBQ2xELEtBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBRSxVQUFBLElBQUk7Z0JBQ3ZELEtBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1lBQUEsQ0FBQyxDQUFDLENBQUM7UUFBQSxDQUFDLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRUQsa0RBQVEsR0FBUixjQUFhLENBQUM7SUFFZCxxREFBVyxHQUFYO1FBQ0ksSUFBSSxDQUFDLGlCQUFpQixDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3pDLENBQUM7SUFoQlEsK0JBQStCO1FBTDNDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsMEJBQTBCO1lBQ3BDLFdBQVcsRUFBRSwyQ0FBMkM7WUFDeEQsU0FBUyxFQUFFLENBQUMsMENBQTBDLENBQUM7U0FDMUQsQ0FBQzt5Q0FNcUMsb0JBQVk7WUFDbkIsdUJBQWM7T0FOakMsK0JBQStCLENBa0IzQztJQUFELHNDQUFDO0NBQUEsQUFsQkQsSUFrQkM7QUFsQlksMEVBQStCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSAncnhqcy9TdWJzY3JpcHRpb24nO1xuXG5pbXBvcnQgeyBMb2dIaXN0b3J5IH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tICcuLi9fbW9kZWxzL2luZGV4JztcbmltcG9ydCB7IEFkbWluU2VydmljZSB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gJy4uL19zZXJ2aWNlcy9pbmRleCc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnYWRtaW4tdXNlcnMtdHJhbnNhY3Rpb25zJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vYWRtaW4tdXNlcnMtdHJhbnNhY3Rpb25zLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9hZG1pbi11c2Vycy10cmFuc2FjdGlvbnMuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEFkbWluVXNlcnNUcmFuc2FjdGlvbnNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgcHJpdmF0ZSByb3V0ZVN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICAgIGxvZ2dlcnMgPSBuZXcgQXJyYXk8TG9nSGlzdG9yeT4oKTtcblxuICAgIGNvbnN0cnVjdG9yKCBwcml2YXRlIGFkbWluU2VydmljZTogQWRtaW5TZXJ2aWNlLFxuICAgICAgICAgICAgICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSApIHtcbiAgICAgICAgdGhpcy5yb3V0ZVN1YnNjcmlwdGlvbiA9IHJvdXRlLnBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHtcbiAgICAgICAgICAgIHRoaXMuYWRtaW5TZXJ2aWNlLmdldFVzZXJMb2dzKHBhcmFtc1snaWQnXSkuc3Vic2NyaWJlKCBkYXRhID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlcnMgPSBkYXRhO30pO30pO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkgeyB9XG5cbiAgICBuZ09uRGVzdHJveSgpe1xuICAgICAgICB0aGlzLnJvdXRlU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuXG59XG5cbiJdfQ==