import { Component, OnInit }                          from '@angular/core';

import { BuySellService }                             from '../_services/index';
import { Exchange }                                   from '../_models/index';

@Component({
    selector: 'buy-sell-operation-summary-sell',
    templateUrl: './buy-sell-operation-summary-sell.component.html',
    styleUrls: ['./buy-sell-operation-summary-sell.component.css']
})
export class BuySellOperationSummarySellComponent implements OnInit {

    sellModel = new Exchange;

    constructor( private buySellService: BuySellService, ) { }

    ngOnInit() {
        this.sellModel = this.buySellService.getSellExchangeModel();
    }
}
