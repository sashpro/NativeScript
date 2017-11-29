"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var Subject_1 = require("rxjs/Subject");
require("rxjs/Rx");
var index_1 = require("../_services/index");
var AdminUsersComponent = (function () {
    function AdminUsersComponent(adminService, router) {
        var _this = this;
        this.adminService = adminService;
        this.router = router;
        this.searchSubstring = '';
        this.searchSubstringChanged = new Subject_1.Subject();
        this.router.events.subscribe(function (res) {
            _this.selectedUserID = res['url'].split('/')[2] != undefined ? res['url'].split('/')[2] : 0;
        });
    }
    AdminUsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getUsers();
        this.searchSubstringChanged
            .debounceTime(200)
            .distinctUntilChanged()
            .subscribe(function () {
            _this.getUsers();
        });
    };
    AdminUsersComponent.prototype.getUsers = function () {
        var _this = this;
        this.adminService.getUsers(this.searchSubstring)
            .subscribe(function (data) { _this.users = data; });
    };
    AdminUsersComponent.prototype.activateDeactivateUser = function (pk, states) {
        var _this = this;
        this.adminService.activateDeactivateUser(pk, states)
            .subscribe(function (data) { _this.getUsers(); });
    };
    AdminUsersComponent = __decorate([
        core_1.Component({
            selector: 'admin-users',
            templateUrl: './admin-users.component.html',
            styleUrls: ['./admin-users.component.css']
        }),
        __metadata("design:paramtypes", [index_1.AdminService,
            router_1.Router])
    ], AdminUsersComponent);
    return AdminUsersComponent;
}());
exports.AdminUsersComponent = AdminUsersComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRtaW4tdXNlcnMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWRtaW4tdXNlcnMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJFO0FBRTNFLDBDQUE2RTtBQUM3RSx3Q0FBMEU7QUFDMUUsbUJBQWlCO0FBR2pCLDRDQUFnRjtBQVNoRjtJQU9JLDZCQUFxQixZQUEwQixFQUMxQixNQUFjO1FBRG5DLGlCQUlDO1FBSm9CLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFKbkMsb0JBQWUsR0FBVyxFQUFFLENBQUM7UUFDN0IsMkJBQXNCLEdBQW9CLElBQUksaUJBQU8sRUFBVSxDQUFDO1FBSTVELElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFBLEdBQUc7WUFDNUIsS0FBSSxDQUFDLGNBQWMsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLFNBQVMsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUFBLENBQUMsQ0FBQyxDQUFDO0lBQ3RHLENBQUM7SUFFRCxzQ0FBUSxHQUFSO1FBQUEsaUJBUUM7UUFQRyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDaEIsSUFBSSxDQUFDLHNCQUFzQjthQUN0QixZQUFZLENBQUMsR0FBRyxDQUFDO2FBQ2pCLG9CQUFvQixFQUFFO2FBQ3RCLFNBQVMsQ0FBQztZQUNQLEtBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUN4QixDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFFRCxzQ0FBUSxHQUFSO1FBQUEsaUJBR0M7UUFGRyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDO2FBQzNDLFNBQVMsQ0FBQyxVQUFBLElBQUksSUFBSyxLQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQSxDQUFBLENBQUMsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFRCxvREFBc0IsR0FBdEIsVUFBd0IsRUFBVSxFQUFFLE1BQWU7UUFBbkQsaUJBR0M7UUFGRyxJQUFJLENBQUMsWUFBWSxDQUFDLHNCQUFzQixDQUFDLEVBQUUsRUFBRSxNQUFNLENBQUM7YUFDL0MsU0FBUyxDQUFFLFVBQUEsSUFBSSxJQUFNLEtBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFBLENBQUMsQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUEvQlEsbUJBQW1CO1FBTC9CLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsYUFBYTtZQUN2QixXQUFXLEVBQUUsOEJBQThCO1lBQzNDLFNBQVMsRUFBRSxDQUFDLDZCQUE2QixDQUFDO1NBQzdDLENBQUM7eUNBUXFDLG9CQUFZO1lBQ2xCLGVBQU07T0FSMUIsbUJBQW1CLENBaUMvQjtJQUFELDBCQUFDO0NBQUEsQUFqQ0QsSUFpQ0M7QUFqQ1ksa0RBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPbkluaXQgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBTdWJqZWN0IH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tICdyeGpzL1N1YmplY3QnO1xuaW1wb3J0ICdyeGpzL1J4JztcblxuaW1wb3J0IHsgVXNlckJyaWVmIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSAnLi4vX21vZGVscy9pbmRleCc7XG5pbXBvcnQgeyBBZG1pblNlcnZpY2UgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tICcuLi9fc2VydmljZXMvaW5kZXgnO1xuXG5cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdhZG1pbi11c2VycycsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2FkbWluLXVzZXJzLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9hZG1pbi11c2Vycy5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQWRtaW5Vc2Vyc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBzZWxlY3RlZFVzZXJJRDogc3RyaW5nO1xuICAgIHVzZXJzOiBVc2VyQnJpZWZbXTtcbiAgICBzZWFyY2hTdWJzdHJpbmc6IHN0cmluZyA9ICcnO1xuICAgIHNlYXJjaFN1YnN0cmluZ0NoYW5nZWQ6IFN1YmplY3Q8c3RyaW5nPiA9IG5ldyBTdWJqZWN0PHN0cmluZz4oKTtcblxuICAgIGNvbnN0cnVjdG9yKCBwcml2YXRlIGFkbWluU2VydmljZTogQWRtaW5TZXJ2aWNlLFxuICAgICAgICAgICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLCApIHtcbiAgICAgICAgdGhpcy5yb3V0ZXIuZXZlbnRzLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFVzZXJJRCA9IHJlc1sndXJsJ10uc3BsaXQoJy8nKVsyXSAhPSB1bmRlZmluZWQgPyByZXNbJ3VybCddLnNwbGl0KCcvJylbMl0gOiAwO30pO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmdldFVzZXJzKCk7XG4gICAgICAgIHRoaXMuc2VhcmNoU3Vic3RyaW5nQ2hhbmdlZFxuICAgICAgICAgICAgLmRlYm91bmNlVGltZSgyMDApXG4gICAgICAgICAgICAuZGlzdGluY3RVbnRpbENoYW5nZWQoKVxuICAgICAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5nZXRVc2VycygpO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIGdldFVzZXJzKCkge1xuICAgICAgICB0aGlzLmFkbWluU2VydmljZS5nZXRVc2Vycyh0aGlzLnNlYXJjaFN1YnN0cmluZylcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoZGF0YSA9PiB7dGhpcy51c2VycyA9IGRhdGF9KTtcbiAgICB9XG5cbiAgICBhY3RpdmF0ZURlYWN0aXZhdGVVc2VyKCBwazogbnVtYmVyLCBzdGF0ZXM6IGJvb2xlYW4gKXtcbiAgICAgICAgdGhpcy5hZG1pblNlcnZpY2UuYWN0aXZhdGVEZWFjdGl2YXRlVXNlcihwaywgc3RhdGVzKVxuICAgICAgICAgICAgLnN1YnNjcmliZSggZGF0YSA9PiB7IHRoaXMuZ2V0VXNlcnMoKTt9KTtcbiAgICB9XG5cbn1cbiJdfQ==