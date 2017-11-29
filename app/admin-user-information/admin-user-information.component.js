"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var modal_options_class_1 = require("ngx-bootstrap/modal/modal-options.class");
var index_1 = require("./../_models/index");
var AdminUserInfoComponent = (function () {
    function AdminUserInfoComponent(bsModalRef) {
        this.bsModalRef = bsModalRef;
        this.user = new index_1.User;
        this.wallets = new Array();
    }
    AdminUserInfoComponent.prototype.ngOnInit = function () { };
    AdminUserInfoComponent = __decorate([
        core_1.Component({
            selector: 'modal-admin-user-information',
            templateUrl: './admin-user-information.component.html',
            styleUrls: ['./admin-user-information.component.css']
        }),
        __metadata("design:paramtypes", [modal_options_class_1.BsModalRef])
    ], AdminUserInfoComponent);
    return AdminUserInfoComponent;
}());
exports.AdminUserInfoComponent = AdminUserInfoComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRtaW4tdXNlci1pbmZvcm1hdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhZG1pbi11c2VyLWluZm9ybWF0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwRTtBQUcxRSwrRUFBb0c7QUFFcEcsNENBQStFO0FBUy9FO0lBS0ksZ0NBQW1CLFVBQXNCO1FBQXRCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFIbEMsU0FBSSxHQUFHLElBQUksWUFBSSxDQUFDO1FBQ2hCLFlBQU8sR0FBRyxJQUFJLEtBQUssRUFBVSxDQUFDO0lBRU8sQ0FBQztJQUU3Qyx5Q0FBUSxHQUFSLGNBQVksQ0FBQztJQVBKLHNCQUFzQjtRQUxsQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLDhCQUE4QjtZQUN4QyxXQUFXLEVBQUUseUNBQXlDO1lBQ3RELFNBQVMsRUFBRSxDQUFDLHdDQUF3QyxDQUFDO1NBQ3hELENBQUM7eUNBTWlDLGdDQUFVO09BTGhDLHNCQUFzQixDQVNsQztJQUFELDZCQUFDO0NBQUEsQUFURCxJQVNDO0FBVFksd0RBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gICAgICAgICAgICAgICAgICBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEJzTW9kYWxTZXJ2aWNlIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSAnbmd4LWJvb3RzdHJhcC9tb2RhbCc7XG5pbXBvcnQgeyBCc01vZGFsUmVmIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gJ25neC1ib290c3RyYXAvbW9kYWwvbW9kYWwtb3B0aW9ucy5jbGFzcyc7XG5cbmltcG9ydCB7IFVzZXIgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSAnLi8uLi9fbW9kZWxzL2luZGV4JztcbmltcG9ydCB7IFdhbGxldCB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSAnLi8uLi9fbW9kZWxzL2luZGV4JztcblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ21vZGFsLWFkbWluLXVzZXItaW5mb3JtYXRpb24nLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9hZG1pbi11c2VyLWluZm9ybWF0aW9uLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9hZG1pbi11c2VyLWluZm9ybWF0aW9uLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBBZG1pblVzZXJJbmZvQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIHB1YmxpYyB1c2VyID0gbmV3IFVzZXI7XG4gICAgcHVibGljIHdhbGxldHMgPSBuZXcgQXJyYXk8V2FsbGV0PigpO1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIGJzTW9kYWxSZWY6IEJzTW9kYWxSZWYpIHt9XG5cbiAgICBuZ09uSW5pdCgpIHt9XG5cbn1cbiJdfQ==