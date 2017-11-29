"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var modal_1 = require("ngx-bootstrap/modal");
var Observable_1 = require("rxjs/Observable");
var sign_up_second_step_component_1 = require("../sign-up-second-step/sign-up-second-step.component");
var index_1 = require("../_services/index");
var AuthUserGuard = (function () {
    function AuthUserGuard(router, userService, modalService) {
        this.router = router;
        this.userService = userService;
        this.modalService = modalService;
    }
    AuthUserGuard.prototype.canActivate = function (route) {
        var _this = this;
        return this.userService.getCurrentUser()
            .map(function (isAuth) {
            var signUpSecondStepModal;
            if ((isAuth) && (isAuth.role === 'user')) {
                if (!(isAuth.first_name || isAuth.last_name || isAuth.phone || isAuth.country)) {
                    signUpSecondStepModal = _this.modalService.show(sign_up_second_step_component_1.SignUpSecondStepComponent);
                    return false;
                }
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
    AuthUserGuard = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [router_1.Router,
            index_1.UserService,
            modal_1.BsModalService])
    ], AuthUserGuard);
    return AuthUserGuard;
}());
exports.AuthUserGuard = AuthUserGuard;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC11c2VyLmd1YXJkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXV0aC11c2VyLmd1YXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQW1FO0FBQ25FLDBDQUFxRTtBQUVyRSw2Q0FBeUU7QUFFekUsOENBQXFFO0FBRXJFLHNHQUEwRztBQUMxRyw0Q0FBd0U7QUFJeEU7SUFFSSx1QkFBcUIsTUFBYyxFQUNkLFdBQXdCLEVBQ3hCLFlBQTRCO1FBRjVCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixpQkFBWSxHQUFaLFlBQVksQ0FBZ0I7SUFDakQsQ0FBQztJQUVELG1DQUFXLEdBQVgsVUFBWSxLQUE2QjtRQUF6QyxpQkFrQkM7UUFqQkcsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxFQUFFO2FBQ25DLEdBQUcsQ0FBRSxVQUFBLE1BQU07WUFDUixJQUFJLHFCQUFpQyxDQUFDO1lBQ3RDLEVBQUUsQ0FBQyxDQUFDLENBQUUsTUFBTSxDQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDekMsRUFBRSxDQUFDLENBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFVLElBQUksTUFBTSxDQUFDLFNBQVMsSUFBSSxNQUFNLENBQUMsS0FBSyxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUUsQ0FBQyxDQUFDLENBQUM7b0JBQy9FLHFCQUFxQixHQUFHLEtBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLHlEQUF5QixDQUFDLENBQUM7b0JBQzFFLE1BQU0sQ0FBQyxLQUFLLENBQUM7Z0JBQ2pCLENBQUM7Z0JBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNoQixDQUFDO1lBQ0QsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQzVCLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDakIsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFFLFVBQUEsS0FBSztZQUNULEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUM1QixNQUFNLENBQUMsdUJBQVUsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDaEMsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBekJRLGFBQWE7UUFEekIsaUJBQVUsRUFBRTt5Q0FHb0IsZUFBTTtZQUNELG1CQUFXO1lBQ1Ysc0JBQWM7T0FKeEMsYUFBYSxDQTBCekI7SUFBRCxvQkFBQztDQUFBLEFBMUJELElBMEJDO0FBMUJZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9ICAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyLCBDYW5BY3RpdmF0ZSB9ICAgICAgICAgICAgICAgIGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90IH0gICAgICAgICAgICAgZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEJzTW9kYWxTZXJ2aWNlIH0gICAgICAgICAgICAgICAgICAgICBmcm9tICduZ3gtYm9vdHN0cmFwL21vZGFsJztcbmltcG9ydCB7IEJzTW9kYWxSZWYgfSAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tICduZ3gtYm9vdHN0cmFwL21vZGFsL21vZGFsLW9wdGlvbnMuY2xhc3MnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9ICAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5cbmltcG9ydCB7IFNpZ25VcFNlY29uZFN0ZXBDb21wb25lbnQgfSAgICAgICAgICBmcm9tICcuLi9zaWduLXVwLXNlY29uZC1zdGVwL3NpZ24tdXAtc2Vjb25kLXN0ZXAuY29tcG9uZW50JztcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gICAgICAgICAgICAgICAgICAgICAgICBmcm9tICcuLi9fc2VydmljZXMvaW5kZXgnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBdXRoVXNlckd1YXJkIGltcGxlbWVudHMgQ2FuQWN0aXZhdGUge1xuXG4gICAgY29uc3RydWN0b3IoIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgICAgICAgICAgIHByaXZhdGUgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlLFxuICAgICAgICAgICAgICAgICBwcml2YXRlIG1vZGFsU2VydmljZTogQnNNb2RhbFNlcnZpY2UsKSB7XG4gICAgfVxuXG4gICAgY2FuQWN0aXZhdGUocm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHwgYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLnVzZXJTZXJ2aWNlLmdldEN1cnJlbnRVc2VyKClcbiAgICAgICAgICAgIC5tYXAoIGlzQXV0aCA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHNpZ25VcFNlY29uZFN0ZXBNb2RhbDogQnNNb2RhbFJlZjtcbiAgICAgICAgICAgICAgICBpZiAoKCBpc0F1dGggKSAmJiAoaXNBdXRoLnJvbGUgPT09ICd1c2VyJykpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCAhKGlzQXV0aC5maXJzdF9uYW1lIHx8IGlzQXV0aC5sYXN0X25hbWUgfHwgaXNBdXRoLnBob25lIHx8IGlzQXV0aC5jb3VudHJ5KSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpZ25VcFNlY29uZFN0ZXBNb2RhbCA9IHRoaXMubW9kYWxTZXJ2aWNlLnNob3coU2lnblVwU2Vjb25kU3RlcENvbXBvbmVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnLyddKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKCBlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvJ10pO1xuICAgICAgICAgICAgICAgIHJldHVybiBPYnNlcnZhYmxlLm9mKGZhbHNlKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cbn1cbiJdfQ==