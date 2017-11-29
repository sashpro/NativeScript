"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var index_1 = require("../_services/index");
var index_2 = require("../_models/index");
var BuySellOperationSummaryBuyComponent = (function () {
    function BuySellOperationSummaryBuyComponent(buySellService) {
        this.buySellService = buySellService;
        this.buyModel = new index_2.Exchange;
    }
    BuySellOperationSummaryBuyComponent.prototype.ngOnInit = function () {
        this.buyModel = this.buySellService.getBuyExchangeModel();
    };
    BuySellOperationSummaryBuyComponent = __decorate([
        core_1.Component({
            selector: 'buy-sell-operation-summary-buy',
            templateUrl: './buy-sell-operation-summary-buy.component.html',
            styleUrls: ['./buy-sell-operation-summary-buy.component.css']
        }),
        __metadata("design:paramtypes", [index_1.BuySellService])
    ], BuySellOperationSummaryBuyComponent);
    return BuySellOperationSummaryBuyComponent;
}());
exports.BuySellOperationSummaryBuyComponent = BuySellOperationSummaryBuyComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV5LXNlbGwtb3BlcmF0aW9uLXN1bW1hcnktYnV5LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImJ1eS1zZWxsLW9wZXJhdGlvbi1zdW1tYXJ5LWJ1eS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkU7QUFFM0UsNENBQWdGO0FBQ2hGLDBDQUE4RTtBQVE5RTtJQUlJLDZDQUFxQixjQUE4QjtRQUE5QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFGbkQsYUFBUSxHQUFHLElBQUksZ0JBQVEsQ0FBQztJQUVpQyxDQUFDO0lBRTFELHNEQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztJQUM5RCxDQUFDO0lBUlEsbUNBQW1DO1FBTC9DLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsZ0NBQWdDO1lBQzFDLFdBQVcsRUFBRSxpREFBaUQ7WUFDOUQsU0FBUyxFQUFFLENBQUMsZ0RBQWdELENBQUM7U0FDaEUsQ0FBQzt5Q0FLdUMsc0JBQWM7T0FKMUMsbUNBQW1DLENBUy9DO0lBQUQsMENBQUM7Q0FBQSxBQVRELElBU0M7QUFUWSxrRkFBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9ICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQnV5U2VsbFNlcnZpY2UgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSAnLi4vX3NlcnZpY2VzL2luZGV4JztcbmltcG9ydCB7IEV4Y2hhbmdlIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gJy4uL19tb2RlbHMvaW5kZXgnO1xuXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnYnV5LXNlbGwtb3BlcmF0aW9uLXN1bW1hcnktYnV5JyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vYnV5LXNlbGwtb3BlcmF0aW9uLXN1bW1hcnktYnV5LmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9idXktc2VsbC1vcGVyYXRpb24tc3VtbWFyeS1idXkuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEJ1eVNlbGxPcGVyYXRpb25TdW1tYXJ5QnV5Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIGJ1eU1vZGVsID0gbmV3IEV4Y2hhbmdlO1xuXG4gICAgY29uc3RydWN0b3IoIHByaXZhdGUgYnV5U2VsbFNlcnZpY2U6IEJ1eVNlbGxTZXJ2aWNlLCApIHsgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuYnV5TW9kZWwgPSB0aGlzLmJ1eVNlbGxTZXJ2aWNlLmdldEJ1eUV4Y2hhbmdlTW9kZWwoKTtcbiAgICB9XG59XG4iXX0=