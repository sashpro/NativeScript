"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var index_1 = require("./../_models/index");
var index_2 = require("./../_services/index");
var SettingsProfilePersonalDetailsComponent = (function () {
    function SettingsProfilePersonalDetailsComponent(userService) {
        this.userService = userService;
        this.userModel = new index_1.User;
        this.messageSuccess = false;
    }
    SettingsProfilePersonalDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getCurrentUser()
            .subscribe(function (userData) { _this.userModel = userData; });
    };
    SettingsProfilePersonalDetailsComponent.prototype.updateUserInformation = function () {
        var _this = this;
        this.messageSuccess = false;
        this.messageError = "";
        this.userService.updateUserInformation(this.userModel)
            .subscribe(function (data) { _this.messageSuccess = true; }, function (error) { _this.messageError = error.detail; });
    };
    SettingsProfilePersonalDetailsComponent = __decorate([
        core_1.Component({
            selector: 'settings-profile-personal-details',
            templateUrl: './settings-profile-personal-details.component.html',
            styleUrls: ['./settings-profile-personal-details.component.css']
        }),
        __metadata("design:paramtypes", [index_2.UserService])
    ], SettingsProfilePersonalDetailsComponent);
    return SettingsProfilePersonalDetailsComponent;
}());
exports.SettingsProfilePersonalDetailsComponent = SettingsProfilePersonalDetailsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZ3MtcHJvZmlsZS1wZXJzb25hbC1kZXRhaWxzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNldHRpbmdzLXByb2ZpbGUtcGVyc29uYWwtZGV0YWlscy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEU7QUFFMUUsNENBQStFO0FBQy9FLDhDQUFpRjtBQU9qRjtJQU1JLGlEQUFxQixXQUF3QjtRQUF4QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUo3QyxjQUFTLEdBQUcsSUFBSSxZQUFJLENBQUM7UUFDckIsbUJBQWMsR0FBRyxLQUFLLENBQUM7SUFHMkIsQ0FBQztJQUVuRCwwREFBUSxHQUFSO1FBQUEsaUJBR0M7UUFGRyxJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsRUFBRTthQUM1QixTQUFTLENBQUMsVUFBQSxRQUFRLElBQU0sS0FBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUMsQ0FBQSxDQUFDLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBRUQsdUVBQXFCLEdBQXJCO1FBQUEsaUJBTUM7UUFMRyxJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztRQUM1QixJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsV0FBVyxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7YUFDOUIsU0FBUyxDQUFFLFVBQUEsSUFBSSxJQUFNLEtBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLENBQUEsQ0FBQyxFQUN0QyxVQUFBLEtBQUssSUFBTSxLQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQSxDQUFDLENBQUMsQ0FBQztJQUN0RixDQUFDO0lBbkJRLHVDQUF1QztRQUxuRCxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLG1DQUFtQztZQUM3QyxXQUFXLEVBQUUsb0RBQW9EO1lBQ2pFLFNBQVMsRUFBRSxDQUFDLG1EQUFtRCxDQUFDO1NBQ25FLENBQUM7eUNBT29DLG1CQUFXO09BTnBDLHVDQUF1QyxDQW9CbkQ7SUFBRCw4Q0FBQztDQUFBLEFBcEJELElBb0JDO0FBcEJZLDBGQUF1QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFVzZXIgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSAnLi8uLi9fbW9kZWxzL2luZGV4JztcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSAnLi8uLi9fc2VydmljZXMvaW5kZXgnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3NldHRpbmdzLXByb2ZpbGUtcGVyc29uYWwtZGV0YWlscycsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3NldHRpbmdzLXByb2ZpbGUtcGVyc29uYWwtZGV0YWlscy5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vc2V0dGluZ3MtcHJvZmlsZS1wZXJzb25hbC1kZXRhaWxzLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTZXR0aW5nc1Byb2ZpbGVQZXJzb25hbERldGFpbHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgdXNlck1vZGVsID0gbmV3IFVzZXI7XG4gICAgbWVzc2FnZVN1Y2Nlc3MgPSBmYWxzZTtcbiAgICBtZXNzYWdlRXJyb3I6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKCBwcml2YXRlIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSApIHsgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMudXNlclNlcnZpY2UuZ2V0Q3VycmVudFVzZXIoKVxuICAgICAgICAgICAgLnN1YnNjcmliZSh1c2VyRGF0YSA9PiB7IHRoaXMudXNlck1vZGVsID0gdXNlckRhdGE7fSk7XG4gICAgfVxuXG4gICAgdXBkYXRlVXNlckluZm9ybWF0aW9uKCkge1xuICAgICAgICB0aGlzLm1lc3NhZ2VTdWNjZXNzID0gZmFsc2U7XG4gICAgICAgIHRoaXMubWVzc2FnZUVycm9yID0gXCJcIjtcbiAgICAgICAgdGhpcy51c2VyU2VydmljZS51cGRhdGVVc2VySW5mb3JtYXRpb24odGhpcy51c2VyTW9kZWwpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnN1YnNjcmliZSggZGF0YSA9PiB7IHRoaXMubWVzc2FnZVN1Y2Nlc3MgPSB0cnVlO30sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IgPT4geyB0aGlzLm1lc3NhZ2VFcnJvciA9IGVycm9yLmRldGFpbDt9KTtcbiAgICB9XG59XG4iXX0=