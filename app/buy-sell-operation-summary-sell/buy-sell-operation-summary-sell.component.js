"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var index_1 = require("../_services/index");
var index_2 = require("../_models/index");
var BuySellOperationSummarySellComponent = (function () {
    function BuySellOperationSummarySellComponent(buySellService) {
        this.buySellService = buySellService;
        this.sellModel = new index_2.Exchange;
    }
    BuySellOperationSummarySellComponent.prototype.ngOnInit = function () {
        this.sellModel = this.buySellService.getSellExchangeModel();
    };
    BuySellOperationSummarySellComponent = __decorate([
        core_1.Component({
            selector: 'buy-sell-operation-summary-sell',
            templateUrl: './buy-sell-operation-summary-sell.component.html',
            styleUrls: ['./buy-sell-operation-summary-sell.component.css']
        }),
        __metadata("design:paramtypes", [index_1.BuySellService])
    ], BuySellOperationSummarySellComponent);
    return BuySellOperationSummarySellComponent;
}());
exports.BuySellOperationSummarySellComponent = BuySellOperationSummarySellComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV5LXNlbGwtb3BlcmF0aW9uLXN1bW1hcnktc2VsbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJidXktc2VsbC1vcGVyYXRpb24tc3VtbWFyeS1zZWxsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyRTtBQUUzRSw0Q0FBZ0Y7QUFDaEYsMENBQThFO0FBTzlFO0lBSUksOENBQXFCLGNBQThCO1FBQTlCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUZuRCxjQUFTLEdBQUcsSUFBSSxnQkFBUSxDQUFDO0lBRWdDLENBQUM7SUFFMUQsdURBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO0lBQ2hFLENBQUM7SUFSUSxvQ0FBb0M7UUFMaEQsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxpQ0FBaUM7WUFDM0MsV0FBVyxFQUFFLGtEQUFrRDtZQUMvRCxTQUFTLEVBQUUsQ0FBQyxpREFBaUQsQ0FBQztTQUNqRSxDQUFDO3lDQUt1QyxzQkFBYztPQUoxQyxvQ0FBb0MsQ0FTaEQ7SUFBRCwyQ0FBQztDQUFBLEFBVEQsSUFTQztBQVRZLG9GQUFvQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gICAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBCdXlTZWxsU2VydmljZSB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tICcuLi9fc2VydmljZXMvaW5kZXgnO1xuaW1wb3J0IHsgRXhjaGFuZ2UgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSAnLi4vX21vZGVscy9pbmRleCc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnYnV5LXNlbGwtb3BlcmF0aW9uLXN1bW1hcnktc2VsbCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2J1eS1zZWxsLW9wZXJhdGlvbi1zdW1tYXJ5LXNlbGwuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL2J1eS1zZWxsLW9wZXJhdGlvbi1zdW1tYXJ5LXNlbGwuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEJ1eVNlbGxPcGVyYXRpb25TdW1tYXJ5U2VsbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBzZWxsTW9kZWwgPSBuZXcgRXhjaGFuZ2U7XG5cbiAgICBjb25zdHJ1Y3RvciggcHJpdmF0ZSBidXlTZWxsU2VydmljZTogQnV5U2VsbFNlcnZpY2UsICkgeyB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5zZWxsTW9kZWwgPSB0aGlzLmJ1eVNlbGxTZXJ2aWNlLmdldFNlbGxFeGNoYW5nZU1vZGVsKCk7XG4gICAgfVxufVxuIl19