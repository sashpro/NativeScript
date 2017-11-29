/* Send Request Service */
import { Injectable }                                 from '@angular/core';
import { Response }                                   from '@angular/http';
import 'rxjs/Rx';

import { Send, Request }                              from '../_models/index';
import { WalletService }                              from './wallet.service';
import { ApiService }                                 from './api.service';

@Injectable()
export class SendRequestService {

    constructor( private http: ApiService,
                 private walletService: WalletService ) { }

    sendMoney(send: Send) {
        /*
        Send money.
        :param send:
         */
        return this.http.post('/wallet/send_money/', send)
            .map((response: Response) => { this.walletService.refreshWallets();});
    }

    requestMoney(request: Request) {
        /*
        Request money.
        :param request:
         */
        return this.http.post('/wallet/request_money/', request)
            .map((response: Response) => { });
    }

    transaction(hash: string) {
        /*
        Get transaction by hash.
        :param hash:
         */
        return this.http.get('/wallet/transaction/' + hash +'/')
            .map((response: Response) => { return response.json();});
    }
}
