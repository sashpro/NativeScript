import { Component }                                 from '@angular/core';
import { OnDestroy }                                 from '@angular/core';
import { OnInit }                                    from '@angular/core';
import { ActivatedRoute}                             from '@angular/router';
import { Router }                                    from '@angular/router';
import {Subscription}                                from 'rxjs/Subscription';


@Component({
    selector: 'fail-page',
    templateUrl: './fail-page.component.html',
    styleUrls: ['./fail-page.component.css']
})
export class FailPageComponent implements OnInit {

    ADVCashWallet: string;

    private routeSubscription: Subscription;
    private querySubscription: Subscription;
    constructor( private activatedRoute: ActivatedRoute,
                 private router: Router, ){
        this.querySubscription = activatedRoute.queryParams.subscribe(
            (queryParam: any) => {
                if ( queryParam['ac_order_id'] ) {
                    this.ADVCashWallet = queryParam['ac_dest_wallet']
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



