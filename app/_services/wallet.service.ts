/* Current user wallets' service */
import { Injectable }                                 from '@angular/core';
import { Response }                                   from '@angular/http';
import { BehaviorSubject }                            from 'rxjs/BehaviorSubject';
import { Observable }                                 from 'rxjs/Observable';
import 'rxjs/Rx';

import { Deposit, DepositUSD, Transfer, Rename }      from '../_models/index';
import { Wallet, WithdrawMoney, WithdrawUSD }         from '../_models/index';
import { ApiService }                                 from './api.service';
import { GlobalStorageService }                       from './global-storage.service';


@Injectable()
export class WalletService {
    private currentWallets = new BehaviorSubject(null);

    constructor( private http: ApiService,
                 private globalStorageService: GlobalStorageService ) {
        let storedWallets = localStorage.getItem('currentUserWallets');
        if (storedWallets !== null) {
            this.setCurrentWallets(JSON.parse(storedWallets));
            this.refreshWallets();
        }
    }

    refreshWallets(): void {
        /*
        Refresh information about the current user
        */
        this.http.get('/wallet/')
            .map((response: Response) => {let proc_resp = response.json();
                    proc_resp.map(wallet => { wallet.precision = +this.globalStorageService.getCurrencyPrecision(wallet.currency)});
                return proc_resp;
            })
            .catch((error: any) => {
                this.setCurrentWallets(null);
                return Observable.throw(error);})
            .subscribe((data: Response) => { this.setCurrentWallets(data)});
    }

    getWallets(): Observable<any> {
        /*
        Get wallets' list
        :return: wallets' list
        */
        this.refreshWallets();
        return this.currentWallets;
    }

    setCurrentWallets(wallets) {
        /*
        Set current user wallets' list
        :return:
        */
        localStorage.setItem('currentUserWallets', JSON.stringify(wallets));
        this.currentWallets.next(wallets);
    }

    addWallet(wallet: Wallet) {
        /*
        Add new wallet
        :param wallet:
        :return:
        */
        return this.http.post('/wallet/',
                { "name": wallet.name,
                  "default": wallet.default,
                  "currency": wallet.currency })
            .map((response: Response) => { this.refreshWallets();});
    }

    getWallet(walletID: number) {
        /*
        Get wallet by id
        :param walletID:
        :return: information about wallet
        */
        return this.http.get('/wallet/' + walletID + '/')
            .map((response: Response) => response.json());
    }

    deposit(deposit: Deposit) {
        /*
        Get address of FRGC or BTC wallet
        :param deposit:
        :return: address of wallet
        */
        return this.http.post('/wallet/address/',
            { "wallet": deposit.wallet,
              "label": deposit.label})
        .map((response: Response) => response.json());
    }

    depositUSD(deposit: DepositUSD) {
        /*
        Deposit USD
        :param deposit:
        :return: deposit form
        */
        return this.http.post('/wallet/deposit/',
            { "comments": deposit.comments,
              "wallet": deposit.wallet,
              "service": deposit.service.id,
              "amount": deposit.amount })
        .map((response: Response) => response.json());
    }

    withdraw(withdrawMoney: WithdrawMoney) {
        /*
        Withdraw FRGC or BTC
        :param withdrawMoney:
        :return:
        */
        return this.http.post('/wallet/withdraw_money/',
            { "crypto_address": withdrawMoney.crypto_address,
              "address_name": withdrawMoney.address_name,
              "amount": withdrawMoney.amount,
              "wallet": withdrawMoney.wallet,
              "message": withdrawMoney.message})
        .map((response: Response) => { this.refreshWallets();});
    }

    withdrawUSD(withdraw: WithdrawUSD) {
        /*
        Withdraw USD
        :param withdraw:
        :return: withdraw form
        */
        return this.http.post('/wallet/withdraw_money/',
            { "email_walletId": withdraw.email_walletId,
              "wallet": withdraw.wallet,
              "service": withdraw.service.id,
              "amount": withdraw.amount,
              "currency": withdraw.currency,
              "message": withdraw.message })
        .map((response: Response) => response.json());
    }

    transaction(walletID: number) {
        /*
        Get transactions' list by wallet id
        :param walletID:
        :return: transactions' list
        */
        return this.http.get('/wallet/' + walletID + '/transaction/')
            .map((response: Response) => response.json());
    }

    transfer(transfer: Transfer) {
        /*
        Transfer
        :param transfer:
        :return:
        */
        return this.http.post('/wallet/trans_btw_usr_wallet/', transfer)
            .map((response: Response) => { this.refreshWallets();});
    }

    renameWallet(rename: Rename) {
        /*
        Rename wallet
        :param rename:
        :return:
        */
        return this.http.patch('/wallet/rename/' + rename.walletID + '/',
                { "name": rename.name})
            .map((response: Response) => { this.refreshWallets();});
    }

    delete(walletID: string) {
        /*
        Delete wallet
        :param walletID:
        :return:
        */
        return this.http.delete('/wallet/' + walletID + '/')
            .map((response: Response) => { this.refreshWallets();});
    }

    getTransactionByHash(hash: string) {
        /*
        Get transaction by hash
        :param hash:
        :return: information about transaction
        */
        return this.http.get('/wallet/transaction/' + hash + '/')
            .map((response: Response) => response.json());
    }

}
