"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var index_1 = require("../_services/index");
var index_2 = require("../_services/index");
var index_3 = require("../_models/index");
var SendRequestRequestComponent = (function () {
    function SendRequestRequestComponent(walletService, sendRequestService, globalStorageService) {
        this.walletService = walletService;
        this.sendRequestService = sendRequestService;
        this.globalStorageService = globalStorageService;
        this.requestModel = new index_3.Request;
        this.successMessage = false;
        this.requestForm = new forms_1.FormGroup({
            "requested_user_email": new forms_1.FormControl("", [forms_1.Validators.required, forms_1.Validators.email]),
            "currency": new forms_1.FormControl("", forms_1.Validators.required),
            "amount": new forms_1.FormControl("", [forms_1.Validators.required, forms_1.Validators.min(0)]),
            "message": new forms_1.FormControl("")
        });
    }
    SendRequestRequestComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.newRequestModel();
        this.walletService.getWallets()
            .subscribe(function (resp) { _this.wallets = resp; });
        this.currencyList = this.globalStorageService.getCurrencyList();
    };
    SendRequestRequestComponent.prototype.newRequestModel = function () {
        this.requestModel = new index_3.Request;
    };
    SendRequestRequestComponent.prototype.requestMoney = function () {
        var _this = this;
        this.successMessage = false;
        this.errorMessage = "";
        this.sendRequestService.requestMoney(this.requestModel)
            .subscribe(function (data) {
            _this.successMessage = true;
            _this.requestForm.reset();
            _this.newRequestModel();
        }, function (error) { _this.errorMessage = error.detail; });
    };
    SendRequestRequestComponent = __decorate([
        core_1.Component({
            selector: 'send-request-request',
            templateUrl: './send-request-request.component.html',
            styleUrls: ['./send-request-request.component.css']
        }),
        __metadata("design:paramtypes", [index_2.WalletService,
            index_1.SendRequestService,
            index_1.GlobalStorageService])
    ], SendRequestRequestComponent);
    return SendRequestRequestComponent;
}());
exports.SendRequestRequestComponent = SendRequestRequestComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VuZC1yZXF1ZXN0LXJlcXVlc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2VuZC1yZXF1ZXN0LXJlcXVlc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJFO0FBQzNFLHdDQUE0RTtBQUU1RSw0Q0FBZ0Y7QUFDaEYsNENBQWdGO0FBQ2hGLDBDQUE4RTtBQU85RTtJQVNJLHFDQUFxQixhQUE0QixFQUM1QixrQkFBc0MsRUFDdEMsb0JBQTBDO1FBRjFDLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFDdEMseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQVIvRCxpQkFBWSxHQUFHLElBQUksZUFBTyxDQUFDO1FBRTNCLG1CQUFjLEdBQUcsS0FBSyxDQUFDO1FBT25CLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxpQkFBUyxDQUFDO1lBQzdCLHNCQUFzQixFQUFFLElBQUksbUJBQVcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxrQkFBVSxDQUFDLFFBQVEsRUFBRSxrQkFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3BGLFVBQVUsRUFBRSxJQUFJLG1CQUFXLENBQUMsRUFBRSxFQUFFLGtCQUFVLENBQUMsUUFBUSxDQUFDO1lBQ3BELFFBQVEsRUFBRSxJQUFJLG1CQUFXLENBQUMsRUFBRSxFQUFFLENBQUMsa0JBQVUsQ0FBQyxRQUFRLEVBQUUsa0JBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN2RSxTQUFTLEVBQUUsSUFBSSxtQkFBVyxDQUFDLEVBQUUsQ0FBQztTQUNqQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsOENBQVEsR0FBUjtRQUFBLGlCQUtDO1FBSkcsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxFQUFFO2FBQzFCLFNBQVMsQ0FBQyxVQUFBLElBQUksSUFBSyxLQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQSxDQUFBLENBQUMsQ0FBQyxDQUFDO1FBQzlDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ3BFLENBQUM7SUFFRCxxREFBZSxHQUFmO1FBQ0ksSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLGVBQU8sQ0FBQztJQUNwQyxDQUFDO0lBRUQsa0RBQVksR0FBWjtRQUFBLGlCQVFDO1FBUEcsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7UUFDNUIsSUFBSSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO2FBQ2xELFNBQVMsQ0FBRSxVQUFBLElBQUk7WUFBTSxLQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztZQUN6QyxLQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ3pCLEtBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUFBLENBQUMsRUFDNUIsVUFBQSxLQUFLLElBQU0sS0FBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUEsQ0FBQyxDQUFDLENBQUM7SUFDM0QsQ0FBQztJQXZDUSwyQkFBMkI7UUFMdkMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxzQkFBc0I7WUFDaEMsV0FBVyxFQUFFLHVDQUF1QztZQUNwRCxTQUFTLEVBQUUsQ0FBQyxzQ0FBc0MsQ0FBQztTQUN0RCxDQUFDO3lDQVVzQyxxQkFBYTtZQUNSLDBCQUFrQjtZQUNoQiw0QkFBb0I7T0FYdEQsMkJBQTJCLENBd0N2QztJQUFELGtDQUFDO0NBQUEsQUF4Q0QsSUF3Q0M7QUF4Q1ksa0VBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBWYWxpZGF0b3JzfSAgICAgICAgICBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IEdsb2JhbFN0b3JhZ2VTZXJ2aWNlLCBTZW5kUmVxdWVzdFNlcnZpY2UgfSAgIGZyb20gJy4uL19zZXJ2aWNlcy9pbmRleCc7XG5pbXBvcnQgeyBXYWxsZXRTZXJ2aWNlIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tICcuLi9fc2VydmljZXMvaW5kZXgnO1xuaW1wb3J0IHsgUmVxdWVzdCwgV2FsbGV0IH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSAnLi4vX21vZGVscy9pbmRleCc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnc2VuZC1yZXF1ZXN0LXJlcXVlc3QnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9zZW5kLXJlcXVlc3QtcmVxdWVzdC5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vc2VuZC1yZXF1ZXN0LXJlcXVlc3QuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFNlbmRSZXF1ZXN0UmVxdWVzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICB3YWxsZXRzOiBXYWxsZXRbXTtcbiAgICByZXF1ZXN0TW9kZWwgPSBuZXcgUmVxdWVzdDtcbiAgICByZXF1ZXN0Rm9ybTogRm9ybUdyb3VwO1xuICAgIHN1Y2Nlc3NNZXNzYWdlID0gZmFsc2U7XG4gICAgZXJyb3JNZXNzYWdlOiBzdHJpbmc7XG4gICAgY3VycmVuY3lMaXN0OiBzdHJpbmdbXTtcblxuICAgIGNvbnN0cnVjdG9yKCBwcml2YXRlIHdhbGxldFNlcnZpY2U6IFdhbGxldFNlcnZpY2UsXG4gICAgICAgICAgICAgICAgIHByaXZhdGUgc2VuZFJlcXVlc3RTZXJ2aWNlOiBTZW5kUmVxdWVzdFNlcnZpY2UsXG4gICAgICAgICAgICAgICAgIHByaXZhdGUgZ2xvYmFsU3RvcmFnZVNlcnZpY2U6IEdsb2JhbFN0b3JhZ2VTZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMucmVxdWVzdEZvcm0gPSBuZXcgRm9ybUdyb3VwKHtcbiAgICAgICAgICAgIFwicmVxdWVzdGVkX3VzZXJfZW1haWxcIjogbmV3IEZvcm1Db250cm9sKFwiXCIsIFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLmVtYWlsXSksXG4gICAgICAgICAgICBcImN1cnJlbmN5XCI6IG5ldyBGb3JtQ29udHJvbChcIlwiLCBWYWxpZGF0b3JzLnJlcXVpcmVkKSxcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IG5ldyBGb3JtQ29udHJvbChcIlwiLCBbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5taW4oMCldKSxcbiAgICAgICAgICAgIFwibWVzc2FnZVwiOiBuZXcgRm9ybUNvbnRyb2woXCJcIilcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMubmV3UmVxdWVzdE1vZGVsKCk7XG4gICAgICAgIHRoaXMud2FsbGV0U2VydmljZS5nZXRXYWxsZXRzKClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUocmVzcCA9PiB7dGhpcy53YWxsZXRzID0gcmVzcH0pO1xuICAgICAgICB0aGlzLmN1cnJlbmN5TGlzdCA9IHRoaXMuZ2xvYmFsU3RvcmFnZVNlcnZpY2UuZ2V0Q3VycmVuY3lMaXN0KCk7XG4gICAgfVxuXG4gICAgbmV3UmVxdWVzdE1vZGVsKCkge1xuICAgICAgICB0aGlzLnJlcXVlc3RNb2RlbCA9IG5ldyBSZXF1ZXN0O1xuICAgIH1cblxuICAgIHJlcXVlc3RNb25leSgpIHtcbiAgICAgICAgdGhpcy5zdWNjZXNzTWVzc2FnZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmVycm9yTWVzc2FnZSA9IFwiXCI7XG4gICAgICAgIHRoaXMuc2VuZFJlcXVlc3RTZXJ2aWNlLnJlcXVlc3RNb25leSh0aGlzLnJlcXVlc3RNb2RlbClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoIGRhdGEgPT4geyB0aGlzLnN1Y2Nlc3NNZXNzYWdlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXF1ZXN0Rm9ybS5yZXNldCgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm5ld1JlcXVlc3RNb2RlbCgpO30sXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4geyB0aGlzLmVycm9yTWVzc2FnZSA9IGVycm9yLmRldGFpbDt9KTtcbiAgICB9XG59XG4iXX0=