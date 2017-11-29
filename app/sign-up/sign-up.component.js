"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var modal_1 = require("ngx-bootstrap/modal");
var sign_in_component_1 = require("../sign-in/sign-in.component");
var index_1 = require("../_models/index");
var index_2 = require("../_services/index");
var SignUpComponent = (function () {
    function SignUpComponent(modalService, authenticationService) {
        this.modalService = modalService;
        this.authenticationService = authenticationService;
        this.signUpModel = new index_1.Authentication;
        this.message = false;
        this.modalService = modalService;
    }
    SignUpComponent.prototype.ngOnInit = function () {
        this.signUpModel['email'] = this.authenticationService.getEmail().email;
    };
    ;
    SignUpComponent.prototype.register = function () {
        var _this = this;
        this.message = false;
        this.emailMessage = '';
        this.passwordMessage = '';
        this.errorMessage = '';
        this.authenticationService.register(this.signUpModel)
            .subscribe(function (data) { _this.message = true; }, function (error) {
            _this.emailMessage = error.email;
            for (var _i = 0, _a = error.password1; _i < _a.length; _i++) {
                var message = _a[_i];
                _this.passwordMessage += ' ' + message;
            }
            _this.errorMessage = error.detail;
        });
    };
    SignUpComponent.prototype.openModalWithComponent = function () {
        this.bsModalRef = this.modalService.show(sign_in_component_1.SignInComponent);
    };
    SignUpComponent = __decorate([
        core_1.Component({
            selector: 'sign-up',
            templateUrl: './sign-up.component.html',
            styleUrls: ['./sign-up.component.css']
        }),
        __metadata("design:paramtypes", [modal_1.BsModalService,
            index_2.AuthenticationService])
    ], SignUpComponent);
    return SignUpComponent;
}());
exports.SignUpComponent = SignUpComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbi11cC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzaWduLXVwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwRTtBQUMxRSw2Q0FBZ0Y7QUFHaEYsa0VBQXlGO0FBQ3pGLDBDQUE2RTtBQUM3RSw0Q0FBK0U7QUFPL0U7SUFTSSx5QkFBcUIsWUFBNEIsRUFDNUIscUJBQTRDO1FBRDVDLGlCQUFZLEdBQVosWUFBWSxDQUFnQjtRQUM1QiwwQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO1FBUmpFLGdCQUFXLEdBQUcsSUFBSSxzQkFBYyxDQUFDO1FBQ2pDLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFRWixJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQztJQUNyQyxDQUFDO0lBRUQsa0NBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFFBQVEsRUFBRSxDQUFDLEtBQUssQ0FBQztJQUM1RSxDQUFDO0lBQUEsQ0FBQztJQUVGLGtDQUFRLEdBQVI7UUFBQSxpQkFhQztRQVpHLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxlQUFlLEdBQUcsRUFBRSxDQUFDO1FBQzFCLElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQzthQUNoRCxTQUFTLENBQ04sVUFBQSxJQUFJLElBQU8sS0FBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsQ0FBQSxDQUFDLEVBQ2hDLFVBQUEsS0FBSztZQUFNLEtBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQztZQUN2QyxHQUFHLENBQUMsQ0FBZ0IsVUFBZSxFQUFmLEtBQUEsS0FBSyxDQUFDLFNBQVMsRUFBZixjQUFlLEVBQWYsSUFBZTtnQkFBOUIsSUFBSSxPQUFPLFNBQUE7Z0JBQ1osS0FBSSxDQUFDLGVBQWUsSUFBSSxHQUFHLEdBQUcsT0FBTyxDQUFDO2FBQ3pDO1lBQ0QsS0FBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDO1FBQUEsQ0FBQyxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUVNLGdEQUFzQixHQUE3QjtRQUNJLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsbUNBQWUsQ0FBQyxDQUFDO0lBQzlELENBQUM7SUFuQ1EsZUFBZTtRQUwzQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFNBQVM7WUFDbkIsV0FBVyxFQUFFLDBCQUEwQjtZQUN2QyxTQUFTLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQztTQUN6QyxDQUFDO3lDQVVxQyxzQkFBYztZQUNMLDZCQUFxQjtPQVZ4RCxlQUFlLENBb0MzQjtJQUFELHNCQUFDO0NBQUEsQUFwQ0QsSUFvQ0M7QUFwQ1ksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9ICAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQnNNb2RhbFNlcnZpY2UgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tICduZ3gtYm9vdHN0cmFwL21vZGFsJztcbmltcG9ydCB7IEJzTW9kYWxSZWYgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSAnbmd4LWJvb3RzdHJhcC9tb2RhbC9tb2RhbC1vcHRpb25zLmNsYXNzJztcblxuaW1wb3J0IHsgU2lnbkluQ29tcG9uZW50IH0gICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tICcuLi9zaWduLWluL3NpZ24taW4uY29tcG9uZW50JztcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSAnLi4vX21vZGVscy9pbmRleCc7XG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblNlcnZpY2UgfSAgICAgICAgICAgICAgICAgICAgIGZyb20gJy4uL19zZXJ2aWNlcy9pbmRleCc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnc2lnbi11cCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3NpZ24tdXAuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL3NpZ24tdXAuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFNpZ25VcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBzaWduVXBNb2RlbCA9IG5ldyBBdXRoZW50aWNhdGlvbjtcbiAgICBtZXNzYWdlID0gZmFsc2U7XG4gICAgZXJyb3JNZXNzYWdlOiBzdHJpbmc7XG4gICAgZW1haWxNZXNzYWdlOiBzdHJpbmc7XG4gICAgcGFzc3dvcmRNZXNzYWdlOiBzdHJpbmc7XG4gICAgYnNNb2RhbFJlZjogQnNNb2RhbFJlZjtcblxuICAgIGNvbnN0cnVjdG9yKCBwcml2YXRlIG1vZGFsU2VydmljZTogQnNNb2RhbFNlcnZpY2UsXG4gICAgICAgICAgICAgICAgIHByaXZhdGUgYXV0aGVudGljYXRpb25TZXJ2aWNlOiBBdXRoZW50aWNhdGlvblNlcnZpY2UgKSB7XG4gICAgICAgIHRoaXMubW9kYWxTZXJ2aWNlID0gbW9kYWxTZXJ2aWNlO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLnNpZ25VcE1vZGVsWydlbWFpbCddID0gdGhpcy5hdXRoZW50aWNhdGlvblNlcnZpY2UuZ2V0RW1haWwoKS5lbWFpbDtcbiAgICB9O1xuXG4gICAgcmVnaXN0ZXIoKSB7XG4gICAgICAgIHRoaXMubWVzc2FnZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmVtYWlsTWVzc2FnZSA9ICcnO1xuICAgICAgICB0aGlzLnBhc3N3b3JkTWVzc2FnZSA9ICcnO1xuICAgICAgICB0aGlzLmVycm9yTWVzc2FnZSA9ICcnO1xuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9uU2VydmljZS5yZWdpc3Rlcih0aGlzLnNpZ25VcE1vZGVsKVxuICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICBkYXRhICA9PiB7IHRoaXMubWVzc2FnZSA9IHRydWU7fSxcbiAgICAgICAgICAgICAgICBlcnJvciA9PiB7IHRoaXMuZW1haWxNZXNzYWdlID0gZXJyb3IuZW1haWw7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IG1lc3NhZ2Ugb2YgZXJyb3IucGFzc3dvcmQxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhc3N3b3JkTWVzc2FnZSArPSAnICcgKyBtZXNzYWdlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gZXJyb3IuZGV0YWlsO30pO1xuICAgIH1cblxuICAgIHB1YmxpYyBvcGVuTW9kYWxXaXRoQ29tcG9uZW50KCkge1xuICAgICAgICB0aGlzLmJzTW9kYWxSZWYgPSB0aGlzLm1vZGFsU2VydmljZS5zaG93KFNpZ25JbkNvbXBvbmVudCk7XG4gICAgfVxufVxuIl19