"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var router_2 = require("@angular/router");
var FailPageComponent = (function () {
    function FailPageComponent(activatedRoute, router) {
        var _this = this;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.querySubscription = activatedRoute.queryParams.subscribe(function (queryParam) {
            if (queryParam['ac_order_id']) {
                _this.ADVCashWallet = queryParam['ac_dest_wallet'];
            }
            else {
                _this.router.navigate(['/']);
            }
        });
    }
    FailPageComponent.prototype.ngOnInit = function () { };
    FailPageComponent.prototype.ngOnDestroy = function () {
        if (this.routeSubscription) {
            this.routeSubscription.unsubscribe();
            this.querySubscription.unsubscribe();
        }
    };
    FailPageComponent = __decorate([
        core_1.Component({
            selector: 'fail-page',
            templateUrl: './fail-page.component.html',
            styleUrls: ['./fail-page.component.css']
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            router_2.Router])
    ], FailPageComponent);
    return FailPageComponent;
}());
exports.FailPageComponent = FailPageComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFpbC1wYWdlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZhaWwtcGFnZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEU7QUFHMUUsMENBQTRFO0FBQzVFLDBDQUE0RTtBQVM1RTtJQU1JLDJCQUFxQixjQUE4QixFQUM5QixNQUFjO1FBRG5DLGlCQVdDO1FBWG9CLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQy9CLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxjQUFjLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FDekQsVUFBQyxVQUFlO1lBQ1osRUFBRSxDQUFDLENBQUUsVUFBVSxDQUFDLGFBQWEsQ0FBRSxDQUFDLENBQUMsQ0FBQztnQkFDOUIsS0FBSSxDQUFDLGFBQWEsR0FBRyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsQ0FBQTtZQUNyRCxDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ0osS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ2hDLENBQUM7UUFDTCxDQUFDLENBQ0osQ0FBQztJQUNOLENBQUM7SUFFRCxvQ0FBUSxHQUFSLGNBQWEsQ0FBQztJQUVkLHVDQUFXLEdBQVg7UUFDSSxFQUFFLENBQUMsQ0FBRSxJQUFJLENBQUMsaUJBQWtCLENBQUMsQ0FBQyxDQUFDO1lBQzNCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUNyQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDekMsQ0FBQztJQUNMLENBQUM7SUExQlEsaUJBQWlCO1FBTDdCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsV0FBVztZQUNyQixXQUFXLEVBQUUsNEJBQTRCO1lBQ3pDLFNBQVMsRUFBRSxDQUFDLDJCQUEyQixDQUFDO1NBQzNDLENBQUM7eUNBT3VDLHVCQUFjO1lBQ3RCLGVBQU07T0FQMUIsaUJBQWlCLENBMkI3QjtJQUFELHdCQUFDO0NBQUEsQUEzQkQsSUEyQkM7QUEzQlksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9uRGVzdHJveSB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPbkluaXQgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGV9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgUm91dGVyIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtTdWJzY3JpcHRpb259ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tICdyeGpzL1N1YnNjcmlwdGlvbic7XG5cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdmYWlsLXBhZ2UnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9mYWlsLXBhZ2UuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL2ZhaWwtcGFnZS5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRmFpbFBhZ2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgQURWQ2FzaFdhbGxldDogc3RyaW5nO1xuXG4gICAgcHJpdmF0ZSByb3V0ZVN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICAgIHByaXZhdGUgcXVlcnlTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbiAgICBjb25zdHJ1Y3RvciggcHJpdmF0ZSBhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgICAgICAgICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsICl7XG4gICAgICAgIHRoaXMucXVlcnlTdWJzY3JpcHRpb24gPSBhY3RpdmF0ZWRSb3V0ZS5xdWVyeVBhcmFtcy5zdWJzY3JpYmUoXG4gICAgICAgICAgICAocXVlcnlQYXJhbTogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCBxdWVyeVBhcmFtWydhY19vcmRlcl9pZCddICkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLkFEVkNhc2hXYWxsZXQgPSBxdWVyeVBhcmFtWydhY19kZXN0X3dhbGxldCddXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvJ10pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHsgfVxuXG4gICAgbmdPbkRlc3Ryb3koKXtcbiAgICAgICAgaWYgKCB0aGlzLnJvdXRlU3Vic2NyaXB0aW9uICkge1xuICAgICAgICAgICAgdGhpcy5yb3V0ZVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgdGhpcy5xdWVyeVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cblxuIl19