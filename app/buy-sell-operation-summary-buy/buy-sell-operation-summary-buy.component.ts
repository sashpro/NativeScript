import { Component, OnInit }                          from '@angular/core';

import { BuySellService }                             from '../_services/index';
import { Exchange }                                   from '../_models/index';


@Component({
    selector: 'buy-sell-operation-summary-buy',
    templateUrl: './buy-sell-operation-summary-buy.component.html',
    styleUrls: ['./buy-sell-operation-summary-buy.component.css']
})
export class BuySellOperationSummaryBuyComponent implements OnInit {

    buyModel = new Exchange;

    constructor( private buySellService: BuySellService, ) { }

    ngOnInit() {
        this.buyModel = this.buySellService.getBuyExchangeModel();
    }
}
