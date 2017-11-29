"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var index_1 = require("./../_services/index");
var index_2 = require("./../_models/index");
var AdminFeesComponent = (function () {
    function AdminFeesComponent(rateFeeService) {
        this.rateFeeService = rateFeeService;
        this.fees = new Array();
        this.feeModel = new index_2.ChangeFee;
        this.messageSuccess = false;
    }
    AdminFeesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.rateFeeService.getFees()
            .subscribe(function (data) {
            _this.fees = [];
            for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                var fee = data_1[_i];
                if (fee.operation_type == "D") {
                    fee['operation'] = 'Deposit';
                    _this.fees.push(fee);
                }
                else if (fee.operation_type == "W") {
                    fee['operation'] = 'Withdraw';
                    _this.fees.push(fee);
                }
            }
        });
    };
    AdminFeesComponent.prototype.updateFee = function (new_fee) {
        var _this = this;
        this.messageSuccess = false;
        this.messageError = "";
        this.rateFeeService.updateFee(new_fee)
            .subscribe(function (data) { _this.messageSuccess = true; }, function (error) { _this.messageError = error.detail; });
    };
    AdminFeesComponent = __decorate([
        core_1.Component({
            selector: 'admin-fees',
            templateUrl: './admin-rates-fees-fees.component.html',
            styleUrls: ['./admin-rates-fees-fees.component.css']
        }),
        __metadata("design:paramtypes", [index_1.RateFeeService])
    ], AdminFeesComponent);
    return AdminFeesComponent;
}());
exports.AdminFeesComponent = AdminFeesComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRtaW4tcmF0ZXMtZmVlcy1mZWVzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFkbWluLXJhdGVzLWZlZXMtZmVlcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkU7QUFFM0UsOENBQWtGO0FBQ2xGLDRDQUFnRjtBQVVoRjtJQU1JLDRCQUFvQixjQUE4QjtRQUE5QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFMbEQsU0FBSSxHQUFHLElBQUksS0FBSyxFQUFPLENBQUM7UUFDeEIsYUFBUSxHQUFHLElBQUksaUJBQVMsQ0FBQztRQUN6QixtQkFBYyxHQUFHLEtBQUssQ0FBQztJQUdnQyxDQUFDO0lBRXhELHFDQUFRLEdBQVI7UUFBQSxpQkFhQztRQVpHLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFO2FBQ3hCLFNBQVMsQ0FBQyxVQUFBLElBQUk7WUFBTSxLQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztZQUNoQyxHQUFHLENBQUMsQ0FBWSxVQUFJLEVBQUosYUFBSSxFQUFKLGtCQUFJLEVBQUosSUFBSTtnQkFBZixJQUFJLEdBQUcsYUFBQTtnQkFDUixFQUFFLENBQUMsQ0FBRSxHQUFHLENBQUMsY0FBYyxJQUFFLEdBQUksQ0FBQyxDQUFDLENBQUM7b0JBQzVCLEdBQUcsQ0FBQyxXQUFXLENBQUMsR0FBQyxTQUFTLENBQUM7b0JBQzNCLEtBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUN4QixDQUFDO2dCQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBRSxHQUFHLENBQUMsY0FBYyxJQUFFLEdBQUksQ0FBQyxDQUFDLENBQUM7b0JBQ25DLEdBQUcsQ0FBQyxXQUFXLENBQUMsR0FBQyxVQUFVLENBQUM7b0JBQzVCLEtBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUN4QixDQUFDO2FBQ0o7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNYLENBQUM7SUFFRCxzQ0FBUyxHQUFULFVBQVUsT0FBWTtRQUF0QixpQkFNQztRQUxHLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO1FBQzVCLElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQzthQUNqQyxTQUFTLENBQUUsVUFBQSxJQUFJLElBQU0sS0FBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsQ0FBQSxDQUFDLEVBQ3RDLFVBQUEsS0FBSyxJQUFNLEtBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFBLENBQUMsQ0FBQyxDQUFDO0lBQ25FLENBQUM7SUE3QlEsa0JBQWtCO1FBTDlCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsWUFBWTtZQUN0QixXQUFXLEVBQUUsd0NBQXdDO1lBQ3JELFNBQVMsRUFBRSxDQUFDLHVDQUF1QyxDQUFDO1NBQ3ZELENBQUM7eUNBT3NDLHNCQUFjO09BTnpDLGtCQUFrQixDQThCOUI7SUFBRCx5QkFBQztDQUFBLEFBOUJELElBOEJDO0FBOUJZLGdEQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gICAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBSYXRlRmVlU2VydmljZSB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tICcuLy4uL19zZXJ2aWNlcy9pbmRleCc7XG5pbXBvcnQgeyBDaGFuZ2VGZWUgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tICcuLy4uL19tb2RlbHMvaW5kZXgnO1xuaW1wb3J0IHsgRmVlIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSAnLi8uLi9fbW9kZWxzL2luZGV4JztcbmltcG9ydCB7IFNlcnZpY2UgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gJy4vLi4vX21vZGVscy9pbmRleCc7XG5cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdhZG1pbi1mZWVzJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vYWRtaW4tcmF0ZXMtZmVlcy1mZWVzLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9hZG1pbi1yYXRlcy1mZWVzLWZlZXMuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEFkbWluRmVlc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgZmVlcyA9IG5ldyBBcnJheTxGZWU+KCk7XG4gICAgZmVlTW9kZWwgPSBuZXcgQ2hhbmdlRmVlO1xuICAgIG1lc3NhZ2VTdWNjZXNzID0gZmFsc2U7XG4gICAgbWVzc2FnZUVycm9yOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJhdGVGZWVTZXJ2aWNlOiBSYXRlRmVlU2VydmljZSApIHsgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMucmF0ZUZlZVNlcnZpY2UuZ2V0RmVlcygpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKGRhdGEgPT4geyB0aGlzLmZlZXMgPSBbXTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBmZWUgb2YgZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIGZlZS5vcGVyYXRpb25fdHlwZT09XCJEXCIgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmZWVbJ29wZXJhdGlvbiddPSdEZXBvc2l0JztcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmVlcy5wdXNoKGZlZSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoIGZlZS5vcGVyYXRpb25fdHlwZT09XCJXXCIgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmZWVbJ29wZXJhdGlvbiddPSdXaXRoZHJhdyc7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZlZXMucHVzaChmZWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdXBkYXRlRmVlKG5ld19mZWU6IGFueSkge1xuICAgICAgICB0aGlzLm1lc3NhZ2VTdWNjZXNzID0gZmFsc2U7XG4gICAgICAgIHRoaXMubWVzc2FnZUVycm9yID0gXCJcIjtcbiAgICAgICAgdGhpcy5yYXRlRmVlU2VydmljZS51cGRhdGVGZWUobmV3X2ZlZSlcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoIGRhdGEgPT4geyB0aGlzLm1lc3NhZ2VTdWNjZXNzID0gdHJ1ZTt9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IgPT4geyB0aGlzLm1lc3NhZ2VFcnJvciA9IGVycm9yLmRldGFpbDt9KTtcbiAgICB9XG59XG4iXX0=