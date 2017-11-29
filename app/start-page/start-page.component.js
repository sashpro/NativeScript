"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var index_1 = require("./../_services/index");
var StartPageComponent = (function () {
    function StartPageComponent(router, userService) {
        this.router = router;
        this.userService = userService;
    }
    StartPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getCurrentUser()
            .subscribe(function (data) {
            if (data) {
                if (data.groups_name.indexOf('managers') != -1) {
                    _this.router.navigate(['/approve']);
                }
                else if (data.groups_name.indexOf('users') != -1 && data.first_name) {
                    _this.router.navigate(['/dashboard']);
                }
            }
        });
    };
    StartPageComponent = __decorate([
        core_1.Component({
            selector: 'start-page',
            templateUrl: './start-page.component.html',
            styleUrls: ['./start-page.component.css']
        }),
        __metadata("design:paramtypes", [router_1.Router,
            index_1.UserService])
    ], StartPageComponent);
    return StartPageComponent;
}());
exports.StartPageComponent = StartPageComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhcnQtcGFnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzdGFydC1wYWdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyRTtBQUMzRSwwQ0FBNkU7QUFJN0UsOENBQWtGO0FBVWxGO0lBRUksNEJBQXNCLE1BQWMsRUFDZCxXQUF3QjtRQUR4QixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsZ0JBQVcsR0FBWCxXQUFXLENBQWE7SUFBSyxDQUFDO0lBRXBELHFDQUFRLEdBQVI7UUFBQSxpQkFXQztRQVZHLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxFQUFFO2FBQzVCLFNBQVMsQ0FBQyxVQUFBLElBQUk7WUFDWCxFQUFFLENBQUMsQ0FBRSxJQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUNULEVBQUUsQ0FBQyxDQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBRSxDQUFDLENBQUMsQ0FBQztvQkFDL0MsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO2dCQUN2QyxDQUFDO2dCQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBRSxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztvQkFDckUsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO2dCQUN6QyxDQUFDO1lBQ0wsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQWhCUSxrQkFBa0I7UUFMOUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFdBQVcsRUFBRSw2QkFBNkI7WUFDMUMsU0FBUyxFQUFFLENBQUMsNEJBQTRCLENBQUM7U0FDNUMsQ0FBQzt5Q0FHZ0MsZUFBTTtZQUNELG1CQUFXO09BSHJDLGtCQUFrQixDQWtCOUI7SUFBRCx5QkFBQztDQUFBLEFBbEJELElBa0JDO0FBbEJZLGdEQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gICAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEJzTW9kYWxTZXJ2aWNlIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gJ25neC1ib290c3RyYXAvbW9kYWwnO1xuaW1wb3J0IHsgQnNNb2RhbFJlZiB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSAnbmd4LWJvb3RzdHJhcC9tb2RhbC9tb2RhbC1vcHRpb25zLmNsYXNzJztcblxuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSAnLi8uLi9fc2VydmljZXMvaW5kZXgnO1xuXG5cblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3N0YXJ0LXBhZ2UnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9zdGFydC1wYWdlLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9zdGFydC1wYWdlLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTdGFydFBhZ2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgY29uc3RydWN0b3IgKCBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgICAgICAgICAgICAgICAgcHJpdmF0ZSB1c2VyU2VydmljZTogVXNlclNlcnZpY2UsICkge31cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLnVzZXJTZXJ2aWNlLmdldEN1cnJlbnRVc2VyKClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCBkYXRhICkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIGRhdGEuZ3JvdXBzX25hbWUuaW5kZXhPZignbWFuYWdlcnMnKSAhPSAtMSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2FwcHJvdmUnXSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoIGRhdGEuZ3JvdXBzX25hbWUuaW5kZXhPZigndXNlcnMnKSAhPSAtMSAmJiBkYXRhLmZpcnN0X25hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2Rhc2hib2FyZCddKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxufVxuIl19