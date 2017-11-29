import { Component, OnInit }                          from '@angular/core';

import { RateFeeService }                             from './../_services/index';
import { ChangeRate }                                 from './../_models/index';
import { Rate }                                       from './../_models/index';
import { Pair }                                       from './../_models/index';

@Component({
    selector: 'admin-rates',
    templateUrl: './admin-rates-fees-rates.component.html',
    styleUrls: ['./admin-rates-fees-rates.component.css']
})
export class AdminRatesComponent implements OnInit {
    activeRates = new Array<Rate>();
    rateModel = new ChangeRate;
    messageSuccess = false;
    messageError: string;

    constructor(private rateFeeService: RateFeeService ) { }

    ngOnInit() {
        this.rateFeeService.getActiveRates()
            .subscribe(data => { this.activeRates = data;});
    }

    changeRate( newRate: any) {
        this.messageSuccess = false;
        this.messageError = "";
        this.rateFeeService.changeRate(newRate)
            .subscribe( data => { this.messageSuccess = true;},
                        error => { this.messageError = error.detail;});
    }
}
