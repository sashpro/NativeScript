import { Component, OnInit }                          from '@angular/core';

import { RateFeeService }                             from './../_services/index';
import { ChangeFee }                                  from './../_models/index';
import { Fee }                                        from './../_models/index';
import { Service }                                    from './../_models/index';


@Component({
    selector: 'admin-fees',
    templateUrl: './admin-rates-fees-fees.component.html',
    styleUrls: ['./admin-rates-fees-fees.component.css']
})
export class AdminFeesComponent implements OnInit {
    fees = new Array<Fee>();
    feeModel = new ChangeFee;
    messageSuccess = false;
    messageError: string;

    constructor(private rateFeeService: RateFeeService ) { }

    ngOnInit() {
        this.rateFeeService.getFees()
            .subscribe(data => { this.fees = [];
                for (let fee of data) {
                    if ( fee.operation_type=="D" ) {
                        fee['operation']='Deposit';
                        this.fees.push(fee);
                    } else if ( fee.operation_type=="W" ) {
                        fee['operation']='Withdraw';
                        this.fees.push(fee);
                    }
                }
            });
    }

    updateFee(new_fee: any) {
        this.messageSuccess = false;
        this.messageError = "";
        this.rateFeeService.updateFee(new_fee)
            .subscribe( data => { this.messageSuccess = true;},
                        error => { this.messageError = error.detail;});
    }
}
