"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var index_1 = require("./../_services/index");
var index_2 = require("./../_models/index");
var AdminRatesComponent = (function () {
    function AdminRatesComponent(rateFeeService) {
        this.rateFeeService = rateFeeService;
        this.activeRates = new Array();
        this.rateModel = new index_2.ChangeRate;
        this.messageSuccess = false;
    }
    AdminRatesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.rateFeeService.getActiveRates()
            .subscribe(function (data) { _this.activeRates = data; });
    };
    AdminRatesComponent.prototype.changeRate = function (newRate) {
        var _this = this;
        this.messageSuccess = false;
        this.messageError = "";
        this.rateFeeService.changeRate(newRate)
            .subscribe(function (data) { _this.messageSuccess = true; }, function (error) { _this.messageError = error.detail; });
    };
    AdminRatesComponent = __decorate([
        core_1.Component({
            selector: 'admin-rates',
            templateUrl: './admin-rates-fees-rates.component.html',
            styleUrls: ['./admin-rates-fees-rates.component.css']
        }),
        __metadata("design:paramtypes", [index_1.RateFeeService])
    ], AdminRatesComponent);
    return AdminRatesComponent;
}());
exports.AdminRatesComponent = AdminRatesComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRtaW4tcmF0ZXMtZmVlcy1yYXRlcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhZG1pbi1yYXRlcy1mZWVzLXJhdGVzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyRTtBQUUzRSw4Q0FBa0Y7QUFDbEYsNENBQWdGO0FBU2hGO0lBTUksNkJBQW9CLGNBQThCO1FBQTlCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUxsRCxnQkFBVyxHQUFHLElBQUksS0FBSyxFQUFRLENBQUM7UUFDaEMsY0FBUyxHQUFHLElBQUksa0JBQVUsQ0FBQztRQUMzQixtQkFBYyxHQUFHLEtBQUssQ0FBQztJQUdnQyxDQUFDO0lBRXhELHNDQUFRLEdBQVI7UUFBQSxpQkFHQztRQUZHLElBQUksQ0FBQyxjQUFjLENBQUMsY0FBYyxFQUFFO2FBQy9CLFNBQVMsQ0FBQyxVQUFBLElBQUksSUFBTSxLQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxDQUFBLENBQUMsQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFFRCx3Q0FBVSxHQUFWLFVBQVksT0FBWTtRQUF4QixpQkFNQztRQUxHLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO1FBQzVCLElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQzthQUNsQyxTQUFTLENBQUUsVUFBQSxJQUFJLElBQU0sS0FBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsQ0FBQSxDQUFDLEVBQ3RDLFVBQUEsS0FBSyxJQUFNLEtBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFBLENBQUMsQ0FBQyxDQUFDO0lBQ25FLENBQUM7SUFuQlEsbUJBQW1CO1FBTC9CLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsYUFBYTtZQUN2QixXQUFXLEVBQUUseUNBQXlDO1lBQ3RELFNBQVMsRUFBRSxDQUFDLHdDQUF3QyxDQUFDO1NBQ3hELENBQUM7eUNBT3NDLHNCQUFjO09BTnpDLG1CQUFtQixDQW9CL0I7SUFBRCwwQkFBQztDQUFBLEFBcEJELElBb0JDO0FBcEJZLGtEQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gICAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBSYXRlRmVlU2VydmljZSB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tICcuLy4uL19zZXJ2aWNlcy9pbmRleCc7XG5pbXBvcnQgeyBDaGFuZ2VSYXRlIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tICcuLy4uL19tb2RlbHMvaW5kZXgnO1xuaW1wb3J0IHsgUmF0ZSB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSAnLi8uLi9fbW9kZWxzL2luZGV4JztcbmltcG9ydCB7IFBhaXIgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gJy4vLi4vX21vZGVscy9pbmRleCc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnYWRtaW4tcmF0ZXMnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9hZG1pbi1yYXRlcy1mZWVzLXJhdGVzLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9hZG1pbi1yYXRlcy1mZWVzLXJhdGVzLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBBZG1pblJhdGVzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBhY3RpdmVSYXRlcyA9IG5ldyBBcnJheTxSYXRlPigpO1xuICAgIHJhdGVNb2RlbCA9IG5ldyBDaGFuZ2VSYXRlO1xuICAgIG1lc3NhZ2VTdWNjZXNzID0gZmFsc2U7XG4gICAgbWVzc2FnZUVycm9yOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJhdGVGZWVTZXJ2aWNlOiBSYXRlRmVlU2VydmljZSApIHsgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMucmF0ZUZlZVNlcnZpY2UuZ2V0QWN0aXZlUmF0ZXMoKVxuICAgICAgICAgICAgLnN1YnNjcmliZShkYXRhID0+IHsgdGhpcy5hY3RpdmVSYXRlcyA9IGRhdGE7fSk7XG4gICAgfVxuXG4gICAgY2hhbmdlUmF0ZSggbmV3UmF0ZTogYW55KSB7XG4gICAgICAgIHRoaXMubWVzc2FnZVN1Y2Nlc3MgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5tZXNzYWdlRXJyb3IgPSBcIlwiO1xuICAgICAgICB0aGlzLnJhdGVGZWVTZXJ2aWNlLmNoYW5nZVJhdGUobmV3UmF0ZSlcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoIGRhdGEgPT4geyB0aGlzLm1lc3NhZ2VTdWNjZXNzID0gdHJ1ZTt9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IgPT4geyB0aGlzLm1lc3NhZ2VFcnJvciA9IGVycm9yLmRldGFpbDt9KTtcbiAgICB9XG59XG4iXX0=