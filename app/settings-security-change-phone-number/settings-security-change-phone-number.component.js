"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var modal_options_class_1 = require("ngx-bootstrap/modal/modal-options.class");
var index_1 = require("../_services/index");
var index_2 = require("../_models/index");
var SettingsSecurityChangePhoneNumberComponent = (function () {
    function SettingsSecurityChangePhoneNumberComponent(bsModalRef, userService) {
        this.bsModalRef = bsModalRef;
        this.userService = userService;
        this.phoneModel = new index_2.ChangePhone;
        this.phoneForm = new forms_1.FormGroup({
            "mfa_code": new forms_1.FormControl("", forms_1.Validators.required)
        });
    }
    SettingsSecurityChangePhoneNumberComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.phoneModel.phone_number = _this.phone;
            _this.userService.updateUserPhone(_this.phoneModel)
                .subscribe(function (data) { }, function (error) { _this.errorMessage = error.detail; });
        }, 500);
    };
    SettingsSecurityChangePhoneNumberComponent.prototype.changePhone = function () {
        var _this = this;
        this.errorMessage = '';
        this.userService.updateUserPhone(this.phoneModel)
            .subscribe(function (data) { _this.bsModalRef.hide(); }, function (error) { _this.errorMessage = error.detail; });
    };
    SettingsSecurityChangePhoneNumberComponent = __decorate([
        core_1.Component({
            selector: 'settings-security-change-phone-number',
            templateUrl: 'settings-security-change-phone-number.component.html',
            styleUrls: ['settings-security-change-phone-number.component.css']
        }),
        __metadata("design:paramtypes", [modal_options_class_1.BsModalRef,
            index_1.UserService])
    ], SettingsSecurityChangePhoneNumberComponent);
    return SettingsSecurityChangePhoneNumberComponent;
}());
exports.SettingsSecurityChangePhoneNumberComponent = SettingsSecurityChangePhoneNumberComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZ3Mtc2VjdXJpdHktY2hhbmdlLXBob25lLW51bWJlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzZXR0aW5ncy1zZWN1cml0eS1jaGFuZ2UtcGhvbmUtbnVtYmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyRTtBQUMzRSx3Q0FBNEU7QUFDNUUsK0VBQXFHO0FBRXJHLDRDQUFnRjtBQUNoRiwwQ0FBOEU7QUFROUU7SUFPSSxvREFBb0IsVUFBc0IsRUFDckIsV0FBd0I7UUFEekIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUNyQixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUw3QyxlQUFVLEdBQUcsSUFBSSxtQkFBVyxDQUFDO1FBTXpCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxpQkFBUyxDQUFDO1lBQzNCLFVBQVUsRUFBRSxJQUFJLG1CQUFXLENBQUMsRUFBRSxFQUFFLGtCQUFVLENBQUMsUUFBUSxDQUFDO1NBQ3ZELENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCw2REFBUSxHQUFSO1FBQUEsaUJBTUM7UUFMRyxVQUFVLENBQUM7WUFBUSxLQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksR0FBRyxLQUFJLENBQUMsS0FBSyxDQUFDO1lBQ3pELEtBQUksQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLEtBQUksQ0FBQyxVQUFVLENBQUM7aUJBQzVDLFNBQVMsQ0FBQyxVQUFBLElBQUksSUFBTSxDQUFDLEVBQ2xCLFVBQUEsS0FBSyxJQUFNLEtBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFBLENBQUMsQ0FBQyxDQUFDO1FBQzNELENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNaLENBQUM7SUFFRCxnRUFBVyxHQUFYO1FBQUEsaUJBS0M7UUFKRyxJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO2FBQzVDLFNBQVMsQ0FBQyxVQUFBLElBQUksSUFBTSxLQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUEsQ0FBQyxFQUN6QyxVQUFBLEtBQUssSUFBTSxLQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQSxDQUFDLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBM0JRLDBDQUEwQztRQUx0RCxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLHVDQUF1QztZQUNqRCxXQUFXLEVBQUUsc0RBQXNEO1lBQ25FLFNBQVMsRUFBRSxDQUFDLHFEQUFxRCxDQUFDO1NBQ3JFLENBQUM7eUNBUWtDLGdDQUFVO1lBQ1IsbUJBQVc7T0FScEMsMENBQTBDLENBNkJ0RDtJQUFELGlEQUFDO0NBQUEsQUE3QkQsSUE2QkM7QUE3QlksZ0dBQTBDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBWYWxpZGF0b3JzfSAgICAgICAgICBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBCc01vZGFsUmVmIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tICduZ3gtYm9vdHN0cmFwL21vZGFsL21vZGFsLW9wdGlvbnMuY2xhc3MnO1xuXG5pbXBvcnQgeyBVc2VyU2VydmljZSB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tICcuLi9fc2VydmljZXMvaW5kZXgnO1xuaW1wb3J0IHsgQ2hhbmdlUGhvbmUgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSAnLi4vX21vZGVscy9pbmRleCc7XG5cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdzZXR0aW5ncy1zZWN1cml0eS1jaGFuZ2UtcGhvbmUtbnVtYmVyJyxcbiAgICB0ZW1wbGF0ZVVybDogJ3NldHRpbmdzLXNlY3VyaXR5LWNoYW5nZS1waG9uZS1udW1iZXIuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWydzZXR0aW5ncy1zZWN1cml0eS1jaGFuZ2UtcGhvbmUtbnVtYmVyLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTZXR0aW5nc1NlY3VyaXR5Q2hhbmdlUGhvbmVOdW1iZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgcGhvbmU6IG51bWJlcjtcbiAgICBwaG9uZU1vZGVsID0gbmV3IENoYW5nZVBob25lO1xuICAgIHBob25lRm9ybTogRm9ybUdyb3VwO1xuICAgIGVycm9yTWVzc2FnZTogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoIHB1YmxpYyBic01vZGFsUmVmOiBCc01vZGFsUmVmLFxuICAgICAgICAgICAgICAgICBwcml2YXRlIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSkge1xuICAgICAgICB0aGlzLnBob25lRm9ybSA9IG5ldyBGb3JtR3JvdXAoe1xuICAgICAgICAgICAgXCJtZmFfY29kZVwiOiBuZXcgRm9ybUNvbnRyb2woXCJcIiwgVmFsaWRhdG9ycy5yZXF1aXJlZClcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4geyB0aGlzLnBob25lTW9kZWwucGhvbmVfbnVtYmVyID0gdGhpcy5waG9uZTtcbiAgICAgICAgICAgIHRoaXMudXNlclNlcnZpY2UudXBkYXRlVXNlclBob25lKHRoaXMucGhvbmVNb2RlbClcbiAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKGRhdGEgPT4geyB9LFxuICAgICAgICAgICAgICAgICAgICBlcnJvciA9PiB7IHRoaXMuZXJyb3JNZXNzYWdlID0gZXJyb3IuZGV0YWlsO30pO1xuICAgICAgICB9LCA1MDApO1xuICAgIH1cblxuICAgIGNoYW5nZVBob25lKCkge1xuICAgICAgICB0aGlzLmVycm9yTWVzc2FnZSA9ICcnO1xuICAgICAgICB0aGlzLnVzZXJTZXJ2aWNlLnVwZGF0ZVVzZXJQaG9uZSh0aGlzLnBob25lTW9kZWwpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKGRhdGEgPT4geyB0aGlzLmJzTW9kYWxSZWYuaGlkZSgpO30sXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4geyB0aGlzLmVycm9yTWVzc2FnZSA9IGVycm9yLmRldGFpbDt9KTtcbiAgICB9XG5cbn1cbiJdfQ==