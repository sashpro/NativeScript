"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var index_1 = require("./../_services/index");
var AccountsNavigationBarComponent = (function () {
    function AccountsNavigationBarComponent(walletService, route) {
        var _this = this;
        this.walletService = walletService;
        this.route = route;
        this.wallet = {};
        this.routeSubscription = route.params.subscribe(function (params) { _this.getWallet(params['id']); });
    }
    AccountsNavigationBarComponent.prototype.ngOnInit = function () { };
    AccountsNavigationBarComponent.prototype.getWallet = function (walletID) {
        var _this = this;
        this.walletService.getWallet(walletID)
            .subscribe(function (data) { return _this.wallet = data; });
    };
    AccountsNavigationBarComponent.prototype.ngOnDestroy = function () {
        this.routeSubscription.unsubscribe();
    };
    AccountsNavigationBarComponent = __decorate([
        core_1.Component({
            selector: 'accounts-navigation-bar',
            templateUrl: './accounts-navigation-bar.component.html',
            styleUrls: ['./accounts-navigation-bar.component.css']
        }),
        __metadata("design:paramtypes", [index_1.WalletService,
            router_1.ActivatedRoute])
    ], AccountsNavigationBarComponent);
    return AccountsNavigationBarComponent;
}());
exports.AccountsNavigationBarComponent = AccountsNavigationBarComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3VudHMtbmF2aWdhdGlvbi1iYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWNjb3VudHMtbmF2aWdhdGlvbi1iYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQW9FO0FBQ3BFLDBDQUFxRTtBQUlyRSw4Q0FBMEU7QUFPMUU7SUFLSSx3Q0FBcUIsYUFBNEIsRUFDNUIsS0FBcUI7UUFEMUMsaUJBSUM7UUFKb0Isa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFIMUMsV0FBTSxHQUFRLEVBQUUsQ0FBQztRQUliLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFBLE1BQU0sSUFBTSxLQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUEsQ0FBQyxDQUFDLENBQUM7SUFFaEcsQ0FBQztJQUVELGlEQUFRLEdBQVIsY0FBYSxDQUFDO0lBRWQsa0RBQVMsR0FBVCxVQUFVLFFBQWdCO1FBQTFCLGlCQUdDO1FBRkcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDO2FBQ25CLFNBQVMsQ0FBRSxVQUFBLElBQUksSUFBSSxPQUFBLEtBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxFQUFsQixDQUFrQixDQUFDLENBQUM7SUFDOUQsQ0FBQztJQUVELG9EQUFXLEdBQVg7UUFDSSxJQUFJLENBQUMsaUJBQWlCLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDekMsQ0FBQztJQXBCUSw4QkFBOEI7UUFMMUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSx5QkFBeUI7WUFDbkMsV0FBVyxFQUFFLDBDQUEwQztZQUN2RCxTQUFTLEVBQUUsQ0FBQyx5Q0FBeUMsQ0FBQztTQUN6RCxDQUFDO3lDQU1zQyxxQkFBYTtZQUNyQix1QkFBYztPQU5qQyw4QkFBOEIsQ0FxQjFDO0lBQUQscUNBQUM7Q0FBQSxBQXJCRCxJQXFCQztBQXJCWSx3RUFBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSAgICAgICAgICAgICAgICAgICAgIGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBSb3V0ZXIgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9ICAgICAgICAgICAgICAgICAgICAgICBmcm9tICdyeGpzL1N1YnNjcmlwdGlvbic7XG5cbmltcG9ydCB7IFdhbGxldFNlcnZpY2UgfSAgICAgICAgICAgICAgICAgICAgICBmcm9tICcuLy4uL19zZXJ2aWNlcy9pbmRleCc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnYWNjb3VudHMtbmF2aWdhdGlvbi1iYXInLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9hY2NvdW50cy1uYXZpZ2F0aW9uLWJhci5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vYWNjb3VudHMtbmF2aWdhdGlvbi1iYXIuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEFjY291bnRzTmF2aWdhdGlvbkJhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBwcml2YXRlIHJvdXRlU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gICAgd2FsbGV0OiBhbnkgPSB7fTtcblxuICAgIGNvbnN0cnVjdG9yKCBwcml2YXRlIHdhbGxldFNlcnZpY2U6IFdhbGxldFNlcnZpY2UsXG4gICAgICAgICAgICAgICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlICkge1xuICAgICAgICB0aGlzLnJvdXRlU3Vic2NyaXB0aW9uID0gcm91dGUucGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4geyB0aGlzLmdldFdhbGxldChwYXJhbXNbJ2lkJ10pO30pO1xuXG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7IH1cblxuICAgIGdldFdhbGxldCh3YWxsZXRJRDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMud2FsbGV0U2VydmljZS5nZXRXYWxsZXQod2FsbGV0SUQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoIGRhdGEgPT4gdGhpcy53YWxsZXQgPSBkYXRhKTtcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpe1xuICAgICAgICB0aGlzLnJvdXRlU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxufVxuIl19