"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var modal_options_class_1 = require("ngx-bootstrap/modal/modal-options.class");
var index_1 = require("../_models/index");
var index_2 = require("../_services/index");
var SendNoUserComponent = (function () {
    function SendNoUserComponent(bsModalRef, sendRequestService) {
        this.bsModalRef = bsModalRef;
        this.sendRequestService = sendRequestService;
        this.sendModel = new index_1.Send;
        this.sending = false;
        this.successMessage = false;
        this.sendForm = new forms_1.FormGroup({
            "repeat_receiver": new forms_1.FormControl("", [forms_1.Validators.required, forms_1.Validators.email])
        });
    }
    SendNoUserComponent.prototype.ngOnInit = function () { };
    ;
    SendNoUserComponent.prototype.send = function () {
        var _this = this;
        this.sending = true;
        this.successMessage = false;
        this.errorMessage = '';
        this.sendRequestService.sendMoney(this.sendModel)
            .subscribe(function (data) {
            _this.sending = false;
            _this.successMessage = true;
            _this.sendForm.reset();
        }, function (error) {
            _this.sending = false;
            _this.errorMessage = error.detail;
        });
    };
    SendNoUserComponent = __decorate([
        core_1.Component({
            selector: 'no-user',
            templateUrl: 'send-request-send-no-user.component.html',
            styleUrls: ['send-request-send-no-user.component.css']
        }),
        __metadata("design:paramtypes", [modal_options_class_1.BsModalRef,
            index_2.SendRequestService])
    ], SendNoUserComponent);
    return SendNoUserComponent;
}());
exports.SendNoUserComponent = SendNoUserComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VuZC1yZXF1ZXN0LXNlbmQtbm8tdXNlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzZW5kLXJlcXVlc3Qtc2VuZC1uby11c2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyRTtBQUMzRSx3Q0FBNEU7QUFDNUUsK0VBQXFHO0FBRXJHLDBDQUE4RTtBQUM5RSw0Q0FBZ0Y7QUFRaEY7SUFRSSw2QkFBb0IsVUFBc0IsRUFDckIsa0JBQXNDO1FBRHZDLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDckIsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQVAzRCxjQUFTLEdBQUcsSUFBSSxZQUFJLENBQUM7UUFFckIsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUNoQixtQkFBYyxHQUFHLEtBQUssQ0FBQztRQUtuQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksaUJBQVMsQ0FBQztZQUMxQixpQkFBaUIsRUFBRSxJQUFJLG1CQUFXLENBQUMsRUFBRSxFQUFFLENBQUMsa0JBQVUsQ0FBQyxRQUFRLEVBQUUsa0JBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNsRixDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsc0NBQVEsR0FBUixjQUFhLENBQUM7SUFBQSxDQUFDO0lBRWYsa0NBQUksR0FBSjtRQUFBLGlCQVVDO1FBVEcsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDcEIsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7UUFDNUIsSUFBSSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO2FBQzVDLFNBQVMsQ0FBRSxVQUFBLElBQUk7WUFBTyxLQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztZQUN4QyxLQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztZQUMzQixLQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQUEsQ0FBQyxFQUMzQixVQUFBLEtBQUs7WUFBTSxLQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztZQUM1QixLQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUM7UUFBQSxDQUFDLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBM0JRLG1CQUFtQjtRQUwvQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFNBQVM7WUFDbkIsV0FBVyxFQUFFLDBDQUEwQztZQUN2RCxTQUFTLEVBQUUsQ0FBQyx5Q0FBeUMsQ0FBQztTQUN6RCxDQUFDO3lDQVNrQyxnQ0FBVTtZQUNELDBCQUFrQjtPQVRsRCxtQkFBbUIsQ0E2Qi9CO0lBQUQsMEJBQUM7Q0FBQSxBQTdCRCxJQTZCQztBQTdCWSxrREFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9ICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wsIFZhbGlkYXRvcnN9ICAgICAgICAgIGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEJzTW9kYWxSZWYgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gJ25neC1ib290c3RyYXAvbW9kYWwvbW9kYWwtb3B0aW9ucy5jbGFzcyc7XG5cbmltcG9ydCB7IFNlbmQgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gJy4uL19tb2RlbHMvaW5kZXgnO1xuaW1wb3J0IHsgU2VuZFJlcXVlc3RTZXJ2aWNlIH0gICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSAnLi4vX3NlcnZpY2VzL2luZGV4JztcblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ25vLXVzZXInLFxuICAgIHRlbXBsYXRlVXJsOiAnc2VuZC1yZXF1ZXN0LXNlbmQtbm8tdXNlci5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJ3NlbmQtcmVxdWVzdC1zZW5kLW5vLXVzZXIuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFNlbmROb1VzZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgc2VuZE1vZGVsID0gbmV3IFNlbmQ7XG4gICAgc2VuZEZvcm06IEZvcm1Hcm91cDtcbiAgICBzZW5kaW5nID0gZmFsc2U7XG4gICAgc3VjY2Vzc01lc3NhZ2UgPSBmYWxzZTtcbiAgICBlcnJvck1lc3NhZ2U6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKCBwdWJsaWMgYnNNb2RhbFJlZjogQnNNb2RhbFJlZixcbiAgICAgICAgICAgICAgICAgcHJpdmF0ZSBzZW5kUmVxdWVzdFNlcnZpY2U6IFNlbmRSZXF1ZXN0U2VydmljZSwgKSB7XG4gICAgICAgIHRoaXMuc2VuZEZvcm0gPSBuZXcgRm9ybUdyb3VwKHtcbiAgICAgICAgICAgIFwicmVwZWF0X3JlY2VpdmVyXCI6IG5ldyBGb3JtQ29udHJvbChcIlwiLCBbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5lbWFpbF0pXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkgeyB9O1xuXG4gICAgc2VuZCgpIHtcbiAgICAgICAgdGhpcy5zZW5kaW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zdWNjZXNzTWVzc2FnZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmVycm9yTWVzc2FnZSA9ICcnO1xuICAgICAgICB0aGlzLnNlbmRSZXF1ZXN0U2VydmljZS5zZW5kTW9uZXkodGhpcy5zZW5kTW9kZWwpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKCBkYXRhID0+IHsgIHRoaXMuc2VuZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuc3VjY2Vzc01lc3NhZ2UgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuc2VuZEZvcm0ucmVzZXQoKTt9LFxuICAgICAgICAgICAgZXJyb3IgPT4geyB0aGlzLnNlbmRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLmVycm9yTWVzc2FnZSA9IGVycm9yLmRldGFpbDt9KTtcbiAgICB9XG5cbn1cbiJdfQ==