"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var modal_1 = require("ngx-bootstrap/modal");
var sign_in_component_1 = require("../sign-in/sign-in.component");
var index_1 = require("./../_models/index");
var index_2 = require("./../_services/index");
var StartPageGetStartedComponent = (function () {
    function StartPageGetStartedComponent(modalService, authenticationService, router) {
        this.authenticationService = authenticationService;
        this.router = router;
        this.authentication = new index_1.Email;
        this.modalService = modalService;
    }
    StartPageGetStartedComponent.prototype.ngOnInit = function () {
        this.authentication = this.authenticationService.getEmail();
    };
    ;
    StartPageGetStartedComponent.prototype.getStarted = function () {
        var _this = this;
        this.authenticationService.checkEmail(this.authentication.email)
            .subscribe(function (data) {
            if (data) {
                _this.bsModalRef = _this.modalService.show(sign_in_component_1.SignInComponent);
            }
            else {
                _this.router.navigate(['/sign-up']);
            }
        });
    };
    ;
    StartPageGetStartedComponent = __decorate([
        core_1.Component({
            selector: 'start-page-get-started',
            templateUrl: './start-page-get-started.component.html',
            styleUrls: ['./start-page-get-started.component.css']
        }),
        __metadata("design:paramtypes", [modal_1.BsModalService,
            index_2.AuthenticationService,
            router_1.Router])
    ], StartPageGetStartedComponent);
    return StartPageGetStartedComponent;
}());
exports.StartPageGetStartedComponent = StartPageGetStartedComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhcnQtcGFnZS1nZXQtc3RhcnRlZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzdGFydC1wYWdlLWdldC1zdGFydGVkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwRTtBQUMxRSwwQ0FBNEU7QUFDNUUsNkNBQWdGO0FBRWhGLGtFQUF5RjtBQUV6Riw0Q0FBK0U7QUFDL0UsOENBQWlGO0FBUWpGO0lBTUksc0NBQWEsWUFBNEIsRUFDcEIscUJBQTRDLEVBQzVDLE1BQWM7UUFEZCwwQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO1FBQzVDLFdBQU0sR0FBTixNQUFNLENBQVE7UUFObkMsbUJBQWMsR0FBRyxJQUFJLGFBQUssQ0FBQztRQU92QixJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQztJQUNyQyxDQUFDO0lBRUQsK0NBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ2hFLENBQUM7SUFBQSxDQUFDO0lBRUYsaURBQVUsR0FBVjtRQUFBLGlCQU9DO1FBTkcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQzthQUNyQyxTQUFTLENBQUUsVUFBQSxJQUFJO1lBQU0sRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDUCxLQUFJLENBQUMsVUFBVSxHQUFHLEtBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLG1DQUFlLENBQUMsQ0FBQztZQUM5RCxDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ0osS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQ3ZDLENBQUM7UUFBQSxDQUFDLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBQUEsQ0FBQztJQXZCTyw0QkFBNEI7UUFMeEMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSx3QkFBd0I7WUFDbEMsV0FBVyxFQUFFLHlDQUF5QztZQUN0RCxTQUFTLEVBQUUsQ0FBQyx3Q0FBd0MsQ0FBQztTQUN4RCxDQUFDO3lDQU82QixzQkFBYztZQUNHLDZCQUFxQjtZQUNwQyxlQUFNO09BUjFCLDRCQUE0QixDQXdCeEM7SUFBRCxtQ0FBQztDQUFBLEFBeEJELElBd0JDO0FBeEJZLG9FQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBCc01vZGFsU2VydmljZSB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gJ25neC1ib290c3RyYXAvbW9kYWwnO1xuaW1wb3J0IHsgQnNNb2RhbFJlZiB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tICduZ3gtYm9vdHN0cmFwL21vZGFsL21vZGFsLW9wdGlvbnMuY2xhc3MnO1xuaW1wb3J0IHsgU2lnbkluQ29tcG9uZW50IH0gICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tICcuLi9zaWduLWluL3NpZ24taW4uY29tcG9uZW50JztcblxuaW1wb3J0IHsgRW1haWwgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tICcuLy4uL19tb2RlbHMvaW5kZXgnO1xuaW1wb3J0IHsgQXV0aGVudGljYXRpb25TZXJ2aWNlIH0gICAgICAgICAgICAgICAgICAgICBmcm9tICcuLy4uL19zZXJ2aWNlcy9pbmRleCc7XG5cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdzdGFydC1wYWdlLWdldC1zdGFydGVkJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vc3RhcnQtcGFnZS1nZXQtc3RhcnRlZC5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vc3RhcnQtcGFnZS1nZXQtc3RhcnRlZC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU3RhcnRQYWdlR2V0U3RhcnRlZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBhdXRoZW50aWNhdGlvbiA9IG5ldyBFbWFpbDtcbiAgICBic01vZGFsUmVmOiBCc01vZGFsUmVmO1xuICAgIHByaXZhdGUgbW9kYWxTZXJ2aWNlOiBhbnk7XG5cbiAgICBjb25zdHJ1Y3RvciggbW9kYWxTZXJ2aWNlOiBCc01vZGFsU2VydmljZSxcbiAgICAgICAgICAgICAgICAgcHJpdmF0ZSBhdXRoZW50aWNhdGlvblNlcnZpY2U6IEF1dGhlbnRpY2F0aW9uU2VydmljZSxcbiAgICAgICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciApIHtcbiAgICAgICAgdGhpcy5tb2RhbFNlcnZpY2UgPSBtb2RhbFNlcnZpY2U7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb24gPSB0aGlzLmF1dGhlbnRpY2F0aW9uU2VydmljZS5nZXRFbWFpbCgpO1xuICAgIH07XG5cbiAgICBnZXRTdGFydGVkKCkge1xuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9uU2VydmljZS5jaGVja0VtYWlsKHRoaXMuYXV0aGVudGljYXRpb24uZW1haWwpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnN1YnNjcmliZSggZGF0YSA9PiB7IGlmIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJzTW9kYWxSZWYgPSB0aGlzLm1vZGFsU2VydmljZS5zaG93KFNpZ25JbkNvbXBvbmVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9zaWduLXVwJ10pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSk7XG4gICAgfTtcbn1cbiJdfQ==