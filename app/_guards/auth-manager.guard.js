"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var Observable_1 = require("rxjs/Observable");
var index_1 = require("./../_services/index");
var AuthManagerGuard = (function () {
    function AuthManagerGuard(router, userService) {
        var _this = this;
        this.router = router;
        this.userService = userService;
        this.userService.getCurrentUser()
            .subscribe(function (userData) { _this.currentUser = userData; });
    }
    AuthManagerGuard.prototype.canActivate = function (route) {
        var _this = this;
        return this.userService.getCurrentUser()
            .map(function (isAuth) {
            if ((isAuth) && (isAuth.role === 'manager')) {
                return true;
            }
            _this.router.navigate(['/']);
            return false;
        })
            .catch(function (error) {
            _this.router.navigate(['/']);
            return Observable_1.Observable.of(false);
        });
    };
    AuthManagerGuard = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [router_1.Router,
            index_1.UserService])
    ], AuthManagerGuard);
    return AuthManagerGuard;
}());
exports.AuthManagerGuard = AuthManagerGuard;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC1tYW5hZ2VyLmd1YXJkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXV0aC1tYW5hZ2VyLmd1YXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQW1FO0FBQ25FLDBDQUFxRTtBQUVyRSw4Q0FBcUU7QUFFckUsOENBQTBFO0FBRzFFO0lBR0ksMEJBQXFCLE1BQWMsRUFDZCxXQUF3QjtRQUQ3QyxpQkFJQztRQUpvQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDekMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLEVBQUU7YUFDNUIsU0FBUyxDQUFDLFVBQUEsUUFBUSxJQUFLLEtBQUksQ0FBQyxXQUFXLEdBQUcsUUFBUSxDQUFBLENBQUEsQ0FBQyxDQUFDLENBQUE7SUFDN0QsQ0FBQztJQUVELHNDQUFXLEdBQVgsVUFBWSxLQUE2QjtRQUF6QyxpQkFhQztRQVpHLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsRUFBRTthQUNuQyxHQUFHLENBQUUsVUFBQSxNQUFNO1lBQ1IsRUFBRSxDQUFDLENBQUMsQ0FBRSxNQUFNLENBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM1QyxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ2hCLENBQUM7WUFDRCxLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDNUIsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNqQixDQUFDLENBQUM7YUFDRCxLQUFLLENBQUUsVUFBQSxLQUFLO1lBQ1QsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQzVCLE1BQU0sQ0FBQyx1QkFBVSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNoQyxDQUFDLENBQUMsQ0FBQztJQUNYLENBQUM7SUF0QlEsZ0JBQWdCO1FBRDVCLGlCQUFVLEVBQUU7eUNBSW9CLGVBQU07WUFDRCxtQkFBVztPQUpwQyxnQkFBZ0IsQ0F1QjVCO0lBQUQsdUJBQUM7Q0FBQSxBQXZCRCxJQXVCQztBQXZCWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIsIENhbkFjdGl2YXRlIH0gICAgICAgICAgICAgICAgZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlU25hcHNob3QgfSAgICAgICAgICAgICBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9ICAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5cbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gICAgICAgICAgICAgICAgICAgICAgICBmcm9tICcuLy4uL19zZXJ2aWNlcy9pbmRleCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBdXRoTWFuYWdlckd1YXJkIGltcGxlbWVudHMgQ2FuQWN0aXZhdGUge1xuICAgIGN1cnJlbnRVc2VyOiBhbnk7XG5cbiAgICBjb25zdHJ1Y3RvciggcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICAgICAgICAgICAgICAgcHJpdmF0ZSB1c2VyU2VydmljZTogVXNlclNlcnZpY2UsICkge1xuICAgICAgICB0aGlzLnVzZXJTZXJ2aWNlLmdldEN1cnJlbnRVc2VyKClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUodXNlckRhdGEgPT4ge3RoaXMuY3VycmVudFVzZXIgPSB1c2VyRGF0YX0pXG4gICAgfVxuXG4gICAgY2FuQWN0aXZhdGUocm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHwgYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLnVzZXJTZXJ2aWNlLmdldEN1cnJlbnRVc2VyKClcbiAgICAgICAgICAgIC5tYXAoIGlzQXV0aCA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCggaXNBdXRoICkgJiYgKGlzQXV0aC5yb2xlID09PSAnbWFuYWdlcicpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy8nXSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCggZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnLyddKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS5vZihmYWxzZSk7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG59XG4iXX0=