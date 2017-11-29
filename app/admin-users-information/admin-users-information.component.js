"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var index_1 = require("./../_models/index");
var index_2 = require("./../_services/index");
var AdminUsersInformationComponent = (function () {
    function AdminUsersInformationComponent(adminService, route) {
        var _this = this;
        this.adminService = adminService;
        this.route = route;
        this.user = new index_1.User;
        this.routeSubscription = route.params.subscribe(function (params) {
            _this.adminService.getUser(params['id']).subscribe(function (data) {
                _this.user = data;
            });
        });
    }
    AdminUsersInformationComponent.prototype.ngOnInit = function () { };
    AdminUsersInformationComponent.prototype.ngOnDestroy = function () {
        this.routeSubscription.unsubscribe();
    };
    AdminUsersInformationComponent = __decorate([
        core_1.Component({
            selector: 'admin-users-information',
            templateUrl: './admin-users-information.component.html',
            styleUrls: ['./admin-users-information.component.css']
        }),
        __metadata("design:paramtypes", [index_2.AdminService,
            router_1.ActivatedRoute])
    ], AdminUsersInformationComponent);
    return AdminUsersInformationComponent;
}());
exports.AdminUsersInformationComponent = AdminUsersInformationComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRtaW4tdXNlcnMtaW5mb3JtYXRpb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWRtaW4tdXNlcnMtaW5mb3JtYXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJFO0FBQzNFLDBDQUE2RTtBQUc3RSw0Q0FBK0U7QUFDL0UsOENBQWlGO0FBT2pGO0lBS0ksd0NBQXFCLFlBQTBCLEVBQzFCLEtBQXFCO1FBRDFDLGlCQUtDO1FBTG9CLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBSDFDLFNBQUksR0FBRyxJQUFJLFlBQUksQ0FBQztRQUlaLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBRSxVQUFBLE1BQU07WUFDbkQsS0FBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFFLFVBQUEsSUFBSTtnQkFDbkQsS0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7WUFBQSxDQUFDLENBQUMsQ0FBQztRQUFBLENBQUMsQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFRCxpREFBUSxHQUFSLGNBQWEsQ0FBQztJQUVkLG9EQUFXLEdBQVg7UUFDSSxJQUFJLENBQUMsaUJBQWlCLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDekMsQ0FBQztJQWhCUSw4QkFBOEI7UUFMMUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSx5QkFBeUI7WUFDbkMsV0FBVyxFQUFFLDBDQUEwQztZQUN2RCxTQUFTLEVBQUUsQ0FBQyx5Q0FBeUMsQ0FBQztTQUN6RCxDQUFDO3lDQU1xQyxvQkFBWTtZQUNuQix1QkFBYztPQU5qQyw4QkFBOEIsQ0FrQjFDO0lBQUQscUNBQUM7Q0FBQSxBQWxCRCxJQWtCQztBQWxCWSx3RUFBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95IH0gICAgICAgICAgICAgICBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tICdyeGpzL1N1YnNjcmlwdGlvbic7XG5cbmltcG9ydCB7IFVzZXIgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSAnLi8uLi9fbW9kZWxzL2luZGV4JztcbmltcG9ydCB7IEFkbWluU2VydmljZSB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSAnLi8uLi9fc2VydmljZXMvaW5kZXgnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2FkbWluLXVzZXJzLWluZm9ybWF0aW9uJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vYWRtaW4tdXNlcnMtaW5mb3JtYXRpb24uY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL2FkbWluLXVzZXJzLWluZm9ybWF0aW9uLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBBZG1pblVzZXJzSW5mb3JtYXRpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgcHJpdmF0ZSByb3V0ZVN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICAgIHVzZXIgPSBuZXcgVXNlcjtcblxuICAgIGNvbnN0cnVjdG9yKCBwcml2YXRlIGFkbWluU2VydmljZTogQWRtaW5TZXJ2aWNlLFxuICAgICAgICAgICAgICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSApIHtcbiAgICAgICAgdGhpcy5yb3V0ZVN1YnNjcmlwdGlvbiA9IHJvdXRlLnBhcmFtcy5zdWJzY3JpYmUoIHBhcmFtcyA9PiB7XG4gICAgICAgICAgICB0aGlzLmFkbWluU2VydmljZS5nZXRVc2VyKHBhcmFtc1snaWQnXSkuc3Vic2NyaWJlKCBkYXRhID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnVzZXIgPSBkYXRhO30pO30pO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkgeyB9XG5cbiAgICBuZ09uRGVzdHJveSgpe1xuICAgICAgICB0aGlzLnJvdXRlU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuXG59XG5cbiJdfQ==