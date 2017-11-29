import { Component, OnInit }                          from '@angular/core';
import { FormGroup, FormControl, Validators}          from '@angular/forms';

import { GlobalStorageService, SendRequestService }   from '../_services/index';
import { WalletService }                              from '../_services/index';
import { Request, Wallet }                            from '../_models/index';

@Component({
    selector: 'send-request-request',
    templateUrl: './send-request-request.component.html',
    styleUrls: ['./send-request-request.component.css']
})
export class SendRequestRequestComponent implements OnInit {

    wallets: Wallet[];
    requestModel = new Request;
    requestForm: FormGroup;
    successMessage = false;
    errorMessage: string;
    currencyList: string[];

    constructor( private walletService: WalletService,
                 private sendRequestService: SendRequestService,
                 private globalStorageService: GlobalStorageService) {
        this.requestForm = new FormGroup({
            "requested_user_email": new FormControl("", [Validators.required, Validators.email]),
            "currency": new FormControl("", Validators.required),
            "amount": new FormControl("", [Validators.required, Validators.min(0)]),
            "message": new FormControl("")
        });
    }

    ngOnInit() {
        this.newRequestModel();
        this.walletService.getWallets()
            .subscribe(resp => {this.wallets = resp});
        this.currencyList = this.globalStorageService.getCurrencyList();
    }

    newRequestModel() {
        this.requestModel = new Request;
    }

    requestMoney() {
        this.successMessage = false;
        this.errorMessage = "";
        this.sendRequestService.requestMoney(this.requestModel)
            .subscribe( data => { this.successMessage = true;
                    this.requestForm.reset();
                    this.newRequestModel();},
                error => { this.errorMessage = error.detail;});
    }
}
