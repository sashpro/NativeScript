"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var modal_1 = require("ngx-bootstrap/modal");
var modal_options_class_1 = require("ngx-bootstrap/modal/modal-options.class");
var index_1 = require("../_models/index");
var index_2 = require("../_services/index");
var reset_password_component_1 = require("../reset-password/reset-password.component");
var SignInComponent = (function () {
    function SignInComponent(bsModalRef, modalService, router, userService, authenticationService) {
        this.bsModalRef = bsModalRef;
        this.modalService = modalService;
        this.router = router;
        this.userService = userService;
        this.authenticationService = authenticationService;
        this.signInModel = new index_1.Authentication;
        this.twoFactorAuthentication = false;
    }
    SignInComponent.prototype.ngOnInit = function () {
        this.signInModel['email'] = this.authenticationService.getEmail().email;
    };
    ;
    SignInComponent.prototype.login = function () {
        var _this = this;
        this.errorMessage = '';
        this.authenticationService.login(this.signInModel)
            .subscribe(function (data) {
            if (data.mfa_required) {
                _this.twoFactorAuthentication = true;
            }
            else {
                _this.userService.getCurrentUser();
                _this.router.navigate(['/']);
                _this.bsModalRef.hide();
            }
        }, function (error) { _this.errorMessage = error.non_field_errors; });
    };
    SignInComponent.prototype.resendCode = function () {
        delete this.signInModel.mfa_code;
        this.login();
    };
    SignInComponent.prototype.openResetPasswordModal = function () {
        this.resetPasswordModal = this.modalService.show(reset_password_component_1.ResetPasswordComponent);
        this.bsModalRef.hide();
    };
    SignInComponent = __decorate([
        core_1.Component({
            selector: 'modal-content',
            templateUrl: './sign-in.component.html',
            styleUrls: ['./sign-in.component.css']
        }),
        __metadata("design:paramtypes", [modal_options_class_1.BsModalRef,
            modal_1.BsModalService,
            router_1.Router,
            index_2.UserService,
            index_2.AuthenticationService])
    ], SignInComponent);
    return SignInComponent;
}());
exports.SignInComponent = SignInComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbi1pbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzaWduLWluLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyRTtBQUMzRSwwQ0FBNkU7QUFDN0UsNkNBQWlGO0FBQ2pGLCtFQUFxRztBQUVyRywwQ0FBOEU7QUFDOUUsNENBQWdGO0FBRWhGLHVGQUF3RztBQVF4RztJQU9JLHlCQUFvQixVQUFzQixFQUNyQixZQUE0QixFQUM1QixNQUFjLEVBQ2QsV0FBd0IsRUFDeEIscUJBQTRDO1FBSjdDLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDckIsaUJBQVksR0FBWixZQUFZLENBQWdCO1FBQzVCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QiwwQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO1FBVGpFLGdCQUFXLEdBQUcsSUFBSSxzQkFBYyxDQUFDO1FBRWpDLDRCQUF1QixHQUFHLEtBQUssQ0FBQztJQU9zQyxDQUFDO0lBRXZFLGtDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxLQUFLLENBQUM7SUFDNUUsQ0FBQztJQUFBLENBQUM7SUFFRiwrQkFBSyxHQUFMO1FBQUEsaUJBYUM7UUFaRyxJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7YUFDN0MsU0FBUyxDQUFFLFVBQUEsSUFBSTtZQUNaLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO2dCQUNwQixLQUFJLENBQUMsdUJBQXVCLEdBQUcsSUFBSSxDQUFDO1lBQ3hDLENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDSixLQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsRUFBRSxDQUFDO2dCQUNsQyxLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQzVCLEtBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDM0IsQ0FBQztRQUNMLENBQUMsRUFDRCxVQUFBLEtBQUssSUFBTSxLQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFBLENBQUMsQ0FBQyxDQUFDO0lBQ2pFLENBQUM7SUFFRCxvQ0FBVSxHQUFWO1FBQ0ksT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQztRQUNqQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUVPLGdEQUFzQixHQUE3QjtRQUNHLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxpREFBc0IsQ0FBQyxDQUFDO1FBQ3pFLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQXhDUSxlQUFlO1FBTDNCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsZUFBZTtZQUN6QixXQUFXLEVBQUUsMEJBQTBCO1lBQ3ZDLFNBQVMsRUFBRSxDQUFDLHlCQUF5QixDQUFDO1NBQ3pDLENBQUM7eUNBUWtDLGdDQUFVO1lBQ1Asc0JBQWM7WUFDcEIsZUFBTTtZQUNELG1CQUFXO1lBQ0QsNkJBQXFCO09BWHhELGVBQWUsQ0EwQzNCO0lBQUQsc0JBQUM7Q0FBQSxBQTFDRCxJQTBDQztBQTFDWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gICAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEJzTW9kYWxTZXJ2aWNlIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gJ25neC1ib290c3RyYXAvbW9kYWwnO1xuaW1wb3J0IHsgQnNNb2RhbFJlZiB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSAnbmd4LWJvb3RzdHJhcC9tb2RhbC9tb2RhbC1vcHRpb25zLmNsYXNzJztcblxuaW1wb3J0IHsgQXV0aGVudGljYXRpb24gfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSAnLi4vX21vZGVscy9pbmRleCc7XG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblNlcnZpY2UsIFVzZXJTZXJ2aWNlIH0gICAgICAgICBmcm9tICcuLi9fc2VydmljZXMvaW5kZXgnO1xuXG5pbXBvcnQgeyBSZXNldFBhc3N3b3JkQ29tcG9uZW50IH0gICAgICAgICAgICAgICAgICAgICBmcm9tICcuLi9yZXNldC1wYXNzd29yZC9yZXNldC1wYXNzd29yZC5jb21wb25lbnQnO1xuXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbW9kYWwtY29udGVudCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3NpZ24taW4uY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL3NpZ24taW4uY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFNpZ25JbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBzaWduSW5Nb2RlbCA9IG5ldyBBdXRoZW50aWNhdGlvbjtcbiAgICBlcnJvck1lc3NhZ2U6IHN0cmluZztcbiAgICB0d29GYWN0b3JBdXRoZW50aWNhdGlvbiA9IGZhbHNlO1xuICAgIHJlc2V0UGFzc3dvcmRNb2RhbDogQnNNb2RhbFJlZjtcblxuICAgIGNvbnN0cnVjdG9yKCBwdWJsaWMgYnNNb2RhbFJlZjogQnNNb2RhbFJlZixcbiAgICAgICAgICAgICAgICAgcHJpdmF0ZSBtb2RhbFNlcnZpY2U6IEJzTW9kYWxTZXJ2aWNlLFxuICAgICAgICAgICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgICAgICAgICAgICAgICBwcml2YXRlIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSxcbiAgICAgICAgICAgICAgICAgcHJpdmF0ZSBhdXRoZW50aWNhdGlvblNlcnZpY2U6IEF1dGhlbnRpY2F0aW9uU2VydmljZSApIHsgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuc2lnbkluTW9kZWxbJ2VtYWlsJ10gPSB0aGlzLmF1dGhlbnRpY2F0aW9uU2VydmljZS5nZXRFbWFpbCgpLmVtYWlsO1xuICAgIH07XG5cbiAgICBsb2dpbigpIHtcbiAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSAnJztcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvblNlcnZpY2UubG9naW4odGhpcy5zaWduSW5Nb2RlbClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoIGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChkYXRhLm1mYV9yZXF1aXJlZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnR3b0ZhY3RvckF1dGhlbnRpY2F0aW9uID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVzZXJTZXJ2aWNlLmdldEN1cnJlbnRVc2VyKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnLyddKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ic01vZGFsUmVmLmhpZGUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3IgPT4geyB0aGlzLmVycm9yTWVzc2FnZSA9IGVycm9yLm5vbl9maWVsZF9lcnJvcnM7fSk7XG4gICAgfVxuXG4gICAgcmVzZW5kQ29kZSgpIHtcbiAgICAgICAgZGVsZXRlIHRoaXMuc2lnbkluTW9kZWwubWZhX2NvZGU7XG4gICAgICAgIHRoaXMubG9naW4oKTtcbiAgICB9XG5cbiAgICAgcHVibGljIG9wZW5SZXNldFBhc3N3b3JkTW9kYWwoKSB7XG4gICAgICAgIHRoaXMucmVzZXRQYXNzd29yZE1vZGFsID0gdGhpcy5tb2RhbFNlcnZpY2Uuc2hvdyhSZXNldFBhc3N3b3JkQ29tcG9uZW50KTtcbiAgICAgICAgdGhpcy5ic01vZGFsUmVmLmhpZGUoKTtcbiAgICB9XG5cbn1cbiJdfQ==