"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var modal_options_class_1 = require("ngx-bootstrap/modal/modal-options.class");
var index_1 = require("./../_models/index");
var index_2 = require("./../_services/index");
var AccountsDepositComponent = (function () {
    function AccountsDepositComponent(walletService, bsModalRef) {
        this.walletService = walletService;
        this.bsModalRef = bsModalRef;
        this.depositModel = new index_1.Deposit;
    }
    AccountsDepositComponent.prototype.ngOnInit = function () { };
    AccountsDepositComponent.prototype.deposit = function () {
        var _this = this;
        this.depositModel.wallet = this.walletID;
        this.walletService.deposit(this.depositModel)
            .subscribe(function (data) {
            _this.address = data.address;
            _this.qr_code = data.qr_code;
            _this.URI = data.uri;
        });
    };
    AccountsDepositComponent = __decorate([
        core_1.Component({
            selector: 'accounts-deposit',
            templateUrl: './accounts-deposit.component.html',
            styleUrls: ['./accounts-deposit.component.css']
        }),
        __metadata("design:paramtypes", [index_2.WalletService,
            modal_options_class_1.BsModalRef])
    ], AccountsDepositComponent);
    return AccountsDepositComponent;
}());
exports.AccountsDepositComponent = AccountsDepositComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3VudHMtZGVwb3NpdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhY2NvdW50cy1kZXBvc2l0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyRTtBQUMzRSwrRUFBcUc7QUFHckcsNENBQWdGO0FBQ2hGLDhDQUFrRjtBQU9sRjtJQVNJLGtDQUFxQixhQUE0QixFQUM3QixVQUFzQjtRQURyQixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM3QixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBTjFDLGlCQUFZLEdBQUcsSUFBSSxlQUFPLENBQUM7SUFPM0IsQ0FBQztJQUVELDJDQUFRLEdBQVIsY0FBYSxDQUFDO0lBRWQsMENBQU8sR0FBUDtRQUFBLGlCQU9DO1FBTkcsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUN6QyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO2FBQ3JDLFNBQVMsQ0FBRSxVQUFBLElBQUk7WUFBTSxLQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDekMsS0FBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQzVCLEtBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQztRQUM3QixDQUFDLENBQUMsQ0FBQztJQUNkLENBQUM7SUF0QlEsd0JBQXdCO1FBTHBDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsa0JBQWtCO1lBQzVCLFdBQVcsRUFBRSxtQ0FBbUM7WUFDaEQsU0FBUyxFQUFFLENBQUMsa0NBQWtDLENBQUM7U0FDbEQsQ0FBQzt5Q0FVc0MscUJBQWE7WUFDakIsZ0NBQVU7T0FWakMsd0JBQXdCLENBd0JwQztJQUFELCtCQUFDO0NBQUEsQUF4QkQsSUF3QkM7QUF4QlksNERBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5wdXQsIENvbXBvbmVudCwgT25Jbml0IH0gICAgICAgICAgICAgICAgICAgZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCc01vZGFsUmVmIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tICduZ3gtYm9vdHN0cmFwL21vZGFsL21vZGFsLW9wdGlvbnMuY2xhc3MnO1xuXG5cbmltcG9ydCB7IERlcG9zaXQgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gJy4vLi4vX21vZGVscy9pbmRleCc7XG5pbXBvcnQgeyBXYWxsZXRTZXJ2aWNlIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tICcuLy4uL19zZXJ2aWNlcy9pbmRleCc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnYWNjb3VudHMtZGVwb3NpdCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2FjY291bnRzLWRlcG9zaXQuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL2FjY291bnRzLWRlcG9zaXQuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEFjY291bnRzRGVwb3NpdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICB3YWxsZXRJRDogc3RyaW5nO1xuICAgIHdhbGxldEN1cnJlbmN5OiBzdHJpbmc7XG4gICAgZGVwb3NpdE1vZGVsID0gbmV3IERlcG9zaXQ7XG4gICAgYWRkcmVzczogc3RyaW5nO1xuICAgIHFyX2NvZGU6IGFueTtcbiAgICBVUkk6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKCBwcml2YXRlIHdhbGxldFNlcnZpY2U6IFdhbGxldFNlcnZpY2UsXG4gICAgICAgICAgICAgICAgIHB1YmxpYyBic01vZGFsUmVmOiBCc01vZGFsUmVmLCkge1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkgeyB9XG5cbiAgICBkZXBvc2l0KCkge1xuICAgICAgICB0aGlzLmRlcG9zaXRNb2RlbC53YWxsZXQgPSB0aGlzLndhbGxldElEO1xuICAgICAgICB0aGlzLndhbGxldFNlcnZpY2UuZGVwb3NpdCh0aGlzLmRlcG9zaXRNb2RlbClcbiAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoIGRhdGEgPT4geyB0aGlzLmFkZHJlc3MgPSBkYXRhLmFkZHJlc3M7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnFyX2NvZGUgPSBkYXRhLnFyX2NvZGU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLlVSSSA9IGRhdGEudXJpO1xuICAgICAgICAgICAgICAgfSk7XG4gICAgfVxuXG59XG4iXX0=