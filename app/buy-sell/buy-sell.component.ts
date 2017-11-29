import { Component, OnInit }                  from '@angular/core';
import { Router }                             from '@angular/router';

@Component({
    selector: 'buy-sell',
    templateUrl: './buy-sell.component.html',
    styleUrls: ['./buy-sell.component.css']
})
export class BuySellComponent implements OnInit {

    operation: string;

    constructor( private router: Router,) {
    }

    ngOnInit() {
        if (this.router.url=="/buy-sell/buy") {
            this.operation = "BUY";
        }
        if (this.router.url=="/buy-sell/sell") {
            this.operation = "SELL";
        }
    }

    changeOperation(operation: string) {
        this.operation = operation;
    }
}
