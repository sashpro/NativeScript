"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var modal_1 = require("ngx-bootstrap/modal");
var index_1 = require("../_models/index");
var index_2 = require("../_services/index");
var settings_profile_change_password_component_1 = require("../settings-profile-change-password/settings-profile-change-password.component");
var SettingsProfileUserProfileComponent = (function () {
    function SettingsProfileUserProfileComponent(modalService, userService) {
        this.modalService = modalService;
        this.userService = userService;
        this.userModel = new index_1.User;
        this.messageSuccess = false;
    }
    SettingsProfileUserProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getCurrentUser()
            .subscribe(function (data) { if (data) {
            _this.userModel['avatar'] = data.avatar;
        } });
    };
    SettingsProfileUserProfileComponent.prototype.imageUpload = function (image) {
        var _this = this;
        var reader = new FileReader();
        if (image.target.files[0]) {
            this.newAvatar = image.target.files[0];
            reader.onloadend = function () {
                _this.userModel['avatar'] = reader.result;
            };
            reader.readAsDataURL(this.newAvatar);
        }
    };
    SettingsProfileUserProfileComponent.prototype.uploadPhoto = function () {
        var _this = this;
        if (this.newAvatar) {
            this.messageSuccess = false;
            this.messageError = "";
            this.userService.updateUserAvatar(this.newAvatar)
                .subscribe(function (data) { _this.messageSuccess = true; }, function (error) { _this.messageError = error.detail === undefined ? error.avatar : error.detail; });
        }
    };
    SettingsProfileUserProfileComponent.prototype.openChangePasswordComponent = function () {
        this.changePasswordModal = this.modalService.show(settings_profile_change_password_component_1.SettingsProfileChangePasswordComponent);
    };
    SettingsProfileUserProfileComponent = __decorate([
        core_1.Component({
            selector: 'settings-profile-user-profile',
            templateUrl: './settings-profile-user-profile.component.html',
            styleUrls: ['./settings-profile-user-profile.component.css']
        }),
        __metadata("design:paramtypes", [modal_1.BsModalService,
            index_2.UserService])
    ], SettingsProfileUserProfileComponent);
    return SettingsProfileUserProfileComponent;
}());
exports.SettingsProfileUserProfileComponent = SettingsProfileUserProfileComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZ3MtcHJvZmlsZS11c2VyLXByb2ZpbGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2V0dGluZ3MtcHJvZmlsZS11c2VyLXByb2ZpbGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBFO0FBQzFFLDZDQUFnRjtBQUdoRiwwQ0FBNkU7QUFDN0UsNENBQStFO0FBRS9FLDZJQUEySTtBQVEzSTtJQU9JLDZDQUFxQixZQUE0QixFQUM1QixXQUF3QjtRQUR4QixpQkFBWSxHQUFaLFlBQVksQ0FBZ0I7UUFDNUIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFQN0MsY0FBUyxHQUFHLElBQUksWUFBSSxDQUFDO1FBRXJCLG1CQUFjLEdBQUcsS0FBSyxDQUFDO0lBSzJCLENBQUM7SUFFbkQsc0RBQVEsR0FBUjtRQUFBLGlCQUdDO1FBRkcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLEVBQUU7YUFDNUIsU0FBUyxDQUFDLFVBQUEsSUFBSSxJQUFNLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFBQyxLQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFBQSxDQUFDLENBQUEsQ0FBQyxDQUFDLENBQUM7SUFDcEYsQ0FBQztJQUVELHlEQUFXLEdBQVgsVUFBWSxLQUFLO1FBQWpCLGlCQVNDO1FBUkcsSUFBSSxNQUFNLEdBQUcsSUFBSSxVQUFVLEVBQUUsQ0FBQztRQUM5QixFQUFFLENBQUMsQ0FBRSxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUUsQ0FBQyxDQUFDLENBQUM7WUFDMUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN2QyxNQUFNLENBQUMsU0FBUyxHQUFHO2dCQUNmLEtBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztZQUM3QyxDQUFDLENBQUM7WUFDRixNQUFNLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN6QyxDQUFDO0lBQ0wsQ0FBQztJQUVELHlEQUFXLEdBQVg7UUFBQSxpQkFRQztRQVBHLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ2pCLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO1lBQzVCLElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztpQkFDNUMsU0FBUyxDQUFFLFVBQUEsSUFBSSxJQUFNLEtBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLENBQUEsQ0FBQyxFQUM5QyxVQUFBLEtBQUssSUFBTSxLQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQyxNQUFNLEtBQUssU0FBUyxHQUFHLEtBQUssQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3ZHLENBQUM7SUFDTCxDQUFDO0lBRU0seUVBQTJCLEdBQWxDO1FBQ0ksSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLG1GQUFzQyxDQUFDLENBQUM7SUFDOUYsQ0FBQztJQXRDUSxtQ0FBbUM7UUFML0MsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSwrQkFBK0I7WUFDekMsV0FBVyxFQUFFLGdEQUFnRDtZQUM3RCxTQUFTLEVBQUUsQ0FBQywrQ0FBK0MsQ0FBQztTQUMvRCxDQUFDO3lDQVFxQyxzQkFBYztZQUNmLG1CQUFXO09BUnBDLG1DQUFtQyxDQXVDL0M7SUFBRCwwQ0FBQztDQUFBLEFBdkNELElBdUNDO0FBdkNZLGtGQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCc01vZGFsU2VydmljZSB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gJ25neC1ib290c3RyYXAvbW9kYWwnO1xuaW1wb3J0IHsgQnNNb2RhbFJlZiB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tICduZ3gtYm9vdHN0cmFwL21vZGFsL21vZGFsLW9wdGlvbnMuY2xhc3MnO1xuXG5pbXBvcnQgeyBVc2VyIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gJy4uL19tb2RlbHMvaW5kZXgnO1xuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tICcuLi9fc2VydmljZXMvaW5kZXgnO1xuXG5pbXBvcnQgeyBTZXR0aW5nc1Byb2ZpbGVDaGFuZ2VQYXNzd29yZENvbXBvbmVudCB9ICAgIGZyb20gJy4uL3NldHRpbmdzLXByb2ZpbGUtY2hhbmdlLXBhc3N3b3JkL3NldHRpbmdzLXByb2ZpbGUtY2hhbmdlLXBhc3N3b3JkLmNvbXBvbmVudCc7XG5cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdzZXR0aW5ncy1wcm9maWxlLXVzZXItcHJvZmlsZScsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3NldHRpbmdzLXByb2ZpbGUtdXNlci1wcm9maWxlLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9zZXR0aW5ncy1wcm9maWxlLXVzZXItcHJvZmlsZS5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU2V0dGluZ3NQcm9maWxlVXNlclByb2ZpbGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHVzZXJNb2RlbCA9IG5ldyBVc2VyO1xuICAgIGNoYW5nZVBhc3N3b3JkTW9kYWw6IEJzTW9kYWxSZWY7XG4gICAgbWVzc2FnZVN1Y2Nlc3MgPSBmYWxzZTtcbiAgICBtZXNzYWdlRXJyb3I6IHN0cmluZztcbiAgICBuZXdBdmF0YXI6IEZpbGU7XG5cbiAgICBjb25zdHJ1Y3RvciggcHJpdmF0ZSBtb2RhbFNlcnZpY2U6IEJzTW9kYWxTZXJ2aWNlLFxuICAgICAgICAgICAgICAgICBwcml2YXRlIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSApIHsgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMudXNlclNlcnZpY2UuZ2V0Q3VycmVudFVzZXIoKVxuICAgICAgICAgICAgLnN1YnNjcmliZShkYXRhID0+IHsgaWYgKGRhdGEpIHsgdGhpcy51c2VyTW9kZWxbJ2F2YXRhciddID0gZGF0YS5hdmF0YXI7fX0pO1xuICAgIH1cblxuICAgIGltYWdlVXBsb2FkKGltYWdlKSB7XG4gICAgICAgIGxldCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgICBpZiAoIGltYWdlLnRhcmdldC5maWxlc1swXSApIHtcbiAgICAgICAgICAgIHRoaXMubmV3QXZhdGFyID0gaW1hZ2UudGFyZ2V0LmZpbGVzWzBdO1xuICAgICAgICAgICAgcmVhZGVyLm9ubG9hZGVuZCA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnVzZXJNb2RlbFsnYXZhdGFyJ10gPSByZWFkZXIucmVzdWx0O1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKHRoaXMubmV3QXZhdGFyKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwbG9hZFBob3RvKCkge1xuICAgICAgICBpZiAodGhpcy5uZXdBdmF0YXIpIHtcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZVN1Y2Nlc3MgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZUVycm9yID0gXCJcIjtcbiAgICAgICAgICAgIHRoaXMudXNlclNlcnZpY2UudXBkYXRlVXNlckF2YXRhcih0aGlzLm5ld0F2YXRhcilcbiAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKCBkYXRhID0+IHsgdGhpcy5tZXNzYWdlU3VjY2VzcyA9IHRydWU7fSxcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IgPT4geyB0aGlzLm1lc3NhZ2VFcnJvciA9IGVycm9yLmRldGFpbCA9PT0gdW5kZWZpbmVkID8gZXJyb3IuYXZhdGFyIDogZXJyb3IuZGV0YWlsIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIG9wZW5DaGFuZ2VQYXNzd29yZENvbXBvbmVudCgpIHtcbiAgICAgICAgdGhpcy5jaGFuZ2VQYXNzd29yZE1vZGFsID0gdGhpcy5tb2RhbFNlcnZpY2Uuc2hvdyhTZXR0aW5nc1Byb2ZpbGVDaGFuZ2VQYXNzd29yZENvbXBvbmVudCk7XG4gICAgfVxufVxuIl19