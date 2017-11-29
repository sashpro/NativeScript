"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var modal_options_class_1 = require("ngx-bootstrap/modal/modal-options.class");
var index_1 = require("./../_models/index");
var index_2 = require("./../_services/index");
var index_3 = require("./../_services/index");
var AccountsWithdrawUSDComponent = (function () {
    function AccountsWithdrawUSDComponent(rateFeeService, walletService, bsModalRef, elRef) {
        var _this = this;
        this.rateFeeService = rateFeeService;
        this.walletService = walletService;
        this.bsModalRef = bsModalRef;
        this.elRef = elRef;
        this.withdrawModel = new index_1.WithdrawUSD;
        this.services = new Array();
        this.messageSuccess = false;
        this.rateFeeService.getFilterServices('USD', 'W')
            .subscribe(function (data) { _this.services = data; });
    }
    AccountsWithdrawUSDComponent.prototype.ngOnInit = function () { };
    AccountsWithdrawUSDComponent.prototype.calculateAmount = function (amount) {
        if (amount) {
            this.feeAmount = Number((amount * this.withdrawModel.service.percent_fee / 100 + this.withdrawModel.service.const_fee).toFixed(2));
            this.totalAmount = Number((amount - this.feeAmount).toFixed(2));
        }
        else {
            this.withdrawModel["amount"] = 0;
            this.feeAmount = 0;
            this.totalAmount = 0;
        }
    };
    AccountsWithdrawUSDComponent.prototype.withdrawUSD = function () {
        var _this = this;
        this.messageError = "";
        this.withdrawModel.wallet = this.walletID;
        this.withdrawModel.currency = this.walletCurrency;
        this.walletService.withdrawUSD(this.withdrawModel)
            .subscribe(function (data) {
            _this.messageSuccess = true;
            _this.walletService.getWallets();
        }, function (error) { _this.messageError = error.detail; });
    };
    AccountsWithdrawUSDComponent = __decorate([
        core_1.Component({
            selector: 'accounts-withdraw-usd',
            templateUrl: './accounts-withdraw-usd.component.html',
            styleUrls: ['./accounts-withdraw-usd.component.css']
        }),
        __metadata("design:paramtypes", [index_2.RateFeeService,
            index_3.WalletService,
            modal_options_class_1.BsModalRef,
            core_1.ElementRef])
    ], AccountsWithdrawUSDComponent);
    return AccountsWithdrawUSDComponent;
}());
exports.AccountsWithdrawUSDComponent = AccountsWithdrawUSDComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3VudHMtd2l0aGRyYXctdXNkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFjY291bnRzLXdpdGhkcmF3LXVzZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkU7QUFDM0UsK0VBQXFHO0FBRXJHLDRDQUFnRjtBQUdoRiw4Q0FBa0Y7QUFDbEYsOENBQWtGO0FBT2xGO0lBV0ksc0NBQXFCLGNBQThCLEVBQzlCLGFBQTRCLEVBQzdCLFVBQXNCLEVBQ3JCLEtBQWlCO1FBSHRDLGlCQU1DO1FBTm9CLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM3QixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3JCLFVBQUssR0FBTCxLQUFLLENBQVk7UUFWdEMsa0JBQWEsR0FBRyxJQUFJLG1CQUFXLENBQUM7UUFDaEMsYUFBUSxHQUFHLElBQUksS0FBSyxFQUFXLENBQUM7UUFHaEMsbUJBQWMsR0FBRyxLQUFLLENBQUM7UUFPbkIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDO2FBQ3pDLFNBQVMsQ0FBRSxVQUFBLElBQUksSUFBTSxLQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxDQUFBLENBQUMsQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFFRCwrQ0FBUSxHQUFSLGNBQWEsQ0FBQztJQUVkLHNEQUFlLEdBQWYsVUFBaUIsTUFBTTtRQUNuQixFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ1QsSUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsQ0FBQyxNQUFNLEdBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsV0FBVyxHQUFDLEdBQUcsR0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM3SCxJQUFJLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQyxDQUFDLE1BQU0sR0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbEUsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDakMsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7WUFDbkIsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7UUFDekIsQ0FBQztJQUNMLENBQUM7SUFFRCxrREFBVyxHQUFYO1FBQUEsaUJBUUM7UUFQRyxJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQzFDLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUM7UUFDbEQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQzthQUM3QyxTQUFTLENBQUUsVUFBQSxJQUFJO1lBQU0sS0FBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7WUFDekMsS0FBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUFBLENBQUMsRUFDckMsVUFBQSxLQUFLLElBQU0sS0FBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUEsQ0FBQyxDQUFDLENBQUM7SUFDM0QsQ0FBQztJQXhDUSw0QkFBNEI7UUFMeEMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSx1QkFBdUI7WUFDakMsV0FBVyxFQUFFLHdDQUF3QztZQUNyRCxTQUFTLEVBQUUsQ0FBQyx1Q0FBdUMsQ0FBQztTQUN2RCxDQUFDO3lDQVl1QyxzQkFBYztZQUNmLHFCQUFhO1lBQ2pCLGdDQUFVO1lBQ2QsaUJBQVU7T0FkN0IsNEJBQTRCLENBMEN4QztJQUFELG1DQUFDO0NBQUEsQUExQ0QsSUEwQ0M7QUExQ1ksb0VBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5wdXQsIENvbXBvbmVudCwgT25Jbml0LCBFbGVtZW50UmVmIH0gICAgICAgZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCc01vZGFsUmVmIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tICduZ3gtYm9vdHN0cmFwL21vZGFsL21vZGFsLW9wdGlvbnMuY2xhc3MnO1xuXG5pbXBvcnQgeyBXaXRoZHJhd1VTRCB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tICcuLy4uL19tb2RlbHMvaW5kZXgnO1xuaW1wb3J0IHsgU2VydmljZSB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSAnLi8uLi9fbW9kZWxzL2luZGV4JztcblxuaW1wb3J0IHsgUmF0ZUZlZVNlcnZpY2UgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSAnLi8uLi9fc2VydmljZXMvaW5kZXgnO1xuaW1wb3J0IHsgV2FsbGV0U2VydmljZSB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSAnLi8uLi9fc2VydmljZXMvaW5kZXgnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2FjY291bnRzLXdpdGhkcmF3LXVzZCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2FjY291bnRzLXdpdGhkcmF3LXVzZC5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vYWNjb3VudHMtd2l0aGRyYXctdXNkLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBBY2NvdW50c1dpdGhkcmF3VVNEQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIHdhbGxldElEOiBzdHJpbmc7XG4gICAgd2FsbGV0Q3VycmVuY3k6IHN0cmluZztcbiAgICB3aXRoZHJhd01vZGVsID0gbmV3IFdpdGhkcmF3VVNEO1xuICAgIHNlcnZpY2VzID0gbmV3IEFycmF5PFNlcnZpY2U+KCk7XG4gICAgZmVlQW1vdW50OiBudW1iZXI7XG4gICAgdG90YWxBbW91bnQ6IG51bWJlcjtcbiAgICBtZXNzYWdlU3VjY2VzcyA9IGZhbHNlO1xuICAgIG1lc3NhZ2VFcnJvcjogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoIHByaXZhdGUgcmF0ZUZlZVNlcnZpY2U6IFJhdGVGZWVTZXJ2aWNlLFxuICAgICAgICAgICAgICAgICBwcml2YXRlIHdhbGxldFNlcnZpY2U6IFdhbGxldFNlcnZpY2UsXG4gICAgICAgICAgICAgICAgIHB1YmxpYyBic01vZGFsUmVmOiBCc01vZGFsUmVmLFxuICAgICAgICAgICAgICAgICBwcml2YXRlIGVsUmVmOiBFbGVtZW50UmVmLCApIHtcbiAgICAgICAgdGhpcy5yYXRlRmVlU2VydmljZS5nZXRGaWx0ZXJTZXJ2aWNlcygnVVNEJywgJ1cnKVxuICAgICAgICAgICAgICAgLnN1YnNjcmliZSggZGF0YSA9PiB7IHRoaXMuc2VydmljZXMgPSBkYXRhO30pO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkgeyB9XG5cbiAgICBjYWxjdWxhdGVBbW91bnQgKGFtb3VudCkge1xuICAgICAgICBpZiAoYW1vdW50KSB7XG4gICAgICAgICAgICB0aGlzLmZlZUFtb3VudCA9IE51bWJlcigoYW1vdW50KnRoaXMud2l0aGRyYXdNb2RlbC5zZXJ2aWNlLnBlcmNlbnRfZmVlLzEwMCt0aGlzLndpdGhkcmF3TW9kZWwuc2VydmljZS5jb25zdF9mZWUpLnRvRml4ZWQoMikpO1xuICAgICAgICAgICAgdGhpcy50b3RhbEFtb3VudCA9IE51bWJlcigoYW1vdW50LXRoaXMuZmVlQW1vdW50KS50b0ZpeGVkKDIpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMud2l0aGRyYXdNb2RlbFtcImFtb3VudFwiXSA9IDA7XG4gICAgICAgICAgICB0aGlzLmZlZUFtb3VudCA9IDA7XG4gICAgICAgICAgICB0aGlzLnRvdGFsQW1vdW50ID0gMDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHdpdGhkcmF3VVNEKCkge1xuICAgICAgICB0aGlzLm1lc3NhZ2VFcnJvciA9IFwiXCI7XG4gICAgICAgIHRoaXMud2l0aGRyYXdNb2RlbC53YWxsZXQgPSB0aGlzLndhbGxldElEO1xuICAgICAgICB0aGlzLndpdGhkcmF3TW9kZWwuY3VycmVuY3kgPSB0aGlzLndhbGxldEN1cnJlbmN5O1xuICAgICAgICB0aGlzLndhbGxldFNlcnZpY2Uud2l0aGRyYXdVU0QodGhpcy53aXRoZHJhd01vZGVsKVxuICAgICAgICAgICAgLnN1YnNjcmliZSggZGF0YSA9PiB7IHRoaXMubWVzc2FnZVN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLndhbGxldFNlcnZpY2UuZ2V0V2FsbGV0cygpO30sXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4geyB0aGlzLm1lc3NhZ2VFcnJvciA9IGVycm9yLmRldGFpbDt9KTtcbiAgICB9XG5cbn1cbiJdfQ==