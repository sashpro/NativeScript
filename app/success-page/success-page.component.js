"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var router_2 = require("@angular/router");
var index_1 = require("./../_services/index");
var SuccessPageComponent = (function () {
    function SuccessPageComponent(activatedRoute, router, walletService) {
        var _this = this;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.walletService = walletService;
        this.ADVCash = {};
        this.querySubscription = activatedRoute.queryParams.subscribe(function (queryParam) {
            if (queryParam['ac_ps'] == 'ADVANCED_CASH') {
                _this.walletService.getTransactionByHash(queryParam['ac_order_id'])
                    .subscribe(function (data) {
                    _this.walletService.getWallet(data.wallet_from)
                        .subscribe(function (data) { _this.ADVCash['wallet_name'] = data.name; });
                    _this.ADVCash['amount'] = data.amount;
                    _this.ADVCash['currency'] = data.currency;
                });
            }
            else {
                _this.router.navigate(['/']);
            }
        });
    }
    SuccessPageComponent.prototype.ngOnInit = function () { };
    SuccessPageComponent.prototype.ngOnDestroy = function () {
        if (this.routeSubscription) {
            this.routeSubscription.unsubscribe();
            this.querySubscription.unsubscribe();
        }
    };
    SuccessPageComponent = __decorate([
        core_1.Component({
            selector: 'success-page',
            templateUrl: './success-page.component.html',
            styleUrls: ['./success-page.component.css']
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            router_2.Router,
            index_1.WalletService])
    ], SuccessPageComponent);
    return SuccessPageComponent;
}());
exports.SuccessPageComponent = SuccessPageComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VjY2Vzcy1wYWdlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInN1Y2Nlc3MtcGFnZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEU7QUFHMUUsMENBQTRFO0FBQzVFLDBDQUE0RTtBQUc1RSw4Q0FBaUY7QUFRakY7SUFNSSw4QkFBcUIsY0FBOEIsRUFDOUIsTUFBYyxFQUNkLGFBQTRCO1FBRmpELGlCQWdCQztRQWhCb0IsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQU5qRCxZQUFPLEdBQVEsRUFBRSxDQUFDO1FBT2QsSUFBSSxDQUFDLGlCQUFpQixHQUFHLGNBQWMsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUN6RCxVQUFDLFVBQWU7WUFDWixFQUFFLENBQUMsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLElBQUUsZUFBZSxDQUFDLENBQUMsQ0FBQztnQkFDdkMsS0FBSSxDQUFFLGFBQWEsQ0FBQyxvQkFBb0IsQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLENBQUM7cUJBQzlELFNBQVMsQ0FBRSxVQUFBLElBQUk7b0JBQU0sS0FBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQzt5QkFDekMsU0FBUyxDQUFFLFVBQUEsSUFBSSxJQUFNLEtBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBLENBQUMsQ0FBQyxDQUFDO29CQUN2RixLQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7b0JBQ3JDLEtBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztnQkFBQSxDQUFDLENBQUMsQ0FBQztZQUN4RCxDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ0osS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ2hDLENBQUM7UUFDTCxDQUFDLENBQ0osQ0FBQztJQUNOLENBQUM7SUFFRCx1Q0FBUSxHQUFSLGNBQWEsQ0FBQztJQUVkLDBDQUFXLEdBQVg7UUFDSSxFQUFFLENBQUMsQ0FBRSxJQUFJLENBQUMsaUJBQWtCLENBQUMsQ0FBQyxDQUFDO1lBQzNCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUNyQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDekMsQ0FBQztJQUNMLENBQUM7SUEvQlEsb0JBQW9CO1FBTGhDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsY0FBYztZQUN4QixXQUFXLEVBQUUsK0JBQStCO1lBQzVDLFNBQVMsRUFBRSxDQUFDLDhCQUE4QixDQUFDO1NBQzlDLENBQUM7eUNBT3VDLHVCQUFjO1lBQ3RCLGVBQU07WUFDQyxxQkFBYTtPQVJ4QyxvQkFBb0IsQ0FnQ2hDO0lBQUQsMkJBQUM7Q0FBQSxBQWhDRCxJQWdDQztBQWhDWSxvREFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT25EZXN0cm95IH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9uSW5pdCB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZX0gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBSb3V0ZXIgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge1N1YnNjcmlwdGlvbn0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gJ3J4anMvU3Vic2NyaXB0aW9uJztcblxuaW1wb3J0IHsgV2FsbGV0U2VydmljZSB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tICcuLy4uL19zZXJ2aWNlcy9pbmRleCc7XG5cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdzdWNjZXNzLXBhZ2UnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9zdWNjZXNzLXBhZ2UuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL3N1Y2Nlc3MtcGFnZS5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU3VjY2Vzc1BhZ2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgQURWQ2FzaDogYW55ID0ge307XG5cbiAgICBwcml2YXRlIHJvdXRlU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gICAgcHJpdmF0ZSBxdWVyeVN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICAgIGNvbnN0cnVjdG9yKCBwcml2YXRlIGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICAgICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICAgICAgICAgICAgICAgcHJpdmF0ZSB3YWxsZXRTZXJ2aWNlOiBXYWxsZXRTZXJ2aWNlLCApe1xuICAgICAgICB0aGlzLnF1ZXJ5U3Vic2NyaXB0aW9uID0gYWN0aXZhdGVkUm91dGUucXVlcnlQYXJhbXMuc3Vic2NyaWJlKFxuICAgICAgICAgICAgKHF1ZXJ5UGFyYW06IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChxdWVyeVBhcmFtWydhY19wcyddPT0nQURWQU5DRURfQ0FTSCcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4gd2FsbGV0U2VydmljZS5nZXRUcmFuc2FjdGlvbkJ5SGFzaChxdWVyeVBhcmFtWydhY19vcmRlcl9pZCddKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnN1YnNjcmliZSggZGF0YSA9PiB7IHRoaXMud2FsbGV0U2VydmljZS5nZXRXYWxsZXQoZGF0YS53YWxsZXRfZnJvbSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnN1YnNjcmliZSggZGF0YSA9PiB7IHRoaXMuQURWQ2FzaFsnd2FsbGV0X25hbWUnXSA9IGRhdGEubmFtZTt9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkFEVkNhc2hbJ2Ftb3VudCddID0gZGF0YS5hbW91bnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5BRFZDYXNoWydjdXJyZW5jeSddID0gZGF0YS5jdXJyZW5jeTt9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy8nXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkgeyB9XG5cbiAgICBuZ09uRGVzdHJveSgpe1xuICAgICAgICBpZiAoIHRoaXMucm91dGVTdWJzY3JpcHRpb24gKSB7XG4gICAgICAgICAgICB0aGlzLnJvdXRlU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICB0aGlzLnF1ZXJ5U3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuXG4iXX0=