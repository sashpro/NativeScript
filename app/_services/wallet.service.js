"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* Current user wallets' service */
var core_1 = require("@angular/core");
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
var Observable_1 = require("rxjs/Observable");
require("rxjs/Rx");
var api_service_1 = require("./api.service");
var global_storage_service_1 = require("./global-storage.service");
var WalletService = (function () {
    function WalletService(http, globalStorageService) {
        this.http = http;
        this.globalStorageService = globalStorageService;
        this.currentWallets = new BehaviorSubject_1.BehaviorSubject(null);
        var storedWallets = localStorage.getItem('currentUserWallets');
        if (storedWallets !== null) {
            this.setCurrentWallets(JSON.parse(storedWallets));
            this.refreshWallets();
        }
    }
    WalletService.prototype.refreshWallets = function () {
        var _this = this;
        /*
        Refresh information about the current user
        */
        this.http.get('/wallet/')
            .map(function (response) {
            var proc_resp = response.json();
            proc_resp.map(function (wallet) { wallet.precision = +_this.globalStorageService.getCurrencyPrecision(wallet.currency); });
            return proc_resp;
        })
            .catch(function (error) {
            _this.setCurrentWallets(null);
            return Observable_1.Observable.throw(error);
        })
            .subscribe(function (data) { _this.setCurrentWallets(data); });
    };
    WalletService.prototype.getWallets = function () {
        /*
        Get wallets' list
        :return: wallets' list
        */
        this.refreshWallets();
        return this.currentWallets;
    };
    WalletService.prototype.setCurrentWallets = function (wallets) {
        /*
        Set current user wallets' list
        :return:
        */
        localStorage.setItem('currentUserWallets', JSON.stringify(wallets));
        this.currentWallets.next(wallets);
    };
    WalletService.prototype.addWallet = function (wallet) {
        var _this = this;
        /*
        Add new wallet
        :param wallet:
        :return:
        */
        return this.http.post('/wallet/', { "name": wallet.name,
            "default": wallet.default,
            "currency": wallet.currency })
            .map(function (response) { _this.refreshWallets(); });
    };
    WalletService.prototype.getWallet = function (walletID) {
        /*
        Get wallet by id
        :param walletID:
        :return: information about wallet
        */
        return this.http.get('/wallet/' + walletID + '/')
            .map(function (response) { return response.json(); });
    };
    WalletService.prototype.deposit = function (deposit) {
        /*
        Get address of FRGC or BTC wallet
        :param deposit:
        :return: address of wallet
        */
        return this.http.post('/wallet/address/', { "wallet": deposit.wallet,
            "label": deposit.label })
            .map(function (response) { return response.json(); });
    };
    WalletService.prototype.depositUSD = function (deposit) {
        /*
        Deposit USD
        :param deposit:
        :return: deposit form
        */
        return this.http.post('/wallet/deposit/', { "comments": deposit.comments,
            "wallet": deposit.wallet,
            "service": deposit.service.id,
            "amount": deposit.amount })
            .map(function (response) { return response.json(); });
    };
    WalletService.prototype.withdraw = function (withdrawMoney) {
        var _this = this;
        /*
        Withdraw FRGC or BTC
        :param withdrawMoney:
        :return:
        */
        return this.http.post('/wallet/withdraw_money/', { "crypto_address": withdrawMoney.crypto_address,
            "address_name": withdrawMoney.address_name,
            "amount": withdrawMoney.amount,
            "wallet": withdrawMoney.wallet,
            "message": withdrawMoney.message })
            .map(function (response) { _this.refreshWallets(); });
    };
    WalletService.prototype.withdrawUSD = function (withdraw) {
        /*
        Withdraw USD
        :param withdraw:
        :return: withdraw form
        */
        return this.http.post('/wallet/withdraw_money/', { "email_walletId": withdraw.email_walletId,
            "wallet": withdraw.wallet,
            "service": withdraw.service.id,
            "amount": withdraw.amount,
            "currency": withdraw.currency,
            "message": withdraw.message })
            .map(function (response) { return response.json(); });
    };
    WalletService.prototype.transaction = function (walletID) {
        /*
        Get transactions' list by wallet id
        :param walletID:
        :return: transactions' list
        */
        return this.http.get('/wallet/' + walletID + '/transaction/')
            .map(function (response) { return response.json(); });
    };
    WalletService.prototype.transfer = function (transfer) {
        var _this = this;
        /*
        Transfer
        :param transfer:
        :return:
        */
        return this.http.post('/wallet/trans_btw_usr_wallet/', transfer)
            .map(function (response) { _this.refreshWallets(); });
    };
    WalletService.prototype.renameWallet = function (rename) {
        var _this = this;
        /*
        Rename wallet
        :param rename:
        :return:
        */
        return this.http.patch('/wallet/rename/' + rename.walletID + '/', { "name": rename.name })
            .map(function (response) { _this.refreshWallets(); });
    };
    WalletService.prototype.delete = function (walletID) {
        var _this = this;
        /*
        Delete wallet
        :param walletID:
        :return:
        */
        return this.http.delete('/wallet/' + walletID + '/')
            .map(function (response) { _this.refreshWallets(); });
    };
    WalletService.prototype.getTransactionByHash = function (hash) {
        /*
        Get transaction by hash
        :param hash:
        :return: information about transaction
        */
        return this.http.get('/wallet/transaction/' + hash + '/')
            .map(function (response) { return response.json(); });
    };
    WalletService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [api_service_1.ApiService,
            global_storage_service_1.GlobalStorageService])
    ], WalletService);
    return WalletService;
}());
exports.WalletService = WalletService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2FsbGV0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3YWxsZXQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLG1DQUFtQztBQUNuQyxzQ0FBMkU7QUFFM0Usd0RBQWtGO0FBQ2xGLDhDQUE2RTtBQUM3RSxtQkFBaUI7QUFJakIsNkNBQTJFO0FBQzNFLG1FQUFzRjtBQUl0RjtJQUdJLHVCQUFxQixJQUFnQixFQUNoQixvQkFBMEM7UUFEMUMsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNoQix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBSHZELG1CQUFjLEdBQUcsSUFBSSxpQ0FBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBSS9DLElBQUksYUFBYSxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUMvRCxFQUFFLENBQUMsQ0FBQyxhQUFhLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQztZQUN6QixJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1lBQ2xELElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUMxQixDQUFDO0lBQ0wsQ0FBQztJQUVELHNDQUFjLEdBQWQ7UUFBQSxpQkFhQztRQVpHOztVQUVFO1FBQ0YsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDO2FBQ3BCLEdBQUcsQ0FBQyxVQUFDLFFBQWtCO1lBQU0sSUFBSSxTQUFTLEdBQUcsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ3RELFNBQVMsQ0FBQyxHQUFHLENBQUMsVUFBQSxNQUFNLElBQU0sTUFBTSxDQUFDLFNBQVMsR0FBRyxDQUFDLEtBQUksQ0FBQyxvQkFBb0IsQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUEsQ0FBQSxDQUFDLENBQUMsQ0FBQztZQUNwSCxNQUFNLENBQUMsU0FBUyxDQUFD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cmNlc0NvbnRlbnQiOlsiLyogQ3VycmVudCB1c2VyIHdhbGxldHMnIHNlcnZpY2UgKi9cbmltcG9ydCB7IEluamVjdGFibGUgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmVzcG9uc2UgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tICdyeGpzL0JlaGF2aW9yU3ViamVjdCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuaW1wb3J0ICdyeGpzL1J4JztcblxuaW1wb3J0IHsgRGVwb3NpdCwgRGVwb3NpdFVTRCwgVHJhbnNmZXIsIFJlbmFtZSB9ICAgICAgZnJvbSAnLi4vX21vZGVscy9pbmRleCc7XG5pbXBvcnQgeyBXYWxsZXQsIFdpdGhkcmF3TW9uZXksIFdpdGhkcmF3VVNEIH0gICAgICAgICBmcm9tICcuLi9fbW9kZWxzL2luZGV4JztcbmltcG9ydCB7IEFwaVNlcnZpY2UgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gJy4vYXBpLnNlcnZpY2UnO1xuaW1wb3J0IHsgR2xvYmFsU3RvcmFnZVNlcnZpY2UgfSAgICAgICAgICAgICAgICAgICAgICAgZnJvbSAnLi9nbG9iYWwtc3RvcmFnZS5zZXJ2aWNlJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgV2FsbGV0U2VydmljZSB7XG4gICAgcHJpdmF0ZSBjdXJyZW50V2FsbGV0cyA9IG5ldyBCZWhhdmlvclN1YmplY3QobnVsbCk7XG5cbiAgICBjb25zdHJ1Y3RvciggcHJpdmF0ZSBodHRwOiBBcGlTZXJ2aWNlLFxuICAgICAgICAgICAgICAgICBwcml2YXRlIGdsb2JhbFN0b3JhZ2VTZXJ2aWNlOiBHbG9iYWxTdG9yYWdlU2VydmljZSApIHtcbiAgICAgICAgbGV0IHN0b3JlZFdhbGxldHMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY3VycmVudFVzZXJXYWxsZXRzJyk7XG4gICAgICAgIGlmIChzdG9yZWRXYWxsZXRzICE9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLnNldEN1cnJlbnRXYWxsZXRzKEpTT04ucGFyc2Uoc3RvcmVkV2FsbGV0cykpO1xuICAgICAgICAgICAgdGhpcy5yZWZyZXNoV2FsbGV0cygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVmcmVzaFdhbGxldHMoKTogdm9pZCB7XG4gICAgICAgIC8qXG4gICAgICAgIFJlZnJlc2ggaW5mb3JtYXRpb24gYWJvdXQgdGhlIGN1cnJlbnQgdXNlclxuICAgICAgICAqL1xuICAgICAgICB0aGlzLmh0dHAuZ2V0KCcvd2FsbGV0LycpXG4gICAgICAgICAgICAubWFwKChyZXNwb25zZTogUmVzcG9uc2UpID0+IHtsZXQgcHJvY19yZXNwID0gcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgICAgICAgICBwcm9jX3Jlc3AubWFwKHdhbGxldCA9PiB7IHdhbGxldC5wcmVjaXNpb24gPSArdGhpcy5nbG9iYWxTdG9yYWdlU2VydmljZS5nZXRDdXJyZW5jeVByZWNpc2lvbih3YWxsZXQuY3VycmVuY3kpfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb2NfcmVzcDtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldEN1cnJlbnRXYWxsZXRzKG51bGwpO1xuICAgICAgICAgICAgICAgIHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycm9yKTt9KVxuICAgICAgICAgICAgLnN1YnNjcmliZSgoZGF0YTogUmVzcG9uc2UpID0+IHsgdGhpcy5zZXRDdXJyZW50V2FsbGV0cyhkYXRhKX0pO1xuICAgIH1cblxuICAgIGdldFdhbGxldHMoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICAgICAgLypcbiAgICAgICAgR2V0IHdhbGxldHMnIGxpc3RcbiAgICAgICAgOnJldHVybjogd2FsbGV0cycgbGlzdFxuICAgICAgICAqL1xuICAgICAgICB0aGlzLnJlZnJlc2hXYWxsZXRzKCk7XG4gICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRXYWxsZXRzO1xuICAgIH1cblxuICAgIHNldEN1cnJlbnRXYWxsZXRzKHdhbGxldHMpIHtcbiAgICAgICAgLypcbiAgICAgICAgU2V0IGN1cnJlbnQgdXNlciB3YWxsZXRzJyBsaXN0XG4gICAgICAgIDpyZXR1cm46XG4gICAgICAgICovXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjdXJyZW50VXNlcldhbGxldHMnLCBKU09OLnN0cmluZ2lmeSh3YWxsZXRzKSk7XG4gICAgICAgIHRoaXMuY3VycmVudFdhbGxldHMubmV4dCh3YWxsZXRzKTtcbiAgICB9XG5cbiAgICBhZGRXYWxsZXQod2FsbGV0OiBXYWxsZXQpIHtcbiAgICAgICAgLypcbiAgICAgICAgQWRkIG5ldyB3YWxsZXRcbiAgICAgICAgOnBhcmFtIHdhbGxldDpcbiAgICAgICAgOnJldHVybjpcbiAgICAgICAgKi9cbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KCcvd2FsbGV0LycsXG4gICAgICAgICAgICAgICAgeyBcIm5hbWVcIjogd2FsbGV0Lm5hbWUsXG4gICAgICAgICAgICAgICAgICBcImRlZmF1bHRcIjogd2FsbGV0LmRlZmF1bHQsXG4gICAgICAgICAgICAgICAgICBcImN1cnJlbmN5XCI6IHdhbGxldC5jdXJyZW5jeSB9KVxuICAgICAgICAgICAgLm1hcCgocmVzcG9uc2U6IFJlc3BvbnNlKSA9PiB7IHRoaXMucmVmcmVzaFdhbGxldHMoKTt9KTtcbiAgICB9XG5cbiAgICBnZXRXYWxsZXQod2FsbGV0SUQ6IG51bWJlcikge1xuICAgICAgICAvKlxuICAgICAgICBHZXQgd2FsbGV0IGJ5IGlkXG4gICAgICAgIDpwYXJhbSB3YWxsZXRJRDpcbiAgICAgICAgOnJldHVybjogaW5mb3JtYXRpb24gYWJvdXQgd2FsbGV0XG4gICAgICAgICovXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KCcvd2FsbGV0LycgKyB3YWxsZXRJRCArICcvJylcbiAgICAgICAgICAgIC5tYXAoKHJlc3BvbnNlOiBSZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKTtcbiAgICB9XG5cbiAgICBkZXBvc2l0KGRlcG9zaXQ6IERlcG9zaXQpIHtcbiAgICAgICAgLypcbiAgICAgICAgR2V0IGFkZHJlc3Mgb2YgRlJHQyBvciBCVEMgd2FsbGV0XG4gICAgICAgIDpwYXJhbSBkZXBvc2l0OlxuICAgICAgICA6cmV0dXJuOiBhZGRyZXNzIG9mIHdhbGxldFxuICAgICAgICAqL1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoJy93YWxsZXQvYWRkcmVzcy8nLFxuICAgICAgICAgICAgeyBcIndhbGxldFwiOiBkZXBvc2l0LndhbGxldCxcbiAgICAgICAgICAgICAgXCJsYWJlbFwiOiBkZXBvc2l0LmxhYmVsfSlcbiAgICAgICAgLm1hcCgocmVzcG9uc2U6IFJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpO1xuICAgIH1cblxuICAgIGRlcG9zaXRVU0QoZGVwb3NpdDogRGVwb3NpdFVTRCkge1xuICAgICAgICAvKlxuICAgICAgICBEZXBvc2l0IFVTRFxuICAgICAgICA6cGFyYW0gZGVwb3NpdDpcbiAgICAgICAgOnJldHVybjogZGVwb3NpdCBmb3JtXG4gICAgICAgICovXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCgnL3dhbGxldC9kZXBvc2l0LycsXG4gICAgICAgICAgICB7IFwiY29tbWVudHNcIjogZGVwb3NpdC5jb21tZW50cyxcbiAgICAgICAgICAgICAgXCJ3YWxsZXRcIjogZGVwb3NpdC53YWxsZXQsXG4gICAgICAgICAgICAgIFwic2VydmljZVwiOiBkZXBvc2l0LnNlcnZpY2UuaWQsXG4gICAgICAgICAgICAgIFwiYW1vdW50XCI6IGRlcG9zaXQuYW1vdW50IH0pXG4gICAgICAgIC5tYXAoKHJlc3BvbnNlOiBSZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKTtcbiAgICB9XG5cbiAgICB3aXRoZHJhdyh3aXRoZHJhd01vbmV5OiBXaXRoZHJhd01vbmV5KSB7XG4gICAgICAgIC8qXG4gICAgICAgIFdpdGhkcmF3IEZSR0Mgb3IgQlRDXG4gICAgICAgIDpwYXJhbSB3aXRoZHJhd01vbmV5OlxuICAgICAgICA6cmV0dXJuOlxuICAgICAgICAqL1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoJy93YWxsZXQvd2l0aGRyYXdfbW9uZXkvJyxcbiAgICAgICAgICAgIHsgXCJjcnlwdG9fYWRkcmVzc1wiOiB3aXRoZHJhd01vbmV5LmNyeXB0b19hZGRyZXNzLFxuICAgICAgICAgICAgICBcImFkZHJlc3NfbmFtZVwiOiB3aXRoZHJhd01vbmV5LmFkZHJlc3NfbmFtZSxcbiAgICAgICAgICAgICAgXCJhbW91bnRcIjogd2l0aGRyYXdNb25leS5hbW91bnQsXG4gICAgICAgICAgICAgIFwid2FsbGV0XCI6IHdpdGhkcmF3TW9uZXkud2FsbGV0LFxuICAgICAgICAgICAgICBcIm1lc3NhZ2VcIjogd2l0aGRyYXdNb25leS5tZXNzYWdlfSlcbiAgICAgICAgLm1hcCgocmVzcG9uc2U6IFJlc3BvbnNlKSA9PiB7IHRoaXMucmVmcmVzaFdhbGxldHMoKTt9KTtcbiAgICB9XG5cbiAgICB3aXRoZHJhd1VTRCh3aXRoZHJhdzogV2l0aGRyYXdVU0QpIHtcbiAgICAgICAgLypcbiAgICAgICAgV2l0aGRyYXcgVVNEXG4gICAgICAgIDpwYXJhbSB3aXRoZHJhdzpcbiAgICAgICAgOnJldHVybjogd2l0aGRyYXcgZm9ybVxuICAgICAgICAqL1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoJy93YWxsZXQvd2l0aGRyYXdfbW9uZXkvJyxcbiAgICAgICAgICAgIHsgXCJlbWFpbF93YWxsZXRJZFwiOiB3aXRoZHJhdy5lbWFpbF93YWxsZXRJZCxcbiAgICAgICAgICAgICAgXCJ3YWxsZXRcIjogd2l0aGRyYXcud2FsbGV0LFxuICAgICAgICAgICAgICBcInNlcnZpY2VcIjogd2l0aGRyYXcuc2VydmljZS5pZCxcbiAgICAgICAgICAgICAgXCJhbW91bnRcIjogd2l0aGRyYXcuYW1vdW50LFxuICAgICAgICAgICAgICBcImN1cnJlbmN5XCI6IHdpdGhkcmF3LmN1cnJlbmN5LFxuICAgICAgICAgICAgICBcIm1lc3NhZ2VcIjogd2l0aGRyYXcubWVzc2FnZSB9KVxuICAgICAgICAubWFwKChyZXNwb25zZTogUmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSk7XG4gICAgfVxuXG4gICAgdHJhbnNhY3Rpb24od2FsbGV0SUQ6IG51bWJlcikge1xuICAgICAgICAvKlxuICAgICAgICBHZXQgdHJhbnNhY3Rpb25zJyBsaXN0IGJ5IHdhbGxldCBpZFxuICAgICAgICA6cGFyYW0gd2FsbGV0SUQ6XG4gICAgICAgIDpyZXR1cm46IHRyYW5zYWN0aW9ucycgbGlzdFxuICAgICAgICAqL1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCgnL3dhbGxldC8nICsgd2FsbGV0SUQgKyAnL3RyYW5zYWN0aW9uLycpXG4gICAgICAgICAgICAubWFwKChyZXNwb25zZTogUmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSk7XG4gICAgfVxuXG4gICAgdHJhbnNmZXIodHJhbnNmZXI6IFRyYW5zZmVyKSB7XG4gICAgICAgIC8qXG4gICAgICAgIFRyYW5zZmVyXG4gICAgICAgIDpwYXJhbSB0cmFuc2ZlcjpcbiAgICAgICAgOnJldHVybjpcbiAgICAgICAgKi9cbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KCcvd2FsbGV0L3RyYW5zX2J0d191c3Jfd2FsbGV0LycsIHRyYW5zZmVyKVxuICAgICAgICAgICAgLm1hcCgocmVzcG9uc2U6IFJlc3BvbnNlKSA9PiB7IHRoaXMucmVmcmVzaFdhbGxldHMoKTt9KTtcbiAgICB9XG5cbiAgICByZW5hbWVXYWxsZXQocmVuYW1lOiBSZW5hbWUpIHtcbiAgICAgICAgLypcbiAgICAgICAgUmVuYW1lIHdhbGxldFxuICAgICAgICA6cGFyYW0gcmVuYW1lOlxuICAgICAgICA6cmV0dXJuOlxuICAgICAgICAqL1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBhdGNoKCcvd2FsbGV0L3JlbmFtZS8nICsgcmVuYW1lLndhbGxldElEICsgJy8nLFxuICAgICAgICAgICAgICAgIHsgXCJuYW1lXCI6IHJlbmFtZS5uYW1lfSlcbiAgICAgICAgICAgIC5tYXAoKHJlc3BvbnNlOiBSZXNwb25zZSkgPT4geyB0aGlzLnJlZnJlc2hXYWxsZXRzKCk7fSk7XG4gICAgfVxuXG4gICAgZGVsZXRlKHdhbGxldElEOiBzdHJpbmcpIHtcbiAgICAgICAgLypcbiAgICAgICAgRGVsZXRlIHdhbGxldFxuICAgICAgICA6cGFyYW0gd2FsbGV0SUQ6XG4gICAgICAgIDpyZXR1cm46XG4gICAgICAgICovXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlKCcvd2FsbGV0LycgKyB3YWxsZXRJRCArICcvJylcbiAgICAgICAgICAgIC5tYXAoKHJlc3BvbnNlOiBSZXNwb25zZSkgPT4geyB0aGlzLnJlZnJlc2hXYWxsZXRzKCk7fSk7XG4gICAgfVxuXG4gICAgZ2V0VHJhbnNhY3Rpb25CeUhhc2goaGFzaDogc3RyaW5nKSB7XG4gICAgICAgIC8qXG4gICAgICAgIEdldCB0cmFuc2FjdGlvbiBieSBoYXNoXG4gICAgICAgIDpwYXJhbSBoYXNoOlxuICAgICAgICA6cmV0dXJuOiBpbmZvcm1hdGlvbiBhYm91dCB0cmFuc2FjdGlvblxuICAgICAgICAqL1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCgnL3dhbGxldC90cmFuc2FjdGlvbi8nICsgaGFzaCArICcvJylcbiAgICAgICAgICAgIC5tYXAoKHJlc3BvbnNlOiBSZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKTtcbiAgICB9XG5cbn1cbiJdfQ==