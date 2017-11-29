"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var modal_1 = require("ngx-bootstrap/modal");
var settings_security_authenticator_component_1 = require("../settings-security-authenticator/settings-security-authenticator.component");
var index_1 = require("../_services/index");
var SettingsSecurityTwoFactorAuthComponent = (function () {
    function SettingsSecurityTwoFactorAuthComponent(modalService, twoFactorAuthenticationService) {
        this.modalService = modalService;
        this.twoFactorAuthenticationService = twoFactorAuthenticationService;
    }
    SettingsSecurityTwoFactorAuthComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.twoFactorAuthenticationService.getTwoFactorStatus()
            .subscribe(function (data) { _this.twoFactorStatus = data; });
    };
    SettingsSecurityTwoFactorAuthComponent.prototype.deactivateAuthenticator = function () {
        this.twoFactorAuthenticationService.deactivate()
            .subscribe(function (data) { });
    };
    SettingsSecurityTwoFactorAuthComponent.prototype.openAuthenticatorModal = function () {
        this.AuthenticatorModal = this.modalService.show(settings_security_authenticator_component_1.SettingsSecurityAuthenticatorComponent);
    };
    SettingsSecurityTwoFactorAuthComponent = __decorate([
        core_1.Component({
            selector: 'settings-security-two-factor-authentication',
            templateUrl: 'settings-security-two-factor-authentication.component.html',
            styleUrls: ['settings-security-two-factor-authentication.component.css']
        }),
        __metadata("design:paramtypes", [modal_1.BsModalService,
            index_1.TwoFactorAuthenticationService])
    ], SettingsSecurityTwoFactorAuthComponent);
    return SettingsSecurityTwoFactorAuthComponent;
}());
exports.SettingsSecurityTwoFactorAuthComponent = SettingsSecurityTwoFactorAuthComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZ3Mtc2VjdXJpdHktdHdvLWZhY3Rvci1hdXRoZW50aWNhdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzZXR0aW5ncy1zZWN1cml0eS10d28tZmFjdG9yLWF1dGhlbnRpY2F0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUE2RTtBQUM3RSw2Q0FBbUY7QUFHbkYsMElBQTRJO0FBQzVJLDRDQUFrRjtBQU9sRjtJQUtJLGdEQUFxQixZQUE0QixFQUM1Qiw4QkFBOEQ7UUFEOUQsaUJBQVksR0FBWixZQUFZLENBQWdCO1FBQzVCLG1DQUE4QixHQUE5Qiw4QkFBOEIsQ0FBZ0M7SUFBSyxDQUFDO0lBRXpGLHlEQUFRLEdBQVI7UUFBQSxpQkFHQztRQUZHLElBQUksQ0FBQyw4QkFBOEIsQ0FBQyxrQkFBa0IsRUFBRTthQUNuRCxTQUFTLENBQUMsVUFBQSxJQUFJLElBQU0sS0FBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsQ0FBQSxDQUFDLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBRUQsd0VBQXVCLEdBQXZCO1FBQ0ksSUFBSSxDQUFDLDhCQUE4QixDQUFDLFVBQVUsRUFBRTthQUMzQyxTQUFTLENBQUMsVUFBQSxJQUFJLElBQU0sQ0FBQyxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVNLHVFQUFzQixHQUE3QjtRQUNJLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxrRkFBc0MsQ0FBQyxDQUFDO0lBQzdGLENBQUM7SUFwQlEsc0NBQXNDO1FBTGxELGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsNkNBQTZDO1lBQ3ZELFdBQVcsRUFBRSw0REFBNEQ7WUFDekUsU0FBUyxFQUFFLENBQUMsMkRBQTJELENBQUM7U0FDM0UsQ0FBQzt5Q0FNcUMsc0JBQWM7WUFDSSxzQ0FBOEI7T0FOMUUsc0NBQXNDLENBcUJsRDtJQUFELDZDQUFDO0NBQUEsQUFyQkQsSUFxQkM7QUFyQlksd0ZBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJzTW9kYWxTZXJ2aWNlIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSAnbmd4LWJvb3RzdHJhcC9tb2RhbCc7XG5pbXBvcnQgeyBCc01vZGFsUmVmIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gJ25neC1ib290c3RyYXAvbW9kYWwvbW9kYWwtb3B0aW9ucy5jbGFzcyc7XG5cbmltcG9ydCB7IFNldHRpbmdzU2VjdXJpdHlBdXRoZW50aWNhdG9yQ29tcG9uZW50IH0gICAgICAgZnJvbSAnLi4vc2V0dGluZ3Mtc2VjdXJpdHktYXV0aGVudGljYXRvci9zZXR0aW5ncy1zZWN1cml0eS1hdXRoZW50aWNhdG9yLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUd29GYWN0b3JBdXRoZW50aWNhdGlvblNlcnZpY2UgfSAgICAgICAgICAgICAgIGZyb20gJy4uL19zZXJ2aWNlcy9pbmRleCc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnc2V0dGluZ3Mtc2VjdXJpdHktdHdvLWZhY3Rvci1hdXRoZW50aWNhdGlvbicsXG4gICAgdGVtcGxhdGVVcmw6ICdzZXR0aW5ncy1zZWN1cml0eS10d28tZmFjdG9yLWF1dGhlbnRpY2F0aW9uLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnc2V0dGluZ3Mtc2VjdXJpdHktdHdvLWZhY3Rvci1hdXRoZW50aWNhdGlvbi5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU2V0dGluZ3NTZWN1cml0eVR3b0ZhY3RvckF1dGhDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgdHdvRmFjdG9yU3RhdHVzOiBzdHJpbmc7XG4gICAgQXV0aGVudGljYXRvck1vZGFsOiBCc01vZGFsUmVmO1xuXG4gICAgY29uc3RydWN0b3IoIHByaXZhdGUgbW9kYWxTZXJ2aWNlOiBCc01vZGFsU2VydmljZSxcbiAgICAgICAgICAgICAgICAgcHJpdmF0ZSB0d29GYWN0b3JBdXRoZW50aWNhdGlvblNlcnZpY2U6IFR3b0ZhY3RvckF1dGhlbnRpY2F0aW9uU2VydmljZSApIHsgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMudHdvRmFjdG9yQXV0aGVudGljYXRpb25TZXJ2aWNlLmdldFR3b0ZhY3RvclN0YXR1cygpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKGRhdGEgPT4geyB0aGlzLnR3b0ZhY3RvclN0YXR1cyA9IGRhdGE7fSk7XG4gICAgfVxuXG4gICAgZGVhY3RpdmF0ZUF1dGhlbnRpY2F0b3IoKSB7XG4gICAgICAgIHRoaXMudHdvRmFjdG9yQXV0aGVudGljYXRpb25TZXJ2aWNlLmRlYWN0aXZhdGUoKVxuICAgICAgICAgICAgLnN1YnNjcmliZShkYXRhID0+IHsgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIG9wZW5BdXRoZW50aWNhdG9yTW9kYWwoKSB7XG4gICAgICAgIHRoaXMuQXV0aGVudGljYXRvck1vZGFsID0gdGhpcy5tb2RhbFNlcnZpY2Uuc2hvdyhTZXR0aW5nc1NlY3VyaXR5QXV0aGVudGljYXRvckNvbXBvbmVudCk7XG4gICAgfVxufVxuIl19