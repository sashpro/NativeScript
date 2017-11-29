"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var BuySellComponent = (function () {
    function BuySellComponent(router) {
        this.router = router;
    }
    BuySellComponent.prototype.ngOnInit = function () {
        if (this.router.url == "/buy-sell/buy") {
            this.operation = "BUY";
        }
        if (this.router.url == "/buy-sell/sell") {
            this.operation = "SELL";
        }
    };
    BuySellComponent.prototype.changeOperation = function (operation) {
        this.operation = operation;
    };
    BuySellComponent = __decorate([
        core_1.Component({
            selector: 'buy-sell',
            templateUrl: './buy-sell.component.html',
            styleUrls: ['./buy-sell.component.css']
        }),
        __metadata("design:paramtypes", [router_1.Router])
    ], BuySellComponent);
    return BuySellComponent;
}());
exports.BuySellComponent = BuySellComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV5LXNlbGwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYnV5LXNlbGwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQW1FO0FBQ25FLDBDQUFxRTtBQU9yRTtJQUlJLDBCQUFxQixNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtJQUNuQyxDQUFDO0lBRUQsbUNBQVEsR0FBUjtRQUNJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxJQUFFLGVBQWUsQ0FBQyxDQUFDLENBQUM7WUFDbkMsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDM0IsQ0FBQztRQUNELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxJQUFFLGdCQUFnQixDQUFDLENBQUMsQ0FBQztZQUNwQyxJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQztRQUM1QixDQUFDO0lBQ0wsQ0FBQztJQUVELDBDQUFlLEdBQWYsVUFBZ0IsU0FBaUI7UUFDN0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7SUFDL0IsQ0FBQztJQWxCUSxnQkFBZ0I7UUFMNUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFdBQVcsRUFBRSwyQkFBMkI7WUFDeEMsU0FBUyxFQUFFLENBQUMsMEJBQTBCLENBQUM7U0FDMUMsQ0FBQzt5Q0FLK0IsZUFBTTtPQUoxQixnQkFBZ0IsQ0FtQjVCO0lBQUQsdUJBQUM7Q0FBQSxBQW5CRCxJQW1CQztBQW5CWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9ICAgICAgICAgICAgICAgICAgZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdidXktc2VsbCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2J1eS1zZWxsLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9idXktc2VsbC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQnV5U2VsbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBvcGVyYXRpb246IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKCBwcml2YXRlIHJvdXRlcjogUm91dGVyLCkge1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICBpZiAodGhpcy5yb3V0ZXIudXJsPT1cIi9idXktc2VsbC9idXlcIikge1xuICAgICAgICAgICAgdGhpcy5vcGVyYXRpb24gPSBcIkJVWVwiO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnJvdXRlci51cmw9PVwiL2J1eS1zZWxsL3NlbGxcIikge1xuICAgICAgICAgICAgdGhpcy5vcGVyYXRpb24gPSBcIlNFTExcIjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNoYW5nZU9wZXJhdGlvbihvcGVyYXRpb246IHN0cmluZykge1xuICAgICAgICB0aGlzLm9wZXJhdGlvbiA9IG9wZXJhdGlvbjtcbiAgICB9XG59XG4iXX0=