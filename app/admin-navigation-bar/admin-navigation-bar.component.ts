import { Component, OnInit }                          from '@angular/core';
import { Router }                                     from '@angular/router';

import { AdminService }                               from './../_services/index';


@Component({
    selector: 'admin-navigation-bar',
    templateUrl: './admin-navigation-bar.component.html',
    styleUrls: ['./admin-navigation-bar.component.css']
})
export class AdminNavigationBarComponent implements OnInit {

    wallets: any = {};
    totalAmount: any = {};

    constructor( private router: Router,
                 private adminService: AdminService, ) { }

    ngOnInit() {
        this.adminService.getWallets()
            .subscribe( data => {
                for (let wallet of data) {
                    if ( wallet.currency == 'USD' ) {
                        wallet.amount = Number(wallet.amount.toFixed(2))
                    }
                    this.wallets[wallet.currency] = wallet.amount;
                }});
        this.adminService.getTotalAmount()
            .subscribe(data => {this.totalAmount = data.total;});
    }

    refresh() {
        window.location.reload();
    }

}
