"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var modal_1 = require("ngx-bootstrap/modal");
var index_1 = require("../_models/index");
var index_2 = require("../_services/index");
var index_3 = require("../_services/index");
var sign_in_component_1 = require("../sign-in/sign-in.component");
var sign_up_second_step_component_1 = require("../sign-up-second-step/sign-up-second-step.component");
var NavigationBarComponent = (function () {
    function NavigationBarComponent(authenticationService, buySellService, modalService, router, userService) {
        this.authenticationService = authenticationService;
        this.buySellService = buySellService;
        this.modalService = modalService;
        this.router = router;
        this.userService = userService;
        this.currentUser = new index_1.User;
        this.mobileMenuSate = false;
    }
    NavigationBarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getCurrentUser()
            .subscribe(function (userData) { _this.doUserUpdate(userData); });
        this.getFRGCrate();
        this.getBTCrate();
        this.router.events.subscribe(function (res) { _this.mobileMenuSate = false; });
    };
    NavigationBarComponent.prototype.showMenu = function () {
        this.mobileMenuSate = !this.mobileMenuSate;
    };
    NavigationBarComponent.prototype.doUserUpdate = function (userData) {
        this.currentUser = userData;
        if (this.currentUser) {
            if (this.currentUser.first_name == '' || this.currentUser.last_name == '') {
                if (!this.signUpSecondStepModal) {
                    this.signUpSecondStepModal = this.modalService.show(sign_up_second_step_component_1.SignUpSecondStepComponent);
                }
            }
        }
    };
    NavigationBarComponent.prototype.getFRGCrate = function () {
        var _this = this;
        var FRGCRateModel = new index_1.ExchangeRate;
        FRGCRateModel["operation"] = 'BUY';
        FRGCRateModel["wallet_from_currency"] = 'USD';
        FRGCRateModel["wallet_to_currency"] = 'FRGC';
        this.buySellService.exchangeRate(FRGCRateModel)
            .subscribe(function (data) { _this.FRGCrate = data; });
    };
    NavigationBarComponent.prototype.getBTCrate = function () {
        var _this = this;
        var BTCRateModel = new index_1.ExchangeRate;
        BTCRateModel["operation"] = 'BUY';
        BTCRateModel["wallet_from_currency"] = 'USD';
        BTCRateModel["wallet_to_currency"] = 'BTC';
        this.buySellService.exchangeRate(BTCRateModel)
            .subscribe(function (data) { _this.BTCrate = data; });
    };
    NavigationBarComponent.prototype.openModalWithComponent = function () {
        this.signInModal = this.modalService.show(sign_in_component_1.SignInComponent);
    };
    NavigationBarComponent.prototype.doLogout = function () {
        this.authenticationService.logout().subscribe(function (data) { });
    };
    NavigationBarComponent = __decorate([
        core_1.Component({
            selector: 'navigation-bar',
            templateUrl: './navigation-bar.component.html',
            styleUrls: ['./navigation-bar.component.css']
        }),
        __metadata("design:paramtypes", [index_2.AuthenticationService,
            index_2.BuySellService,
            modal_1.BsModalService,
            router_1.Router,
            index_3.UserService])
    ], NavigationBarComponent);
    return NavigationBarComponent;
}());
exports.NavigationBarComponent = NavigationBarComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi1iYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmF2aWdhdGlvbi1iYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJFO0FBQzNFLDBDQUE2RTtBQUM3RSw2Q0FBaUY7QUFHakYsMENBQThFO0FBQzlFLDRDQUFnRjtBQUNoRiw0Q0FBZ0Y7QUFFaEYsa0VBQTBGO0FBQzFGLHNHQUFrSDtBQVFsSDtJQVVJLGdDQUFxQixxQkFBNEMsRUFDNUMsY0FBOEIsRUFDOUIsWUFBNEIsRUFDNUIsTUFBYyxFQUNkLFdBQXdCO1FBSnhCLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBdUI7UUFDNUMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLGlCQUFZLEdBQVosWUFBWSxDQUFnQjtRQUM1QixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFSN0MsZ0JBQVcsR0FBRyxJQUFJLFlBQUksQ0FBQztRQUV2QixtQkFBYyxHQUFZLEtBQUssQ0FBQztJQU9oQyxDQUFDO0lBRUQseUNBQVEsR0FBUjtRQUFBLGlCQU1DO1FBTEcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLEVBQUU7YUFDNUIsU0FBUyxDQUFDLFVBQUEsUUFBUSxJQUFLLEtBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUEsQ0FBQSxDQUFDLENBQUMsQ0FBQztRQUMxRCxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFBLEdBQUcsSUFBSyxLQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQyxDQUFBLENBQUMsQ0FBQyxDQUFDO0lBQ3hFLENBQUM7SUFFRCx5Q0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLGNBQWMsR0FBRyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUM7SUFDL0MsQ0FBQztJQUVELDZDQUFZLEdBQVosVUFBYSxRQUFRO1FBQ2pCLElBQUksQ0FBQyxXQUFXLEdBQUcsUUFBUSxDQUFDO1FBQzVCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1lBQ25CLEVBQUUsQ0FBQyxDQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxJQUFFLEVBQUUsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsSUFBRSxFQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUN0RSxFQUFFLENBQUMsQ0FBRSxDQUFDLElBQUksQ0FBQyxxQkFBc0IsQ0FBQyxDQUFDLENBQUM7b0JBQ2hDLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyx5REFBeUIsQ0FBQyxDQUFBO2dCQUNsRixDQUFDO1lBQ0wsQ0FBQztRQUNMLENBQUM7SUFDTCxDQUFDO0lBRUQsNENBQVcsR0FBWDtRQUFBLGlCQU9DO1FBTkcsSUFBSSxhQUFhLEdBQUcsSUFBSSxvQkFBWSxDQUFDO1FBQ3JDLGFBQWEsQ0FBQyxXQUFXLENBQUMsR0FBRyxLQUFLLENBQUM7UUFDbkMsYUFBYSxDQUFDLHNCQUFzQixDQUFDLEdBQUcsS0FBSyxDQUFDO1FBQzlDLGFBQWEsQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLE1BQU0sQ0FBQztRQUM3QyxJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUM7YUFDM0IsU0FBUyxDQUFFLFVBQUEsSUFBSSxJQUFNLEtBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLENBQUEsQ0FBQyxDQUFDLENBQUM7SUFDckUsQ0FBQztJQUVELDJDQUFVLEdBQVY7UUFBQSxpQkFPQztRQU5HLElBQUksWUFBWSxHQUFHLElBQUksb0JBQVksQ0FBQztRQUNwQyxZQUFZLENBQUMsV0FBVyxDQUFDLEdBQUcsS0FBSyxDQUFDO1FBQ2xDLFlBQVksQ0FBQyxzQkFBc0IsQ0FBQyxHQUFHLEtBQUssQ0FBQztRQUM3QyxZQUFZLENBQUMsb0JBQW9CLENBQUMsR0FBRyxLQUFLLENBQUM7UUFDM0MsSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDO2FBQzFCLFNBQVMsQ0FBRSxVQUFBLElBQUksSUFBTSxLQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxDQUFBLENBQUMsQ0FBQyxDQUFDO0lBQ3BFLENBQUM7SUFFTSx1REFBc0IsR0FBN0I7UUFDSSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLG1DQUFlLENBQUMsQ0FBQztJQUMvRCxDQUFDO0lBRUQseUNBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxTQUFTLENBQUUsVUFBQyxJQUFJLElBQU0sQ0FBQyxDQUFDLENBQUM7SUFDakUsQ0FBQztJQWhFUSxzQkFBc0I7UUFMbEMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxnQkFBZ0I7WUFDMUIsV0FBVyxFQUFFLGlDQUFpQztZQUM5QyxTQUFTLEVBQUUsQ0FBQyxnQ0FBZ0MsQ0FBQztTQUNoRCxDQUFDO3lDQVc4Qyw2QkFBcUI7WUFDNUIsc0JBQWM7WUFDaEIsc0JBQWM7WUFDcEIsZUFBTTtZQUNELG1CQUFXO09BZHBDLHNCQUFzQixDQWtFbEM7SUFBRCw2QkFBQztDQUFBLEFBbEVELElBa0VDO0FBbEVZLHdEQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gICAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEJzTW9kYWxTZXJ2aWNlIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gJ25neC1ib290c3RyYXAvbW9kYWwnO1xuaW1wb3J0IHsgQnNNb2RhbFJlZiB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSAnbmd4LWJvb3RzdHJhcC9tb2RhbC9tb2RhbC1vcHRpb25zLmNsYXNzJztcblxuaW1wb3J0IHsgRXhjaGFuZ2VSYXRlLCBVc2VyIH0gICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSAnLi4vX21vZGVscy9pbmRleCc7XG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblNlcnZpY2UsIEJ1eVNlbGxTZXJ2aWNlIH0gICAgICBmcm9tICcuLi9fc2VydmljZXMvaW5kZXgnO1xuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSAnLi4vX3NlcnZpY2VzL2luZGV4JztcblxuaW1wb3J0IHsgU2lnbkluQ29tcG9uZW50IH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSAnLi4vc2lnbi1pbi9zaWduLWluLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTaWduVXBTZWNvbmRTdGVwQ29tcG9uZW50IH0gICAgICAgICAgICAgICAgICBmcm9tICcuLi9zaWduLXVwLXNlY29uZC1zdGVwL3NpZ24tdXAtc2Vjb25kLXN0ZXAuY29tcG9uZW50JztcblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ25hdmlnYXRpb24tYmFyJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vbmF2aWdhdGlvbi1iYXIuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL25hdmlnYXRpb24tYmFyLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBOYXZpZ2F0aW9uQmFyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIHNpZ25Jbk1vZGFsOiBCc01vZGFsUmVmO1xuICAgIHNpZ25VcFNlY29uZFN0ZXBNb2RhbDogQnNNb2RhbFJlZjtcbiAgICBGUkdDcmF0ZTogbnVtYmVyO1xuICAgIEJUQ3JhdGU6IG51bWJlcjtcbiAgICBjdXJyZW50VXNlciA9IG5ldyBVc2VyO1xuICAgIGVycm9yOiBhbnk7XG4gICAgbW9iaWxlTWVudVNhdGU6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIGNvbnN0cnVjdG9yKCBwcml2YXRlIGF1dGhlbnRpY2F0aW9uU2VydmljZTogQXV0aGVudGljYXRpb25TZXJ2aWNlLFxuICAgICAgICAgICAgICAgICBwcml2YXRlIGJ1eVNlbGxTZXJ2aWNlOiBCdXlTZWxsU2VydmljZSxcbiAgICAgICAgICAgICAgICAgcHJpdmF0ZSBtb2RhbFNlcnZpY2U6IEJzTW9kYWxTZXJ2aWNlLFxuICAgICAgICAgICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgICAgICAgICAgICAgICBwcml2YXRlIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSwgKSB7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMudXNlclNlcnZpY2UuZ2V0Q3VycmVudFVzZXIoKVxuICAgICAgICAgICAgLnN1YnNjcmliZSh1c2VyRGF0YSA9PiB7dGhpcy5kb1VzZXJVcGRhdGUodXNlckRhdGEpfSk7XG4gICAgICAgIHRoaXMuZ2V0RlJHQ3JhdGUoKTtcbiAgICAgICAgdGhpcy5nZXRCVENyYXRlKCk7XG4gICAgICAgIHRoaXMucm91dGVyLmV2ZW50cy5zdWJzY3JpYmUocmVzID0+IHt0aGlzLm1vYmlsZU1lbnVTYXRlID0gZmFsc2U7fSk7XG4gICAgfVxuXG4gICAgc2hvd01lbnUoKSB7XG4gICAgICAgIHRoaXMubW9iaWxlTWVudVNhdGUgPSAhdGhpcy5tb2JpbGVNZW51U2F0ZTtcbiAgICB9XG5cbiAgICBkb1VzZXJVcGRhdGUodXNlckRhdGEpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50VXNlciA9IHVzZXJEYXRhO1xuICAgICAgICBpZiAodGhpcy5jdXJyZW50VXNlcikge1xuICAgICAgICAgICAgaWYgKCB0aGlzLmN1cnJlbnRVc2VyLmZpcnN0X25hbWU9PScnIHx8IHRoaXMuY3VycmVudFVzZXIubGFzdF9uYW1lPT0nJyApIHtcbiAgICAgICAgICAgICAgICBpZiAoICF0aGlzLnNpZ25VcFNlY29uZFN0ZXBNb2RhbCApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaWduVXBTZWNvbmRTdGVwTW9kYWwgPSB0aGlzLm1vZGFsU2VydmljZS5zaG93KFNpZ25VcFNlY29uZFN0ZXBDb21wb25lbnQpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0RlJHQ3JhdGUoKSB7XG4gICAgICAgIHZhciBGUkdDUmF0ZU1vZGVsID0gbmV3IEV4Y2hhbmdlUmF0ZTtcbiAgICAgICAgRlJHQ1JhdGVNb2RlbFtcIm9wZXJhdGlvblwiXSA9ICdCVVknO1xuICAgICAgICBGUkdDUmF0ZU1vZGVsW1wid2FsbGV0X2Zyb21fY3VycmVuY3lcIl0gPSAnVVNEJztcbiAgICAgICAgRlJHQ1JhdGVNb2RlbFtcIndhbGxldF90b19jdXJyZW5jeVwiXSA9ICdGUkdDJztcbiAgICAgICAgdGhpcy5idXlTZWxsU2VydmljZS5leGNoYW5nZVJhdGUoRlJHQ1JhdGVNb2RlbClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoIGRhdGEgPT4geyB0aGlzLkZSR0NyYXRlID0gZGF0YTt9KTtcbiAgICB9XG5cbiAgICBnZXRCVENyYXRlKCkge1xuICAgICAgICB2YXIgQlRDUmF0ZU1vZGVsID0gbmV3IEV4Y2hhbmdlUmF0ZTtcbiAgICAgICAgQlRDUmF0ZU1vZGVsW1wib3BlcmF0aW9uXCJdID0gJ0JVWSc7XG4gICAgICAgIEJUQ1JhdGVNb2RlbFtcIndhbGxldF9mcm9tX2N1cnJlbmN5XCJdID0gJ1VTRCc7XG4gICAgICAgIEJUQ1JhdGVNb2RlbFtcIndhbGxldF90b19jdXJyZW5jeVwiXSA9ICdCVEMnO1xuICAgICAgICB0aGlzLmJ1eVNlbGxTZXJ2aWNlLmV4Y2hhbmdlUmF0ZShCVENSYXRlTW9kZWwpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKCBkYXRhID0+IHsgdGhpcy5CVENyYXRlID0gZGF0YTt9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb3Blbk1vZGFsV2l0aENvbXBvbmVudCgpIHtcbiAgICAgICAgdGhpcy5zaWduSW5Nb2RhbCA9IHRoaXMubW9kYWxTZXJ2aWNlLnNob3coU2lnbkluQ29tcG9uZW50KTtcbiAgICB9XG5cbiAgICBkb0xvZ291dCgpIHtcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvblNlcnZpY2UubG9nb3V0KCkuc3Vic2NyaWJlKCAoZGF0YSkgPT4ge30pO1xuICAgIH1cblxufVxuIl19