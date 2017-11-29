"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var modal_options_class_1 = require("ngx-bootstrap/modal/modal-options.class");
var index_1 = require("./../_models/index");
var index_2 = require("./../_models/index");
var index_3 = require("./../_services/index");
var index_4 = require("./../_services/index");
var AccountsDepositUSDComponent = (function () {
    function AccountsDepositUSDComponent(rateFeeService, walletService, bsModalRef, elRef) {
        var _this = this;
        this.rateFeeService = rateFeeService;
        this.walletService = walletService;
        this.bsModalRef = bsModalRef;
        this.elRef = elRef;
        this.depositModel = new index_1.DepositUSD;
        this.depositForm = new index_2.DepositUSDForm;
        this.services = new Array();
        this.rateFeeService.getFilterServices('USD', 'D')
            .subscribe(function (data) { _this.services = data; });
    }
    AccountsDepositUSDComponent.prototype.ngOnInit = function () { };
    AccountsDepositUSDComponent.prototype.calculateAmount = function (amount) {
        if (amount) {
            this.feeAmount = Number((amount * this.depositModel.service.percent_fee / 100 + this.depositModel.service.const_fee).toFixed(2));
            this.totalAmount = Number((amount + this.feeAmount).toFixed(2));
        }
        else {
            this.depositModel["amount"] = 0;
            this.totalAmount = 0;
        }
    };
    AccountsDepositUSDComponent.prototype.depositUSD = function () {
        var _this = this;
        this.depositModel.wallet = this.walletID;
        this.walletService.depositUSD(this.depositModel)
            .subscribe(function (data) {
            _this.depositForm = data.form_data;
            console.log(data);
            console.log(_this.elRef.nativeElement.querySelector('form'));
            setTimeout(function () { _this.elRef.nativeElement.querySelector('form').submit(); }, 0);
        });
    };
    AccountsDepositUSDComponent = __decorate([
        core_1.Component({
            selector: 'accounts-deposit-usd',
            templateUrl: './accounts-deposit-usd.component.html',
            styleUrls: ['./accounts-deposit-usd.component.css']
        }),
        __metadata("design:paramtypes", [index_3.RateFeeService,
            index_4.WalletService,
            modal_options_class_1.BsModalRef,
            core_1.ElementRef])
    ], AccountsDepositUSDComponent);
    return AccountsDepositUSDComponent;
}());
exports.AccountsDepositUSDComponent = AccountsDepositUSDComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3VudHMtZGVwb3NpdC11c2QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWNjb3VudHMtZGVwb3NpdC11c2QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJFO0FBQzNFLCtFQUFxRztBQUVyRyw0Q0FBZ0Y7QUFDaEYsNENBQWdGO0FBR2hGLDhDQUFrRjtBQUNsRiw4Q0FBa0Y7QUFPbEY7SUFVSSxxQ0FBcUIsY0FBOEIsRUFDOUIsYUFBNEIsRUFDN0IsVUFBc0IsRUFDckIsS0FBaUI7UUFIdEMsaUJBTUM7UUFOb0IsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzdCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDckIsVUFBSyxHQUFMLEtBQUssQ0FBWTtRQVR0QyxpQkFBWSxHQUFHLElBQUksa0JBQVUsQ0FBQztRQUM5QixnQkFBVyxHQUFHLElBQUksc0JBQWMsQ0FBQztRQUNqQyxhQUFRLEdBQUcsSUFBSSxLQUFLLEVBQVcsQ0FBQztRQVE1QixJQUFJLENBQUMsY0FBYyxDQUFDLGlCQUFpQixDQUFDLEtBQUssRUFBRSxHQUFHLENBQUM7YUFDekMsU0FBUyxDQUFFLFVBQUEsSUFBSSxJQUFNLEtBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLENBQUEsQ0FBQyxDQUFDLENBQUM7SUFDekQsQ0FBQztJQUVELDhDQUFRLEdBQVIsY0FBYSxDQUFDO0lBRWQscURBQWUsR0FBZixVQUFpQixNQUFNO1FBQ25CLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDVCxJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxDQUFDLE1BQU0sR0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEdBQUMsR0FBRyxHQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzNILElBQUksQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDLENBQUMsTUFBTSxHQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNsRSxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSixJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNoQyxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztRQUN6QixDQUFDO0lBQ0wsQ0FBQztJQUVELGdEQUFVLEdBQVY7UUFBQSxpQkFRQztRQVBHLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDekMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQzthQUMzQyxTQUFTLENBQUUsVUFBQSxJQUFJO1lBQU0sS0FBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1lBQ3BELE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUM1RCxVQUFVLENBQUMsY0FBSyxLQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUEsQ0FBQSxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUM7UUFDaEYsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBdENRLDJCQUEyQjtRQUx2QyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLHNCQUFzQjtZQUNoQyxXQUFXLEVBQUUsdUNBQXVDO1lBQ3BELFNBQVMsRUFBRSxDQUFDLHNDQUFzQyxDQUFDO1NBQ3RELENBQUM7eUNBV3VDLHNCQUFjO1lBQ2YscUJBQWE7WUFDakIsZ0NBQVU7WUFDZCxpQkFBVTtPQWI3QiwyQkFBMkIsQ0F3Q3ZDO0lBQUQsa0NBQUM7Q0FBQSxBQXhDRCxJQXdDQztBQXhDWSxrRUFBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbnB1dCwgQ29tcG9uZW50LCBPbkluaXQsIEVsZW1lbnRSZWYgfSAgICAgICBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJzTW9kYWxSZWYgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gJ25neC1ib290c3RyYXAvbW9kYWwvbW9kYWwtb3B0aW9ucy5jbGFzcyc7XG5cbmltcG9ydCB7IERlcG9zaXRVU0QgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gJy4vLi4vX21vZGVscy9pbmRleCc7XG5pbXBvcnQgeyBEZXBvc2l0VVNERm9ybSB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tICcuLy4uL19tb2RlbHMvaW5kZXgnO1xuaW1wb3J0IHsgU2VydmljZSB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSAnLi8uLi9fbW9kZWxzL2luZGV4JztcblxuaW1wb3J0IHsgUmF0ZUZlZVNlcnZpY2UgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSAnLi8uLi9fc2VydmljZXMvaW5kZXgnO1xuaW1wb3J0IHsgV2FsbGV0U2VydmljZSB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSAnLi8uLi9fc2VydmljZXMvaW5kZXgnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2FjY291bnRzLWRlcG9zaXQtdXNkJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vYWNjb3VudHMtZGVwb3NpdC11c2QuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL2FjY291bnRzLWRlcG9zaXQtdXNkLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBBY2NvdW50c0RlcG9zaXRVU0RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgd2FsbGV0SUQ6IHN0cmluZztcbiAgICB3YWxsZXRDdXJyZW5jeTogc3RyaW5nO1xuICAgIGRlcG9zaXRNb2RlbCA9IG5ldyBEZXBvc2l0VVNEO1xuICAgIGRlcG9zaXRGb3JtID0gbmV3IERlcG9zaXRVU0RGb3JtO1xuICAgIHNlcnZpY2VzID0gbmV3IEFycmF5PFNlcnZpY2U+KCk7XG4gICAgZmVlQW1vdW50OiBudW1iZXI7XG4gICAgdG90YWxBbW91bnQ6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKCBwcml2YXRlIHJhdGVGZWVTZXJ2aWNlOiBSYXRlRmVlU2VydmljZSxcbiAgICAgICAgICAgICAgICAgcHJpdmF0ZSB3YWxsZXRTZXJ2aWNlOiBXYWxsZXRTZXJ2aWNlLFxuICAgICAgICAgICAgICAgICBwdWJsaWMgYnNNb2RhbFJlZjogQnNNb2RhbFJlZixcbiAgICAgICAgICAgICAgICAgcHJpdmF0ZSBlbFJlZjogRWxlbWVudFJlZiwgKSB7XG4gICAgICAgIHRoaXMucmF0ZUZlZVNlcnZpY2UuZ2V0RmlsdGVyU2VydmljZXMoJ1VTRCcsICdEJylcbiAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoIGRhdGEgPT4geyB0aGlzLnNlcnZpY2VzID0gZGF0YTt9KTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHsgfVxuXG4gICAgY2FsY3VsYXRlQW1vdW50IChhbW91bnQpIHtcbiAgICAgICAgaWYgKGFtb3VudCkge1xuICAgICAgICAgICAgdGhpcy5mZWVBbW91bnQgPSBOdW1iZXIoKGFtb3VudCp0aGlzLmRlcG9zaXRNb2RlbC5zZXJ2aWNlLnBlcmNlbnRfZmVlLzEwMCt0aGlzLmRlcG9zaXRNb2RlbC5zZXJ2aWNlLmNvbnN0X2ZlZSkudG9GaXhlZCgyKSk7XG4gICAgICAgICAgICB0aGlzLnRvdGFsQW1vdW50ID0gTnVtYmVyKChhbW91bnQrdGhpcy5mZWVBbW91bnQpLnRvRml4ZWQoMikpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5kZXBvc2l0TW9kZWxbXCJhbW91bnRcIl0gPSAwO1xuICAgICAgICAgICAgdGhpcy50b3RhbEFtb3VudCA9IDA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkZXBvc2l0VVNEKCkge1xuICAgICAgICB0aGlzLmRlcG9zaXRNb2RlbC53YWxsZXQgPSB0aGlzLndhbGxldElEO1xuICAgICAgICB0aGlzLndhbGxldFNlcnZpY2UuZGVwb3NpdFVTRCh0aGlzLmRlcG9zaXRNb2RlbClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoIGRhdGEgPT4geyB0aGlzLmRlcG9zaXRGb3JtID0gZGF0YS5mb3JtX2RhdGE7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0nKSk7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKT0+e3RoaXMuZWxSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtJykuc3VibWl0KCl9LDApO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG59XG4iXX0=