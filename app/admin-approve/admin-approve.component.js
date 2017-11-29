"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var modal_1 = require("ngx-bootstrap/modal");
var index_1 = require("../_services/index");
var admin_user_information_component_1 = require("../admin-user-information/admin-user-information.component");
var send_email_component_1 = require("../send-email/send-email.component");
var AdminApproveComponent = (function () {
    function AdminApproveComponent(approveService, adminService, modalService) {
        this.approveService = approveService;
        this.adminService = adminService;
        this.modalService = modalService;
        this.activeTransactions = new Array();
        this.messageSuccess = false;
    }
    AdminApproveComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.approveService.getActiveTransactions()
            .subscribe(function (data) { _this.activeTransactions = data; });
    };
    AdminApproveComponent.prototype.openUserInfoModal = function (pk) {
        var _this = this;
        this.userInfoModal = this.modalService.show(admin_user_information_component_1.AdminUserInfoComponent);
        this.adminService.getUser(pk)
            .subscribe(function (data) { _this.userInfoModal.content.user = data; });
        this.adminService.getUserWallets(pk)
            .subscribe(function (data) { _this.userInfoModal.content.wallets = data; });
    };
    AdminApproveComponent.prototype.acceptTransaction = function (hash) {
        var _this = this;
        this.messageSuccess = false;
        this.messageError = "";
        this.approveService.acceptTransaction(hash)
            .subscribe(function (data) { _this.messageSuccess = true; }, function (error) { _this.messageError = error.detail; });
    };
    AdminApproveComponent.prototype.approveTransaction = function (hash) {
        var _this = this;
        this.messageSuccess = false;
        this.messageError = "";
        this.approveService.approveTransaction(hash)
            .subscribe(function (data) { _this.messageSuccess = true; }, function (error) { _this.messageError = error.detail; });
    };
    AdminApproveComponent.prototype.declineTransaction = function (hash) {
        var _this = this;
        this.messageSuccess = false;
        this.messageError = "";
        this.approveService.declineTransaction(hash)
            .subscribe(function (data) { _this.messageSuccess = true; }, function (error) { _this.messageError = error.detail; });
    };
    AdminApproveComponent.prototype.openSnedMessageModal = function (pk, full_name) {
        this.sendEmailModal = this.modalService.show(send_email_component_1.SendEmailComponent);
        this.sendEmailModal.content.user = pk;
        this.sendEmailModal.content.full_name = full_name;
    };
    AdminApproveComponent = __decorate([
        core_1.Component({
            selector: 'admin-approve',
            templateUrl: './admin-approve.component.html',
            styleUrls: ['./admin-approve.component.css']
        }),
        __metadata("design:paramtypes", [index_1.ApproveService,
            index_1.AdminService,
            modal_1.BsModalService])
    ], AdminApproveComponent);
    return AdminApproveComponent;
}());
exports.AdminApproveComponent = AdminApproveComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRtaW4tYXBwcm92ZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhZG1pbi1hcHByb3ZlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyRTtBQUMzRSw2Q0FBaUY7QUFLakYsNENBQWdGO0FBRWhGLCtHQUF3SDtBQUN4SCwyRUFBZ0c7QUFRaEc7SUFRSSwrQkFBcUIsY0FBOEIsRUFDOUIsWUFBMEIsRUFDMUIsWUFBNEI7UUFGNUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLGlCQUFZLEdBQVosWUFBWSxDQUFnQjtRQVJqRCx1QkFBa0IsR0FBRyxJQUFJLEtBQUssRUFBZSxDQUFDO1FBRzlDLG1CQUFjLEdBQUcsS0FBSyxDQUFDO0lBS2dDLENBQUM7SUFFeEQsd0NBQVEsR0FBUjtRQUFBLGlCQUdDO1FBRkcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxxQkFBcUIsRUFBRTthQUN0QyxTQUFTLENBQUMsVUFBQSxJQUFJLElBQU0sS0FBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxDQUFBLENBQUMsQ0FBQyxDQUFDO0lBQy9ELENBQUM7SUFFTSxpREFBaUIsR0FBeEIsVUFBeUIsRUFBVTtRQUFuQyxpQkFNQztRQUxHLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMseURBQXNCLENBQUMsQ0FBQztRQUNwRSxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7YUFDeEIsU0FBUyxDQUFDLFVBQUEsSUFBSSxJQUFNLEtBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQSxDQUFDLENBQUMsQ0FBQztRQUNuRSxJQUFJLENBQUMsWUFBWSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUM7YUFDL0IsU0FBUyxDQUFDLFVBQUEsSUFBSSxJQUFNLEtBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsQ0FBQSxDQUFDLENBQUMsQ0FBQztJQUMxRSxDQUFDO0lBRUQsaURBQWlCLEdBQWpCLFVBQW1CLElBQVk7UUFBL0IsaUJBTUM7UUFMRyxJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztRQUM1QixJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsY0FBYyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQzthQUN0QyxTQUFTLENBQUUsVUFBQSxJQUFJLElBQU0sS0FBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsQ0FBQSxDQUFDLEVBQ3RDLFVBQUEsS0FBSyxJQUFNLEtBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFBLENBQUMsQ0FBQyxDQUFDO0lBQ25FLENBQUM7SUFFRCxrREFBa0IsR0FBbEIsVUFBb0IsSUFBWTtRQUFoQyxpQkFNQztRQUxHLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO1FBQzVCLElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxjQUFjLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDO2FBQ3ZDLFNBQVMsQ0FBRSxVQUFBLElBQUksSUFBTSxLQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxDQUFBLENBQUMsRUFDdEMsVUFBQSxLQUFLLElBQU0sS0FBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUEsQ0FBQyxDQUFDLENBQUM7SUFDbkUsQ0FBQztJQUVELGtEQUFrQixHQUFsQixVQUFvQixJQUFZO1FBQWhDLGlCQU1DO1FBTEcsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7UUFDNUIsSUFBSSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUM7YUFDdkMsU0FBUyxDQUFFLFVBQUEsSUFBSSxJQUFNLEtBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLENBQUEsQ0FBQyxFQUN0QyxVQUFBLEtBQUssSUFBTSxLQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQSxDQUFDLENBQUMsQ0FBQztJQUNuRSxDQUFDO0lBRU0sb0RBQW9CLEdBQTNCLFVBQTRCLEVBQVUsRUFBRSxTQUFpQjtRQUNyRCxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLHlDQUFrQixDQUFDLENBQUM7UUFDakUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUN0QyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO0lBQ3RELENBQUM7SUFyRFEscUJBQXFCO1FBTGpDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsZUFBZTtZQUN6QixXQUFXLEVBQUUsZ0NBQWdDO1lBQzdDLFNBQVMsRUFBRSxDQUFDLCtCQUErQixDQUFDO1NBQy9DLENBQUM7eUNBU3VDLHNCQUFjO1lBQ2hCLG9CQUFZO1lBQ1osc0JBQWM7T0FWeEMscUJBQXFCLENBc0RqQztJQUFELDRCQUFDO0NBQUEsQUF0REQsSUFzREM7QUF0RFksc0RBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCc01vZGFsU2VydmljZSB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tICduZ3gtYm9vdHN0cmFwL21vZGFsJztcbmltcG9ydCB7IEJzTW9kYWxSZWYgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gJ25neC1ib290c3RyYXAvbW9kYWwvbW9kYWwtb3B0aW9ucy5jbGFzcyc7XG5cblxuaW1wb3J0IHsgVHJhbnNhY3Rpb24gfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSAnLi4vX21vZGVscy9pbmRleCc7XG5pbXBvcnQgeyBBcHByb3ZlU2VydmljZSwgQWRtaW5TZXJ2aWNlIH0gICAgICAgICAgICAgICBmcm9tICcuLi9fc2VydmljZXMvaW5kZXgnO1xuXG5pbXBvcnQgeyBBZG1pblVzZXJJbmZvQ29tcG9uZW50IH0gICAgICAgICAgICAgICAgICAgICBmcm9tICcuLi9hZG1pbi11c2VyLWluZm9ybWF0aW9uL2FkbWluLXVzZXItaW5mb3JtYXRpb24uY29tcG9uZW50JztcbmltcG9ydCB7IFNlbmRFbWFpbENvbXBvbmVudCB9ICAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gJy4uL3NlbmQtZW1haWwvc2VuZC1lbWFpbC5jb21wb25lbnQnO1xuXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnYWRtaW4tYXBwcm92ZScsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2FkbWluLWFwcHJvdmUuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL2FkbWluLWFwcHJvdmUuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEFkbWluQXBwcm92ZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBhY3RpdmVUcmFuc2FjdGlvbnMgPSBuZXcgQXJyYXk8VHJhbnNhY3Rpb24+KCk7XG4gICAgdXNlckluZm9Nb2RhbDogQnNNb2RhbFJlZjtcbiAgICBzZW5kRW1haWxNb2RhbDogQnNNb2RhbFJlZjtcbiAgICBtZXNzYWdlU3VjY2VzcyA9IGZhbHNlO1xuICAgIG1lc3NhZ2VFcnJvcjogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoIHByaXZhdGUgYXBwcm92ZVNlcnZpY2U6IEFwcHJvdmVTZXJ2aWNlLFxuICAgICAgICAgICAgICAgICBwcml2YXRlIGFkbWluU2VydmljZTogQWRtaW5TZXJ2aWNlLFxuICAgICAgICAgICAgICAgICBwcml2YXRlIG1vZGFsU2VydmljZTogQnNNb2RhbFNlcnZpY2UsICkgeyB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5hcHByb3ZlU2VydmljZS5nZXRBY3RpdmVUcmFuc2FjdGlvbnMoKVxuICAgICAgICAgICAgLnN1YnNjcmliZShkYXRhID0+IHsgdGhpcy5hY3RpdmVUcmFuc2FjdGlvbnMgPSBkYXRhO30pO1xuICAgIH1cblxuICAgIHB1YmxpYyBvcGVuVXNlckluZm9Nb2RhbChwazogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMudXNlckluZm9Nb2RhbCA9IHRoaXMubW9kYWxTZXJ2aWNlLnNob3coQWRtaW5Vc2VySW5mb0NvbXBvbmVudCk7XG4gICAgICAgIHRoaXMuYWRtaW5TZXJ2aWNlLmdldFVzZXIocGspXG4gICAgICAgICAgICAuc3Vic2NyaWJlKGRhdGEgPT4geyB0aGlzLnVzZXJJbmZvTW9kYWwuY29udGVudC51c2VyID0gZGF0YTt9KTtcbiAgICAgICAgdGhpcy5hZG1pblNlcnZpY2UuZ2V0VXNlcldhbGxldHMocGspXG4gICAgICAgICAgICAuc3Vic2NyaWJlKGRhdGEgPT4geyB0aGlzLnVzZXJJbmZvTW9kYWwuY29udGVudC53YWxsZXRzID0gZGF0YTt9KTtcbiAgICB9XG5cbiAgICBhY2NlcHRUcmFuc2FjdGlvbiggaGFzaDogc3RyaW5nICkge1xuICAgICAgICB0aGlzLm1lc3NhZ2VTdWNjZXNzID0gZmFsc2U7XG4gICAgICAgIHRoaXMubWVzc2FnZUVycm9yID0gXCJcIjtcbiAgICAgICAgdGhpcy5hcHByb3ZlU2VydmljZS5hY2NlcHRUcmFuc2FjdGlvbihoYXNoKVxuICAgICAgICAgICAgLnN1YnNjcmliZSggZGF0YSA9PiB7IHRoaXMubWVzc2FnZVN1Y2Nlc3MgPSB0cnVlO30sXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvciA9PiB7IHRoaXMubWVzc2FnZUVycm9yID0gZXJyb3IuZGV0YWlsO30pO1xuICAgIH1cblxuICAgIGFwcHJvdmVUcmFuc2FjdGlvbiggaGFzaDogc3RyaW5nICkge1xuICAgICAgICB0aGlzLm1lc3NhZ2VTdWNjZXNzID0gZmFsc2U7XG4gICAgICAgIHRoaXMubWVzc2FnZUVycm9yID0gXCJcIjtcbiAgICAgICAgdGhpcy5hcHByb3ZlU2VydmljZS5hcHByb3ZlVHJhbnNhY3Rpb24oaGFzaClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoIGRhdGEgPT4geyB0aGlzLm1lc3NhZ2VTdWNjZXNzID0gdHJ1ZTt9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IgPT4geyB0aGlzLm1lc3NhZ2VFcnJvciA9IGVycm9yLmRldGFpbDt9KTtcbiAgICB9XG5cbiAgICBkZWNsaW5lVHJhbnNhY3Rpb24oIGhhc2g6IHN0cmluZyApIHtcbiAgICAgICAgdGhpcy5tZXNzYWdlU3VjY2VzcyA9IGZhbHNlO1xuICAgICAgICB0aGlzLm1lc3NhZ2VFcnJvciA9IFwiXCI7XG4gICAgICAgIHRoaXMuYXBwcm92ZVNlcnZpY2UuZGVjbGluZVRyYW5zYWN0aW9uKGhhc2gpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKCBkYXRhID0+IHsgdGhpcy5tZXNzYWdlU3VjY2VzcyA9IHRydWU7fSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yID0+IHsgdGhpcy5tZXNzYWdlRXJyb3IgPSBlcnJvci5kZXRhaWw7fSk7XG4gICAgfVxuXG4gICAgcHVibGljIG9wZW5TbmVkTWVzc2FnZU1vZGFsKHBrOiBzdHJpbmcsIGZ1bGxfbmFtZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuc2VuZEVtYWlsTW9kYWwgPSB0aGlzLm1vZGFsU2VydmljZS5zaG93KFNlbmRFbWFpbENvbXBvbmVudCk7XG4gICAgICAgIHRoaXMuc2VuZEVtYWlsTW9kYWwuY29udGVudC51c2VyID0gcGs7XG4gICAgICAgIHRoaXMuc2VuZEVtYWlsTW9kYWwuY29udGVudC5mdWxsX25hbWUgPSBmdWxsX25hbWU7XG4gICAgfVxufVxuIl19