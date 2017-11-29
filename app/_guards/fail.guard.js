"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var index_1 = require("../_services/index");
var FailGuard = (function () {
    function FailGuard(router, globalService) {
        this.router = router;
        this.globalService = globalService;
    }
    FailGuard.prototype.canActivate = function (route) {
        if (this.globalService.getCountryList()) {
            this.router.navigate(['/']);
            return false;
        }
        return true;
    };
    FailGuard = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [router_1.Router,
            index_1.GlobalStorageService])
    ], FailGuard);
    return FailGuard;
}());
exports.FailGuard = FailGuard;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFpbC5ndWFyZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZhaWwuZ3VhcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBbUU7QUFDbkUsMENBQXFFO0FBR3JFLDRDQUF1RTtBQUd2RTtJQUdJLG1CQUFxQixNQUFjLEVBQ2QsYUFBbUM7UUFEbkMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLGtCQUFhLEdBQWIsYUFBYSxDQUFzQjtJQUFJLENBQUM7SUFFN0QsK0JBQVcsR0FBWCxVQUFZLEtBQTZCO1FBQ3JDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3RDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUM1QixNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ2pCLENBQUM7UUFFRCxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFiUSxTQUFTO1FBRHJCLGlCQUFVLEVBQUU7eUNBSW9CLGVBQU07WUFDQyw0QkFBb0I7T0FKL0MsU0FBUyxDQWNyQjtJQUFELGdCQUFDO0NBQUEsQUFkRCxJQWNDO0FBZFksOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIsIENhbkFjdGl2YXRlIH0gICAgICAgICAgICAgICAgZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlU25hcHNob3QgfSAgICAgICAgICAgICBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBHbG9iYWxTdG9yYWdlU2VydmljZSB9ICAgICAgICAgICAgICAgZnJvbSAnLi4vX3NlcnZpY2VzL2luZGV4J1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRmFpbEd1YXJkIGltcGxlbWVudHMgQ2FuQWN0aXZhdGUge1xuICAgIGN1cnJlbnRVc2VyOiBhbnk7XG5cbiAgICBjb25zdHJ1Y3RvciggcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICAgICAgICAgICAgICAgcHJpdmF0ZSBnbG9iYWxTZXJ2aWNlOiBHbG9iYWxTdG9yYWdlU2VydmljZSApIHt9XG5cbiAgICBjYW5BY3RpdmF0ZShyb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCkge1xuICAgICAgICBpZiAodGhpcy5nbG9iYWxTZXJ2aWNlLmdldENvdW50cnlMaXN0KCkpIHtcbiAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnLyddKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbn1cbiJdfQ==