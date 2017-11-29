import { Component, OnInit, OnDestroy }       from '@angular/core';
import { ActivatedRoute }                     from '@angular/router';
import { Router }                             from '@angular/router';
import { Subscription }                       from 'rxjs/Subscription';

import { WalletService }                      from './../_services/index';

@Component({
    selector: 'accounts-delete',
    templateUrl: './accounts-delete.component.html',
    styleUrls: ['./accounts-delete.component.css']
})
export class AccountsDeleteComponent implements OnInit {

    private routeSubscription: Subscription;
    walletID: any;
    errorMessage: string;

    constructor( private route: ActivatedRoute,
                 private router: Router,
                 private walletService: WalletService ) {
        this.routeSubscription = route.params.subscribe(params => { this.walletID = params['id'];}
                                                       );
    }

    ngOnInit() { }

    delete() {
        this.walletService.delete(this.walletID)
                          .subscribe( data => { this.router.navigate(['/accounts']);},
                                      error => { this.errorMessage = error.detail;});
    }

    ngOnDestroy(){
        this.routeSubscription.unsubscribe();
    }

}

