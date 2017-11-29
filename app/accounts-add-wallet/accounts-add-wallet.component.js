"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var modal_options_class_1 = require("ngx-bootstrap/modal/modal-options.class");
var index_1 = require("./../_services/index");
var index_2 = require("./../_services/index");
var AccountsAddWalletComponent = (function () {
    function AccountsAddWalletComponent(walletService, bsModalRef, globalStorageService) {
        this.walletService = walletService;
        this.bsModalRef = bsModalRef;
        this.globalStorageService = globalStorageService;
        this.wallet = {};
    }
    AccountsAddWalletComponent.prototype.ngOnInit = function () {
        this.currencyList = this.globalStorageService.getCurrencyList();
    };
    AccountsAddWalletComponent.prototype.addWallet = function () {
        var _this = this;
        this.walletService.addWallet(this.wallet)
            .subscribe(function (data) { _this.bsModalRef.hide(); }, function (error) { _this.errorMessage = error.detail; });
    };
    AccountsAddWalletComponent = __decorate([
        core_1.Component({
            selector: 'accounts-add-wallet',
            templateUrl: './accounts-add-wallet.component.html',
            styleUrls: ['./accounts-add-wallet.component.css']
        }),
        __metadata("design:paramtypes", [index_2.WalletService,
            modal_options_class_1.BsModalRef,
            index_1.GlobalStorageService])
    ], AccountsAddWalletComponent);
    return AccountsAddWalletComponent;
}());
exports.AccountsAddWalletComponent = AccountsAddWalletComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3VudHMtYWRkLXdhbGxldC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhY2NvdW50cy1hZGQtd2FsbGV0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwRTtBQUMxRSwrRUFBb0c7QUFHcEcsOENBQWlGO0FBQ2pGLDhDQUFpRjtBQU9qRjtJQU1JLG9DQUFxQixhQUE0QixFQUM3QixVQUFzQixFQUNyQixvQkFBMEM7UUFGMUMsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDN0IsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUNyQix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBTi9ELFdBQU0sR0FBUSxFQUFFLENBQUM7SUFPakIsQ0FBQztJQUVELDZDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUNwRSxDQUFDO0lBRUQsOENBQVMsR0FBVDtRQUFBLGlCQUlDO1FBSEcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQzthQUN0QixTQUFTLENBQUUsVUFBQSxJQUFJLElBQU0sS0FBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFBLENBQUMsRUFDbEMsVUFBQSxLQUFLLElBQU0sS0FBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUEsQ0FBQyxDQUFDLENBQUM7SUFDakYsQ0FBQztJQW5CUSwwQkFBMEI7UUFMdEMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxxQkFBcUI7WUFDL0IsV0FBVyxFQUFFLHNDQUFzQztZQUNuRCxTQUFTLEVBQUUsQ0FBQyxxQ0FBcUMsQ0FBQztTQUNyRCxDQUFDO3lDQU9zQyxxQkFBYTtZQUNqQixnQ0FBVTtZQUNDLDRCQUFvQjtPQVJ0RCwwQkFBMEIsQ0FxQnRDO0lBQUQsaUNBQUM7Q0FBQSxBQXJCRCxJQXFCQztBQXJCWSxnRUFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9ICAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQnNNb2RhbFJlZiB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tICduZ3gtYm9vdHN0cmFwL21vZGFsL21vZGFsLW9wdGlvbnMuY2xhc3MnO1xuXG5cbmltcG9ydCB7IEdsb2JhbFN0b3JhZ2VTZXJ2aWNlIH0gICAgICAgICAgICAgICAgICAgICAgZnJvbSAnLi8uLi9fc2VydmljZXMvaW5kZXgnO1xuaW1wb3J0IHsgV2FsbGV0U2VydmljZSB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tICcuLy4uL19zZXJ2aWNlcy9pbmRleCc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnYWNjb3VudHMtYWRkLXdhbGxldCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2FjY291bnRzLWFkZC13YWxsZXQuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL2FjY291bnRzLWFkZC13YWxsZXQuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEFjY291bnRzQWRkV2FsbGV0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIHdhbGxldDogYW55ID0ge307XG4gICAgZXJyb3JNZXNzYWdlOiBzdHJpbmc7XG4gICAgY3VycmVuY3lMaXN0OiBzdHJpbmdbXTtcblxuICAgIGNvbnN0cnVjdG9yKCBwcml2YXRlIHdhbGxldFNlcnZpY2U6IFdhbGxldFNlcnZpY2UsXG4gICAgICAgICAgICAgICAgIHB1YmxpYyBic01vZGFsUmVmOiBCc01vZGFsUmVmLFxuICAgICAgICAgICAgICAgICBwcml2YXRlIGdsb2JhbFN0b3JhZ2VTZXJ2aWNlOiBHbG9iYWxTdG9yYWdlU2VydmljZSkge1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmN1cnJlbmN5TGlzdCA9IHRoaXMuZ2xvYmFsU3RvcmFnZVNlcnZpY2UuZ2V0Q3VycmVuY3lMaXN0KCk7XG4gICAgfVxuXG4gICAgYWRkV2FsbGV0KCkge1xuICAgICAgICB0aGlzLndhbGxldFNlcnZpY2UuYWRkV2FsbGV0KHRoaXMud2FsbGV0KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKCBkYXRhID0+IHsgdGhpcy5ic01vZGFsUmVmLmhpZGUoKTt9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvciA9PiB7IHRoaXMuZXJyb3JNZXNzYWdlID0gZXJyb3IuZGV0YWlsO30pO1xuICAgIH1cblxufVxuIl19