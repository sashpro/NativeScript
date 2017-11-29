"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var modal_options_class_1 = require("ngx-bootstrap/modal/modal-options.class");
var index_1 = require("../_models/index");
var index_2 = require("../_services/index");
var SendEmailComponent = (function () {
    function SendEmailComponent(bsModalRef, adminService) {
        this.bsModalRef = bsModalRef;
        this.adminService = adminService;
        this.emailModel = new index_1.SendEmail;
        this.emailForm = new forms_1.FormGroup({
            "subject": new forms_1.FormControl("", forms_1.Validators.required),
            "message": new forms_1.FormControl("", forms_1.Validators.required)
        });
    }
    SendEmailComponent.prototype.ngOnInit = function () { };
    ;
    SendEmailComponent.prototype.sendEmail = function () {
        var _this = this;
        this.emailModel.user = this.user;
        this.errorMessage = '';
        this.adminService.sendEmail(this.emailModel)
            .subscribe(function (data) { _this.bsModalRef.hide(); }, function (error) { _this.errorMessage = error.detail; });
    };
    SendEmailComponent = __decorate([
        core_1.Component({
            selector: 'send-email',
            templateUrl: './send-email.component.html',
            styleUrls: ['./send-email.component.css']
        }),
        __metadata("design:paramtypes", [modal_options_class_1.BsModalRef,
            index_2.AdminService])
    ], SendEmailComponent);
    return SendEmailComponent;
}());
exports.SendEmailComponent = SendEmailComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VuZC1lbWFpbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzZW5kLWVtYWlsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyRTtBQUMzRSx3Q0FBNEU7QUFDNUUsK0VBQXFHO0FBRXJHLDBDQUE4RTtBQUM5RSw0Q0FBZ0Y7QUFRaEY7SUFRSSw0QkFBb0IsVUFBc0IsRUFDckIsWUFBMEI7UUFEM0IsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUNyQixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUwvQyxlQUFVLEdBQUcsSUFBSSxpQkFBUyxDQUFDO1FBTXZCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxpQkFBUyxDQUFDO1lBQzNCLFNBQVMsRUFBRSxJQUFJLG1CQUFXLENBQUMsRUFBRSxFQUFFLGtCQUFVLENBQUMsUUFBUSxDQUFDO1lBQ25ELFNBQVMsRUFBRSxJQUFJLG1CQUFXLENBQUMsRUFBRSxFQUFFLGtCQUFVLENBQUMsUUFBUSxDQUFDO1NBQ3RELENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxxQ0FBUSxHQUFSLGNBQWEsQ0FBQztJQUFBLENBQUM7SUFFZixzQ0FBUyxHQUFUO1FBQUEsaUJBTUM7UUFMRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7YUFDdkMsU0FBUyxDQUFFLFVBQUEsSUFBSSxJQUFNLEtBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQSxDQUFDLEVBQzlDLFVBQUEsS0FBSyxJQUFNLEtBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFBLENBQUMsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUF4QlEsa0JBQWtCO1FBTDlCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsWUFBWTtZQUN0QixXQUFXLEVBQUUsNkJBQTZCO1lBQzFDLFNBQVMsRUFBRSxDQUFDLDRCQUE0QixDQUFDO1NBQzVDLENBQUM7eUNBU2tDLGdDQUFVO1lBQ1Asb0JBQVk7T0FUdEMsa0JBQWtCLENBeUI5QjtJQUFELHlCQUFDO0NBQUEsQUF6QkQsSUF5QkM7QUF6QlksZ0RBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBWYWxpZGF0b3JzfSAgICAgICAgICBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBCc01vZGFsUmVmIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tICduZ3gtYm9vdHN0cmFwL21vZGFsL21vZGFsLW9wdGlvbnMuY2xhc3MnO1xuXG5pbXBvcnQgeyBTZW5kRW1haWwgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tICcuLi9fbW9kZWxzL2luZGV4JztcbmltcG9ydCB7IEFkbWluU2VydmljZSB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gJy4uL19zZXJ2aWNlcy9pbmRleCc7XG5cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdzZW5kLWVtYWlsJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vc2VuZC1lbWFpbC5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vc2VuZC1lbWFpbC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU2VuZEVtYWlsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIHVzZXI6IHN0cmluZztcbiAgICBmdWxsX25hbWU6IHN0cmluZztcbiAgICBlbWFpbE1vZGVsID0gbmV3IFNlbmRFbWFpbDtcbiAgICBlbWFpbEZvcm06IEZvcm1Hcm91cDtcbiAgICBlcnJvck1lc3NhZ2U6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKCBwdWJsaWMgYnNNb2RhbFJlZjogQnNNb2RhbFJlZixcbiAgICAgICAgICAgICAgICAgcHJpdmF0ZSBhZG1pblNlcnZpY2U6IEFkbWluU2VydmljZSwgKSB7XG4gICAgICAgIHRoaXMuZW1haWxGb3JtID0gbmV3IEZvcm1Hcm91cCh7XG4gICAgICAgICAgICBcInN1YmplY3RcIjogbmV3IEZvcm1Db250cm9sKFwiXCIsIFZhbGlkYXRvcnMucmVxdWlyZWQpLFxuICAgICAgICAgICAgXCJtZXNzYWdlXCI6IG5ldyBGb3JtQ29udHJvbChcIlwiLCBWYWxpZGF0b3JzLnJlcXVpcmVkKVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHsgfTtcblxuICAgIHNlbmRFbWFpbCgpIHtcbiAgICAgICAgdGhpcy5lbWFpbE1vZGVsLnVzZXIgPSB0aGlzLnVzZXI7XG4gICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gJyc7XG4gICAgICAgIHRoaXMuYWRtaW5TZXJ2aWNlLnNlbmRFbWFpbCh0aGlzLmVtYWlsTW9kZWwpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKCBkYXRhID0+IHsgdGhpcy5ic01vZGFsUmVmLmhpZGUoKTt9LFxuICAgICAgICAgICAgZXJyb3IgPT4geyB0aGlzLmVycm9yTWVzc2FnZSA9IGVycm9yLmRldGFpbDt9KTtcbiAgICB9XG59XG4iXX0=