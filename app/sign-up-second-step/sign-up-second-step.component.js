"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var modal_options_class_1 = require("ngx-bootstrap/modal/modal-options.class");
var index_1 = require("../_services/index");
var index_2 = require("../_services/index");
var SignUpSecondStepComponent = (function () {
    function SignUpSecondStepComponent(bsModalRef, router, globalStorageService, authenticationService) {
        this.bsModalRef = bsModalRef;
        this.router = router;
        this.globalStorageService = globalStorageService;
        this.authenticationService = authenticationService;
        this.model = {};
        this.model_copy = {};
        this.country_list = [];
        this.USAid = 238;
    }
    SignUpSecondStepComponent.prototype.ngOnInit = function () {
        this.country_list = this.globalStorageService.getCountryList();
        this.model['country'] = this.country_list[this.USAid].pk;
        this.code = '+' + this.country_list[this.USAid].phone;
    };
    SignUpSecondStepComponent.prototype.changCountry = function (country_index) {
        this.model['country'] = this.country_list[country_index].pk;
        this.code = '+' + this.country_list[country_index].phone;
        if (this.code == '+380')
            this.code = '+38';
    };
    SignUpSecondStepComponent.prototype.registrationSecondStep = function () {
        var _this = this;
        this.model_copy = Object.assign({}, this.model);
        this.model_copy['phone'] = (this.code + this.model['phone']).replace(/\D/g, '');
        this.authenticationService.registrationSecondStep(this.model_copy)
            .subscribe(function (data) {
            _this.router.navigate(['/']);
            _this.bsModalRef.hide();
        });
    };
    SignUpSecondStepComponent = __decorate([
        core_1.Component({
            selector: 'sign-up-second-step',
            templateUrl: './sign-up-second-step.component.html',
            styleUrls: ['./sign-up-second-step.component.css']
        }),
        __metadata("design:paramtypes", [modal_options_class_1.BsModalRef,
            router_1.Router,
            index_2.GlobalStorageService,
            index_1.AuthenticationService])
    ], SignUpSecondStepComponent);
    return SignUpSecondStepComponent;
}());
exports.SignUpSecondStepComponent = SignUpSecondStepComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbi11cC1zZWNvbmQtc3RlcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzaWduLXVwLXNlY29uZC1zdGVwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUE2RDtBQUM3RCwwQ0FBK0Q7QUFDL0QsK0VBQXVGO0FBRXZGLDRDQUFrRTtBQUNsRSw0Q0FBd0U7QUFPeEU7SUFVSSxtQ0FBb0IsVUFBc0IsRUFDckIsTUFBYyxFQUNkLG9CQUEwQyxFQUMxQyxxQkFBNEM7UUFIN0MsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUNyQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQUMxQywwQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO1FBWGpFLFVBQUssR0FBUSxFQUFFLENBQUM7UUFDaEIsZUFBVSxHQUFRLEVBQUUsQ0FBQztRQUVyQixpQkFBWSxHQUFRLEVBQUUsQ0FBQztRQUV2QixVQUFLLEdBQUcsR0FBRyxDQUFDO0lBTXlELENBQUM7SUFFdEUsNENBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQy9ELElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQ3pELElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUMxRCxDQUFDO0lBRUQsZ0RBQVksR0FBWixVQUFhLGFBQWE7UUFDdEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUM1RCxJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUN6RCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLE1BQU0sQ0FBQztZQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO0lBRy9DLENBQUM7SUFFRCwwREFBc0IsR0FBdEI7UUFBQSxpQkFTQztRQVJHLElBQUksQ0FBQyxVQUFVLEdBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLEdBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2hGLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO2FBQzdELFNBQVMsQ0FDTixVQUFBLElBQUk7WUFDQSxLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDNUIsS0FBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUMzQixDQUFDLENBQUMsQ0FBQztJQUNmLENBQUM7SUF0Q1EseUJBQXlCO1FBTHJDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUscUJBQXFCO1lBQy9CLFdBQVcsRUFBRSxzQ0FBc0M7WUFDbkQsU0FBUyxFQUFFLENBQUMscUNBQXFDLENBQUM7U0FDckQsQ0FBQzt5Q0FXa0MsZ0NBQVU7WUFDYixlQUFNO1lBQ1EsNEJBQW9CO1lBQ25CLDZCQUFxQjtPQWJ4RCx5QkFBeUIsQ0F3Q3JDO0lBQUQsZ0NBQUM7Q0FBQSxBQXhDRCxJQXdDQztBQXhDWSw4REFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9ICAgICAgICAgICAgZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSAgICAgICAgICAgICAgICAgICAgICAgZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEJzTW9kYWxSZWYgfSAgICAgICAgICAgICAgICAgICBmcm9tICduZ3gtYm9vdHN0cmFwL21vZGFsL21vZGFsLW9wdGlvbnMuY2xhc3MnO1xuXG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblNlcnZpY2UgfSAgICAgICAgZnJvbSAnLi4vX3NlcnZpY2VzL2luZGV4JztcbmltcG9ydCB7IEdsb2JhbFN0b3JhZ2VTZXJ2aWNlIH0gICAgICAgICAgICAgICBmcm9tICcuLi9fc2VydmljZXMvaW5kZXgnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3NpZ24tdXAtc2Vjb25kLXN0ZXAnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9zaWduLXVwLXNlY29uZC1zdGVwLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9zaWduLXVwLXNlY29uZC1zdGVwLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTaWduVXBTZWNvbmRTdGVwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIG1vZGVsOiBhbnkgPSB7fTtcbiAgICBtb2RlbF9jb3B5OiBhbnkgPSB7fTtcbiAgICBlbWFpbDogc3RyaW5nO1xuICAgIGNvdW50cnlfbGlzdDogYW55ID0gW107XG4gICAgY29kZTogYW55O1xuICAgIFVTQWlkID0gMjM4O1xuXG5cbiAgICBjb25zdHJ1Y3RvciggcHVibGljIGJzTW9kYWxSZWY6IEJzTW9kYWxSZWYsXG4gICAgICAgICAgICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgICAgICAgICAgIHByaXZhdGUgZ2xvYmFsU3RvcmFnZVNlcnZpY2U6IEdsb2JhbFN0b3JhZ2VTZXJ2aWNlLFxuICAgICAgICAgICAgICAgICBwcml2YXRlIGF1dGhlbnRpY2F0aW9uU2VydmljZTogQXV0aGVudGljYXRpb25TZXJ2aWNlKSB7IH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmNvdW50cnlfbGlzdCA9IHRoaXMuZ2xvYmFsU3RvcmFnZVNlcnZpY2UuZ2V0Q291bnRyeUxpc3QoKTtcbiAgICAgICAgdGhpcy5tb2RlbFsnY291bnRyeSddID0gdGhpcy5jb3VudHJ5X2xpc3RbdGhpcy5VU0FpZF0ucGs7XG4gICAgICAgIHRoaXMuY29kZSA9ICcrJyArIHRoaXMuY291bnRyeV9saXN0W3RoaXMuVVNBaWRdLnBob25lO1xuICAgIH1cblxuICAgIGNoYW5nQ291bnRyeShjb3VudHJ5X2luZGV4KSB7XG4gICAgICAgIHRoaXMubW9kZWxbJ2NvdW50cnknXSA9IHRoaXMuY291bnRyeV9saXN0W2NvdW50cnlfaW5kZXhdLnBrO1xuICAgICAgICB0aGlzLmNvZGUgPSAnKycgKyB0aGlzLmNvdW50cnlfbGlzdFtjb3VudHJ5X2luZGV4XS5waG9uZTtcbiAgICAgICAgaWYgKHRoaXMuY29kZSA9PSAnKzM4MCcpIHRoaXMuY29kZSA9ICcrMzgnO1xuXG5cbiAgICB9XG5cbiAgICByZWdpc3RyYXRpb25TZWNvbmRTdGVwKCkge1xuICAgICAgICB0aGlzLm1vZGVsX2NvcHkgPSAgT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5tb2RlbCk7XG4gICAgICAgIHRoaXMubW9kZWxfY29weVsncGhvbmUnXSAgPSAodGhpcy5jb2RlICsgdGhpcy5tb2RlbFsncGhvbmUnXSkucmVwbGFjZSgvXFxEL2csJycpO1xuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9uU2VydmljZS5yZWdpc3RyYXRpb25TZWNvbmRTdGVwKHRoaXMubW9kZWxfY29weSlcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnLyddKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ic01vZGFsUmVmLmhpZGUoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICB9XG5cbn1cbiJdfQ==