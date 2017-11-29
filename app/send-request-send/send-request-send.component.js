"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var modal_1 = require("ngx-bootstrap/modal");
var index_1 = require("../_models/index");
var index_2 = require("../_services/index");
var send_request_send_no_user_component_1 = require("../send-request-send-no-user/send-request-send-no-user.component");
var SendRequestSendComponent = (function () {
    function SendRequestSendComponent(modalService, route, sendRequestService, walletService) {
        this.modalService = modalService;
        this.route = route;
        this.sendRequestService = sendRequestService;
        this.walletService = walletService;
        this.sendModel = new index_1.Send;
        this.sending = false;
        this.successMessage = false;
        this.sendForm = new forms_1.FormGroup({
            "wallet_from": new forms_1.FormControl("", forms_1.Validators.required),
            "receiver": new forms_1.FormControl("", [forms_1.Validators.required, forms_1.Validators.email]),
            "amount": new forms_1.FormControl("", [forms_1.Validators.required, forms_1.Validators.min(0)]),
            "message": new forms_1.FormControl("")
        });
    }
    SendRequestSendComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.newSendModel();
        this.walletService.getWallets()
            .subscribe(function (resp) { _this.wallets = resp; });
        this.querySubscription = this.route.queryParams.subscribe(function (queryParam) {
            _this.hash = queryParam['request_trans_hash'];
            if (_this.hash) {
                _this.transaction(_this.hash);
            }
        });
    };
    SendRequestSendComponent.prototype.newSendModel = function () {
        this.sendModel = new index_1.Send;
    };
    SendRequestSendComponent.prototype.sendMoney = function () {
        var _this = this;
        this.sending = true;
        this.successMessage = false;
        this.errorMessage = "";
        this.sendRequestService.sendMoney(this.sendModel)
            .subscribe(function (data) {
            _this.successMessage = true;
            _this.sending = false;
            _this.sendForm.reset();
            _this.newSendModel();
        }, function (error) {
            _this.sending = false;
            if (error.detail == 'No user') {
                _this.openSendNoUserModal();
            }
            else {
                _this.errorMessage = error.detail;
            }
        });
    };
    SendRequestSendComponent.prototype.openSendNoUserModal = function () {
        this.sendNoUserModal = this.modalService.show(send_request_send_no_user_component_1.SendNoUserComponent);
        this.sendNoUserModal.content.sendModel = this.sendModel;
    };
    SendRequestSendComponent.prototype.transaction = function (hash) {
        var _this = this;
        this.sendRequestService.transaction(hash)
            .subscribe(function (data) {
            _this.sendModel['amount'] = data.amount;
            _this.sendModel['receiver'] = data.send_to_email;
            _this.wallets = _this.wallets.filter(function (wallet) { return wallet.currency === data.currency; });
        }, function (error) { _this.errorMessage = error.detail; });
    };
    SendRequestSendComponent.prototype.ngOnDestroy = function () {
        this.querySubscription.unsubscribe();
    };
    SendRequestSendComponent = __decorate([
        core_1.Component({
            selector: 'send-request-send',
            templateUrl: './send-request-send.component.html',
            styleUrls: ['./send-request-send.component.css']
        }),
        __metadata("design:paramtypes", [modal_1.BsModalService,
            router_1.ActivatedRoute,
            index_2.SendRequestService,
            index_2.WalletService])
    ], SendRequestSendComponent);
    return SendRequestSendComponent;
}());
exports.SendRequestSendComponent = SendRequestSendComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VuZC1yZXF1ZXN0LXNlbmQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2VuZC1yZXF1ZXN0LXNlbmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJFO0FBQzNFLHdDQUE0RTtBQUM1RSwwQ0FBNkU7QUFDN0UsNkNBQWlGO0FBSWpGLDBDQUE4RTtBQUM5RSw0Q0FBZ0Y7QUFDaEYsd0hBQThIO0FBTzlIO0lBYUksa0NBQXFCLFlBQTRCLEVBQzVCLEtBQXFCLEVBQ3JCLGtCQUFzQyxFQUN0QyxhQUE0QjtRQUg1QixpQkFBWSxHQUFaLFlBQVksQ0FBZ0I7UUFDNUIsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDckIsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUN0QyxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQWJqRCxjQUFTLEdBQUcsSUFBSSxZQUFJLENBQUM7UUFFckIsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUNoQixtQkFBYyxHQUFHLEtBQUssQ0FBQztRQVduQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksaUJBQVMsQ0FBQztZQUMxQixhQUFhLEVBQUUsSUFBSSxtQkFBVyxDQUFDLEVBQUUsRUFBRSxrQkFBVSxDQUFDLFFBQVEsQ0FBQztZQUN2RCxVQUFVLEVBQUUsSUFBSSxtQkFBVyxDQUFDLEVBQUUsRUFBRSxDQUFDLGtCQUFVLENBQUMsUUFBUSxFQUFFLGtCQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDeEUsUUFBUSxFQUFFLElBQUksbUJBQVcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxrQkFBVSxDQUFDLFFBQVEsRUFBRSxrQkFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3ZFLFNBQVMsRUFBRSxJQUFJLG1CQUFXLENBQUMsRUFBRSxDQUFDO1NBQ2pDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCwyQ0FBUSxHQUFSO1FBQUEsaUJBUUM7UUFQRyxJQUFJ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RSxDQUFDO0lBQ3pDLENBQUM7SUF2RVEsd0JBQXdCO1FBTHBDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsbUJBQW1CO1lBQzdCLFdBQVcsRUFBRSxvQ0FBb0M7WUFDakQsU0FBUyxFQUFFLENBQUMsbUNBQW1DLENBQUM7U0FDbkQsQ0FBQzt5Q0FjcUMsc0JBQWM7WUFDckIsdUJBQWM7WUFDRCwwQkFBa0I7WUFDdkIscUJBQWE7T0FoQnhDLHdCQUF3QixDQXdFcEM7SUFBRCwrQkFBQztDQUFBLEFBeEVELElBd0VDO0FBeEVZLDREQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gICAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCwgVmFsaWRhdG9yc30gICAgICAgICAgZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEJzTW9kYWxTZXJ2aWNlIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gJ25neC1ib290c3RyYXAvbW9kYWwnO1xuaW1wb3J0IHsgQnNNb2RhbFJlZiB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSAnbmd4LWJvb3RzdHJhcC9tb2RhbC9tb2RhbC1vcHRpb25zLmNsYXNzJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gJ3J4anMvU3Vic2NyaXB0aW9uJztcblxuaW1wb3J0IHsgU2VuZCB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSAnLi4vX21vZGVscy9pbmRleCc7XG5pbXBvcnQgeyBXYWxsZXRTZXJ2aWNlLCBTZW5kUmVxdWVzdFNlcnZpY2UgfSAgICAgICAgICBmcm9tICcuLi9fc2VydmljZXMvaW5kZXgnO1xuaW1wb3J0IHsgU2VuZE5vVXNlckNvbXBvbmVudCB9ICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSAnLi4vc2VuZC1yZXF1ZXN0LXNlbmQtbm8tdXNlci9zZW5kLXJlcXVlc3Qtc2VuZC1uby11c2VyLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnc2VuZC1yZXF1ZXN0LXNlbmQnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9zZW5kLXJlcXVlc3Qtc2VuZC5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vc2VuZC1yZXF1ZXN0LXNlbmQuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFNlbmRSZXF1ZXN0U2VuZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICB3YWxsZXRzOiBhbnk7XG4gICAgc2VuZE1vZGVsID0gbmV3IFNlbmQ7XG4gICAgc2VuZEZvcm06IEZvcm1Hcm91cDtcbiAgICBzZW5kaW5nID0gZmFsc2U7XG4gICAgc3VjY2Vzc01lc3NhZ2UgPSBmYWxzZTtcbiAgICBlcnJvck1lc3NhZ2U6IHN0cmluZztcbiAgICBzZW5kTm9Vc2VyTW9kYWw6IEJzTW9kYWxSZWY7XG5cbsKgwqDCoMKgcHJpdmF0ZSBxdWVyeVN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICAgIGhhc2g6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKCBwcml2YXRlIG1vZGFsU2VydmljZTogQnNNb2RhbFNlcnZpY2UsXG4gICAgICAgICAgICAgICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgICAgICAgICAgICAgICBwcml2YXRlIHNlbmRSZXF1ZXN0U2VydmljZTogU2VuZFJlcXVlc3RTZXJ2aWNlLFxuICAgICAgICAgICAgICAgICBwcml2YXRlIHdhbGxldFNlcnZpY2U6IFdhbGxldFNlcnZpY2UsICkge1xuICAgICAgICB0aGlzLnNlbmRGb3JtID0gbmV3IEZvcm1Hcm91cCh7XG4gICAgICAgICAgICBcIndhbGxldF9mcm9tXCI6IG5ldyBGb3JtQ29udHJvbChcIlwiLCBWYWxpZGF0b3JzLnJlcXVpcmVkKSxcbiAgICAgICAgICAgIFwicmVjZWl2ZXJcIjogbmV3IEZvcm1Db250cm9sKFwiXCIsIFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLmVtYWlsXSksXG4gICAgICAgICAgICBcImFtb3VudFwiOiBuZXcgRm9ybUNvbnRyb2woXCJcIiwgW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMubWluKDApXSksXG4gICAgICAgICAgICBcIm1lc3NhZ2VcIjogbmV3IEZvcm1Db250cm9sKFwiXCIpXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLm5ld1NlbmRNb2RlbCgpO1xuICAgICAgICB0aGlzLndhbGxldFNlcnZpY2UuZ2V0V2FsbGV0cygpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKHJlc3AgPT4ge3RoaXMud2FsbGV0cyA9IHJlc3B9KTtcbiAgICAgICAgdGhpcy5xdWVyeVN1YnNjcmlwdGlvbiA9IHRoaXMucm91dGUucXVlcnlQYXJhbXMuc3Vic2NyaWJlKFxuICAgICAgICAgICAgKHF1ZXJ5UGFyYW06IGFueSkgPT4geyB0aGlzLmhhc2ggPSBxdWVyeVBhcmFtWydyZXF1ZXN0X3RyYW5zX2hhc2gnXTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5oYXNoKSB7IHRoaXMudHJhbnNhY3Rpb24odGhpcy5oYXNoKTt9XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBuZXdTZW5kTW9kZWwoKSB7XG4gICAgICAgIHRoaXMuc2VuZE1vZGVsID0gbmV3IFNlbmQ7XG4gICAgfVxuXG4gICAgc2VuZE1vbmV5KCkge1xuICAgICAgICB0aGlzLnNlbmRpbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLnN1Y2Nlc3NNZXNzYWdlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gXCJcIjtcbiAgICAgICAgdGhpcy5zZW5kUmVxdWVzdFNlcnZpY2Uuc2VuZE1vbmV5KHRoaXMuc2VuZE1vZGVsKVxuICAgICAgICAgICAgLnN1YnNjcmliZSggZGF0YSA9PiB7IHRoaXMuc3VjY2Vzc01lc3NhZ2UgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbmRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZW5kRm9ybS5yZXNldCgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm5ld1NlbmRNb2RlbCgpO30sXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4geyB0aGlzLnNlbmRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVycm9yLmRldGFpbCA9PSAnTm8gdXNlcicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub3BlblNlbmROb1VzZXJNb2RhbCgpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSBlcnJvci5kZXRhaWw7XG4gICAgICAgICAgICAgICAgICAgIH19KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb3BlblNlbmROb1VzZXJNb2RhbCgpIHtcbiAgICAgICAgdGhpcy5zZW5kTm9Vc2VyTW9kYWwgPSB0aGlzLm1vZGFsU2VydmljZS5zaG93KFNlbmROb1VzZXJDb21wb25lbnQpO1xuICAgICAgICB0aGlzLnNlbmROb1VzZXJNb2RhbC5jb250ZW50LnNlbmRNb2RlbCA9IHRoaXMuc2VuZE1vZGVsO1xuICAgIH1cblxuICAgIHRyYW5zYWN0aW9uKGhhc2g6IHN0cmluZykge1xuICAgICAgICB0aGlzLnNlbmRSZXF1ZXN0U2VydmljZS50cmFuc2FjdGlvbihoYXNoKVxuICAgICAgICAgICAgLnN1YnNjcmliZSggZGF0YSA9PiB7IHRoaXMuc2VuZE1vZGVsWydhbW91bnQnXSA9IGRhdGEuYW1vdW50O1xuICAgICAgICAgICAgICAgIHRoaXMuc2VuZE1vZGVsWydyZWNlaXZlciddID0gZGF0YS5zZW5kX3RvX2VtYWlsO1xuICAgICAgICAgICAgICAgIHRoaXMud2FsbGV0cyA9IHRoaXMud2FsbGV0cy5maWx0ZXIod2FsbGV0ID0+IHdhbGxldC5jdXJyZW5jeSA9PT0gZGF0YS5jdXJyZW5jeSk7fSxcbiAgICAgICAgICAgIGVycm9yID0+IHsgdGhpcy5lcnJvck1lc3NhZ2UgPSBlcnJvci5kZXRhaWw7fSk7XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKXtcbsKgwqDCoMKgwqDCoMKgwqB0aGlzLnF1ZXJ5U3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG7CoMKgwqDCoH1cbn1cbiJdfQ==