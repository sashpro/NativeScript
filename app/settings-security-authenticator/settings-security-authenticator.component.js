"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var modal_options_class_1 = require("ngx-bootstrap/modal/modal-options.class");
var index_1 = require("./../_services/index");
var index_2 = require("./../_services/index");
var index_3 = require("./../_models/index");
var index_4 = require("./../_models/index");
var SettingsSecurityAuthenticatorComponent = (function () {
    function SettingsSecurityAuthenticatorComponent(bsModalRef, twoFactorAuthenticationService, userService) {
        this.bsModalRef = bsModalRef;
        this.twoFactorAuthenticationService = twoFactorAuthenticationService;
        this.userService = userService;
        this.smsRequestModel = new index_3.SmsRequest;
        this.smsVerifyModel = new index_4.SmsVerify;
    }
    SettingsSecurityAuthenticatorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getCurrentUser()
            .subscribe(function (userData) {
            _this.smsRequestModel['phone_number'] = userData.phone.replace(/\+/gi, "");
            _this.smsRequest();
        });
    };
    SettingsSecurityAuthenticatorComponent.prototype.smsRequest = function () {
        var _this = this;
        this.errorMessage = '';
        this.twoFactorAuthenticationService.smsRequest(this.smsRequestModel)
            .subscribe(function (data) { }, function (error) { _this.errorMessage = error.detail; });
    };
    SettingsSecurityAuthenticatorComponent.prototype.smsVerify = function () {
        var _this = this;
        this.twoFactorAuthenticationService.smsVerify(this.smsVerifyModel)
            .subscribe(function (data) { _this.bsModalRef.hide(); }, function (error) { _this.errorMessage = error.mfa_code; });
    };
    SettingsSecurityAuthenticatorComponent = __decorate([
        core_1.Component({
            selector: 'modal-content',
            templateUrl: './settings-security-authenticator.component.html',
            styleUrls: ['./settings-security-authenticator.component.css']
        }),
        __metadata("design:paramtypes", [modal_options_class_1.BsModalRef,
            index_1.TwoFactorAuthenticationService,
            index_2.UserService])
    ], SettingsSecurityAuthenticatorComponent);
    return SettingsSecurityAuthenticatorComponent;
}());
exports.SettingsSecurityAuthenticatorComponent = SettingsSecurityAuthenticatorComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZ3Mtc2VjdXJpdHktYXV0aGVudGljYXRvci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzZXR0aW5ncy1zZWN1cml0eS1hdXRoZW50aWNhdG9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwRTtBQUUxRSwrRUFBb0c7QUFHcEcsOENBQW9GO0FBQ3BGLDhDQUFvRjtBQUVwRiw0Q0FBa0Y7QUFDbEYsNENBQWtGO0FBT2xGO0lBTUksZ0RBQW9CLFVBQXNCLEVBQ3JCLDhCQUE4RCxFQUM5RCxXQUF3QjtRQUZ6QixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3JCLG1DQUE4QixHQUE5Qiw4QkFBOEIsQ0FBZ0M7UUFDOUQsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFON0Msb0JBQWUsR0FBRyxJQUFJLGtCQUFVLENBQUM7UUFDakMsbUJBQWMsR0FBRyxJQUFJLGlCQUFTLENBQUM7SUFNL0IsQ0FBQztJQUVELHlEQUFRLEdBQVI7UUFBQSxpQkFJQztRQUhHLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxFQUFFO2FBQzVCLFNBQVMsQ0FBQyxVQUFBLFFBQVE7WUFBTSxLQUFJLENBQUMsZUFBZSxDQUFDLGNBQWMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQztZQUMxRSxLQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFBQSxDQUFDLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBRUQsMkRBQVUsR0FBVjtRQUFBLGlCQUtDO1FBSkcsSUFBSSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLDhCQUE4QixDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDO2FBQy9ELFNBQVMsQ0FBRSxVQUFBLElBQUksSUFBTSxDQUFDLEVBQ1gsVUFBQSxLQUFLLElBQU0sS0FBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUEsQ0FBQyxDQUFDLENBQUM7SUFDbkUsQ0FBQztJQUVELDBEQUFTLEdBQVQ7UUFBQSxpQkFJQztRQUhHLElBQUksQ0FBQyw4QkFBOEIsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQzthQUM3RCxTQUFTLENBQUUsVUFBQSxJQUFJLElBQU0sS0FBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFBLENBQUMsRUFDbEMsVUFBQSxLQUFLLElBQU0sS0FBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUEsQ0FBQyxDQUFDLENBQUM7SUFDckUsQ0FBQztJQTVCUSxzQ0FBc0M7UUFMbEQsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxlQUFlO1lBQ3pCLFdBQVcsRUFBRSxrREFBa0Q7WUFDL0QsU0FBUyxFQUFFLENBQUMsaURBQWlELENBQUM7U0FDakUsQ0FBQzt5Q0FPa0MsZ0NBQVU7WUFDVyxzQ0FBOEI7WUFDakQsbUJBQVc7T0FScEMsc0NBQXNDLENBOEJsRDtJQUFELDZDQUFDO0NBQUEsQUE5QkQsSUE4QkM7QUE5Qlksd0ZBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJzTW9kYWxTZXJ2aWNlIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSAnbmd4LWJvb3RzdHJhcC9tb2RhbCc7XG5pbXBvcnQgeyBCc01vZGFsUmVmIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gJ25neC1ib290c3RyYXAvbW9kYWwvbW9kYWwtb3B0aW9ucy5jbGFzcyc7XG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1CdWlsZGVyLCBWYWxpZGF0b3JzIH0gICAgICAgIGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgVHdvRmFjdG9yQXV0aGVudGljYXRpb25TZXJ2aWNlIH0gICAgICAgICAgICAgICBmcm9tICcuLy4uL19zZXJ2aWNlcy9pbmRleCc7XG5pbXBvcnQgeyBVc2VyU2VydmljZSB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gJy4vLi4vX3NlcnZpY2VzL2luZGV4JztcblxuaW1wb3J0IHsgU21zUmVxdWVzdCB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tICcuLy4uL19tb2RlbHMvaW5kZXgnO1xuaW1wb3J0IHsgU21zVmVyaWZ5IH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tICcuLy4uL19tb2RlbHMvaW5kZXgnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ21vZGFsLWNvbnRlbnQnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9zZXR0aW5ncy1zZWN1cml0eS1hdXRoZW50aWNhdG9yLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9zZXR0aW5ncy1zZWN1cml0eS1hdXRoZW50aWNhdG9yLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTZXR0aW5nc1NlY3VyaXR5QXV0aGVudGljYXRvckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBzbXNSZXF1ZXN0TW9kZWwgPSBuZXcgU21zUmVxdWVzdDtcbiAgICBzbXNWZXJpZnlNb2RlbCA9IG5ldyBTbXNWZXJpZnk7XG4gICAgZXJyb3JNZXNzYWdlOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvciggcHVibGljIGJzTW9kYWxSZWY6IEJzTW9kYWxSZWYsXG4gICAgICAgICAgICAgICAgIHByaXZhdGUgdHdvRmFjdG9yQXV0aGVudGljYXRpb25TZXJ2aWNlOiBUd29GYWN0b3JBdXRoZW50aWNhdGlvblNlcnZpY2UsXG4gICAgICAgICAgICAgICAgIHByaXZhdGUgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlKSB7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMudXNlclNlcnZpY2UuZ2V0Q3VycmVudFVzZXIoKVxuICAgICAgICAgICAgLnN1YnNjcmliZSh1c2VyRGF0YSA9PiB7IHRoaXMuc21zUmVxdWVzdE1vZGVsWydwaG9uZV9udW1iZXInXSA9IHVzZXJEYXRhLnBob25lLnJlcGxhY2UoL1xcKy9naSwgXCJcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zbXNSZXF1ZXN0KCk7fSk7XG4gICAgfVxuXG4gICAgc21zUmVxdWVzdCgpIHtcbiAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSAnJztcbiAgICAgICAgdGhpcy50d29GYWN0b3JBdXRoZW50aWNhdGlvblNlcnZpY2Uuc21zUmVxdWVzdCh0aGlzLnNtc1JlcXVlc3RNb2RlbClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoIGRhdGEgPT4geyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IgPT4geyB0aGlzLmVycm9yTWVzc2FnZSA9IGVycm9yLmRldGFpbDt9KTtcbiAgICB9XG5cbiAgICBzbXNWZXJpZnkoKSB7XG4gICAgICAgIHRoaXMudHdvRmFjdG9yQXV0aGVudGljYXRpb25TZXJ2aWNlLnNtc1ZlcmlmeSh0aGlzLnNtc1ZlcmlmeU1vZGVsKVxuICAgICAgICAgICAgLnN1YnNjcmliZSggZGF0YSA9PiB7IHRoaXMuYnNNb2RhbFJlZi5oaWRlKCk7fSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yID0+IHsgdGhpcy5lcnJvck1lc3NhZ2UgPSBlcnJvci5tZmFfY29kZTt9KTtcbiAgICB9XG5cbn1cbiJdfQ==