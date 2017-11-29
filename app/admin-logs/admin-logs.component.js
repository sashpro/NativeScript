"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var modal_1 = require("ngx-bootstrap/modal");
var index_1 = require("../_services/index");
var admin_user_information_component_1 = require("../admin-user-information/admin-user-information.component");
var AdminLogsComponent = (function () {
    function AdminLogsComponent(adminService, modalService) {
        this.adminService = adminService;
        this.modalService = modalService;
    }
    AdminLogsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.adminService.getUsersTransactions()
            .subscribe(function (data) { _this.transactions = data; });
    };
    AdminLogsComponent.prototype.openUserInfoModal = function (pk) {
        var _this = this;
        this.userInfoModal = this.modalService.show(admin_user_information_component_1.AdminUserInfoComponent);
        this.adminService.getUser(pk)
            .subscribe(function (data) { _this.userInfoModal.content.user = data; });
        this.adminService.getUserWallets(pk)
            .subscribe(function (data) { _this.userInfoModal.content.wallets = data; });
    };
    AdminLogsComponent = __decorate([
        core_1.Component({
            selector: 'admin-logs',
            templateUrl: 'admin-logs.component.html',
            styleUrls: ['admin-logs.component.css']
        }),
        __metadata("design:paramtypes", [index_1.AdminService,
            modal_1.BsModalService])
    ], AdminLogsComponent);
    return AdminLogsComponent;
}());
exports.AdminLogsComponent = AdminLogsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRtaW4tbG9ncy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhZG1pbi1sb2dzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyRTtBQUMzRSw2Q0FBaUY7QUFJakYsNENBQWdGO0FBRWhGLCtHQUF3SDtBQVF4SDtJQUtJLDRCQUFxQixZQUEwQixFQUMxQixZQUE0QjtRQUQ1QixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQixpQkFBWSxHQUFaLFlBQVksQ0FBZ0I7SUFBTSxDQUFDO0lBRXhELHFDQUFRLEdBQVI7UUFBQSxpQkFHQztRQUZHLElBQUksQ0FBQyxZQUFZLENBQUMsb0JBQW9CLEVBQUU7YUFDbkMsU0FBUyxDQUFDLFVBQUEsSUFBSSxJQUFNLEtBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLENBQUEsQ0FBQyxDQUFDLENBQUM7SUFDekQsQ0FBQztJQUVNLDhDQUFpQixHQUF4QixVQUF5QixFQUFVO1FBQW5DLGlCQU1DO1FBTEcsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyx5REFBc0IsQ0FBQyxDQUFDO1FBQ3BFLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQzthQUN4QixTQUFTLENBQUMsVUFBQSxJQUFJLElBQU0sS0FBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFBLENBQUMsQ0FBQyxDQUFDO1FBQ25FLElBQUksQ0FBQyxZQUFZLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQzthQUMvQixTQUFTLENBQUMsVUFBQSxJQUFJLElBQU0sS0FBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxDQUFBLENBQUMsQ0FBQyxDQUFDO0lBQzFFLENBQUM7SUFuQlEsa0JBQWtCO1FBTDlCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsWUFBWTtZQUN0QixXQUFXLEVBQUUsMkJBQTJCO1lBQ3hDLFNBQVMsRUFBRSxDQUFDLDBCQUEwQixDQUFDO1NBQzFDLENBQUM7eUNBTXFDLG9CQUFZO1lBQ1osc0JBQWM7T0FOeEMsa0JBQWtCLENBcUI5QjtJQUFELHlCQUFDO0NBQUEsQUFyQkQsSUFxQkM7QUFyQlksZ0RBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIH0gICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCc01vZGFsU2VydmljZSB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tICduZ3gtYm9vdHN0cmFwL21vZGFsJztcbmltcG9ydCB7IEJzTW9kYWxSZWYgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gJ25neC1ib290c3RyYXAvbW9kYWwvbW9kYWwtb3B0aW9ucy5jbGFzcyc7XG5cbmltcG9ydCB7IFRyYW5zYWN0aW9uSGlzdG9yeSB9ICAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gJy4uL19tb2RlbHMvaW5kZXgnO1xuaW1wb3J0IHsgQWRtaW5TZXJ2aWNlIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSAnLi4vX3NlcnZpY2VzL2luZGV4JztcblxuaW1wb3J0IHsgQWRtaW5Vc2VySW5mb0NvbXBvbmVudCB9ICAgICAgICAgICAgICAgICAgICAgZnJvbSAnLi4vYWRtaW4tdXNlci1pbmZvcm1hdGlvbi9hZG1pbi11c2VyLWluZm9ybWF0aW9uLmNvbXBvbmVudCc7XG5cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdhZG1pbi1sb2dzJyxcbiAgICB0ZW1wbGF0ZVVybDogJ2FkbWluLWxvZ3MuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWydhZG1pbi1sb2dzLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBBZG1pbkxvZ3NDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgdHJhbnNhY3Rpb25zOiBUcmFuc2FjdGlvbkhpc3RvcnlbXTtcbiAgICB1c2VySW5mb01vZGFsOiBCc01vZGFsUmVmO1xuXG4gICAgY29uc3RydWN0b3IoIHByaXZhdGUgYWRtaW5TZXJ2aWNlOiBBZG1pblNlcnZpY2UsXG4gICAgICAgICAgICAgICAgIHByaXZhdGUgbW9kYWxTZXJ2aWNlOiBCc01vZGFsU2VydmljZSwgKSB7IH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmFkbWluU2VydmljZS5nZXRVc2Vyc1RyYW5zYWN0aW9ucygpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKGRhdGEgPT4geyB0aGlzLnRyYW5zYWN0aW9ucyA9IGRhdGE7fSk7XG4gICAgfVxuXG4gICAgcHVibGljIG9wZW5Vc2VySW5mb01vZGFsKHBrOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy51c2VySW5mb01vZGFsID0gdGhpcy5tb2RhbFNlcnZpY2Uuc2hvdyhBZG1pblVzZXJJbmZvQ29tcG9uZW50KTtcbiAgICAgICAgdGhpcy5hZG1pblNlcnZpY2UuZ2V0VXNlcihwaylcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoZGF0YSA9PiB7IHRoaXMudXNlckluZm9Nb2RhbC5jb250ZW50LnVzZXIgPSBkYXRhO30pO1xuICAgICAgICB0aGlzLmFkbWluU2VydmljZS5nZXRVc2VyV2FsbGV0cyhwaylcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoZGF0YSA9PiB7IHRoaXMudXNlckluZm9Nb2RhbC5jb250ZW50LndhbGxldHMgPSBkYXRhO30pO1xuICAgIH1cblxufVxuXG4iXX0=