import { Component }                                 from '@angular/core';
import { OnDestroy }                                 from '@angular/core';
import { OnInit }                                    from '@angular/core';
import { ActivatedRoute}                             from '@angular/router';
import { Router }                                    from '@angular/router';
import {Subscription}                                from 'rxjs/Subscription';

import { WalletService }                             from './../_services/index';


@Component({
    selector: 'success-page',
    templateUrl: './success-page.component.html',
    styleUrls: ['./success-page.component.css']
})
export class SuccessPageComponent implements OnInit {

    ADVCash: any = {};

    private routeSubscription: Subscription;
    private querySubscription: Subscription;
    constructor( private activatedRoute: ActivatedRoute,
                 private router: Router,
                 private walletService: WalletService, ){
        this.querySubscription = activatedRoute.queryParams.subscribe(
            (queryParam: any) => {
                if (queryParam['ac_ps']=='ADVANCED_CASH') {
                    this. walletService.getTransactionByHash(queryParam['ac_order_id'])
                        .subscribe( data => { this.walletService.getWallet(data.wallet_from)
                                                  .subscribe( data => { this.ADVCash['wallet_name'] = data.name;});
                            this.ADVCash['amount'] = data.amount;
                            this.ADVCash['currency'] = data.currency;});
                } else {
                    this.router.navigate(['/']);
                }
            }
        );
    }

    ngOnInit() { }

    ngOnDestroy(){
        if ( this.routeSubscription ) {
            this.routeSubscription.unsubscribe();
            this.querySubscription.unsubscribe();
        }
    }
}



