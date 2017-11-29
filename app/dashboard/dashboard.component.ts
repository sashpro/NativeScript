import { Component }                                  from '@angular/core';
import { OnInit }                                     from '@angular/core';
import { ViewEncapsulation }                          from '@angular/core';
import { DatePipe }                                   from '@angular/common';

import { RateFeeService }                             from './../_services/index';
import { WalletService }                              from './../_services/index';

declare let d3: any;


@Component({
    selector: 'dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css',
                './../../../node_modules/nvd3/build/nv.d3.css'],
    encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {

    wallets: any;
    options: any;
    dataFRGC = [ { key: "FRGC",
                   values: [ ],
                   area: true } ];
    dataBTC = [ { key: "BTC",
                  values: [ ],
                  area: true } ];
    data: any;
    currency = 'FRGC';

    constructor( private datePipe: DatePipe,
                 private rateFeeService: RateFeeService,
                 private walletService: WalletService, ) { }

    ngOnInit() {
        var dateToday = new Date();
        var dateMonthAgo = this.datePipe.transform(new Date(dateToday.setMonth(dateToday.getMonth() - 1)), 'y-MM-dd');
        this.walletService.getWallets()
            .subscribe(data => {this.wallets = data});
        this.rateFeeService.getRates(dateMonthAgo)
            .subscribe(data => {
                for (let rate of data) {
                    if ( rate.pair.right_currency == 'FRGC' ) {
                        this.dataFRGC[0].values.push([ Date.parse(rate.create_dt), rate.buy_rate]);
                    } else if ( rate.pair.right_currency == 'BTC' ) {
                        this.dataBTC[0].values.push([Date.parse(rate.create_dt), rate.buy_rate]);
                    }
                }
                this.data = this.dataFRGC;});

        this.options = {
            chart: {
                type: 'lineChart',
                height: 350,
                margin : { top: 20, right: 20, bottom: 50, left: 60 },
                x: function(d){ return d[0]; },
                y: function(d){ return d[1]; },
                color: d3.scale.category10().range(),
                duration: 300,
                useInteractiveGuideline: true,
                clipVoronoi: false,
                xAxis: { tickFormat: function(d) { return d3.time.format('%m/%d/%y')(new Date(d)) },
                    showMaxMin: false },
                yAxis: { tickFormat: function(d){ return d3.format(',.2f')(d); } }
            }
        };
    }

    changeCurrency( currency: string ) {
        this.currency = currency;
        if (currency=='FRGC') {
            this.data = this.dataFRGC;
        } else if (currency=='BTC') {
            this.data = this.dataBTC;
        }
    }

}
