"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* Two factor authentication service */
var core_1 = require("@angular/core");
var Subject_1 = require("rxjs/Subject");
var api_service_1 = require("./api.service");
var TwoFactorAuthenticationService = (function () {
    function TwoFactorAuthenticationService(http) {
        this.http = http;
        this.twoFactorStatus = new Subject_1.Subject;
        this.twoFactorStatus.next(null);
    }
    TwoFactorAuthenticationService.prototype.getTwoFactorStatus = function () {
        var _this = this;
        /*
        Get information about two factor authentication.
        :return:
        */
        this.http.get('/mfa/')
            .map(function (response) { return response.json(); })
            .subscribe(function (data) {
            if (data.enabled) {
                _this.setTwoFactorStatus('active');
            }
            else {
                _this.setTwoFactorStatus('not active');
            }
        });
        return this.twoFactorStatus;
    };
    TwoFactorAuthenticationService.prototype.setTwoFactorStatus = function (data) {
        /*
        Set information about two factor authentication.
        */
        this.twoFactorStatus.next(data);
    };
    TwoFactorAuthenticationService.prototype.smsRequest = function (smsRequest) {
        /*
        Sms request.
        :param smsRequest:
        :return:
        */
        return this.http.put('/mfa/sms/request/', smsRequest)
            .map(function (response) { return response.json(); });
    };
    TwoFactorAuthenticationService.prototype.smsVerify = function (smsVerify) {
        var _this = this;
        /*
        Sms verify.
        :param smsVerify:
        :return:
        */
        return this.http.put('/mfa/sms/verify/', smsVerify)
            .map(function (response) { _this.getTwoFactorStatus(); });
    };
    TwoFactorAuthenticationService.prototype.deactivate = function () {
        var _this = this;
        /*
        Deactivate two factor authentication.
        :return:
        */
        return this.http.delete('/mfa/')
            .map(function (response) { _this.getTwoFactorStatus(); });
    };
    TwoFactorAuthenticationService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [api_service_1.ApiService])
    ], TwoFactorAuthenticationService);
    return TwoFactorAuthenticationService;
}());
exports.TwoFactorAuthenticationService = TwoFactorAuthenticationService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHdvLWZhY3Rvci1hdXRoZW50aWNhdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidHdvLWZhY3Rvci1hdXRoZW50aWNhdGlvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsdUNBQXVDO0FBQ3ZDLHNDQUEyRTtBQUczRSx3Q0FBMEU7QUFHMUUsNkNBQTJFO0FBRzNFO0lBR0ksd0NBQXFCLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7UUFGckMsb0JBQWUsR0FBRyxJQUFJLGlCQUFPLENBQUM7UUFHMUIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVELDJEQUFrQixHQUFsQjtRQUFBLGlCQWVDO1FBZEc7OztVQUdFO1FBQ0YsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDO2FBQ2pCLEdBQUcsQ0FBQyxVQUFDLFFBQWtCLElBQU8sTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFBLENBQUMsQ0FBQzthQUN2RCxTQUFTLENBQUMsVUFBQSxJQUFJO1lBQ1QsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7Z0JBQ2YsS0FBSSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3RDLENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDSixLQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDMUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFDO1FBQ1AsTUFBTSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUM7SUFDaEMsQ0FBQztJQUVELDJEQUFrQixHQUFsQixVQUFtQixJQUFJO1FBQ25COztVQUVFO1FBQ0YsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUdELG1EQUFVLEdBQVYsVUFBVyxVQUFzQjtRQUM3Qjs7OztVQUlFO1FBQ0YsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLG1CQUFtQixFQUFFLFVBQVUsQ0FBQzthQUNoRCxHQUFHLENBQUMsVUFBQyxRQUFrQixJQUFPLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQSxDQUFDLENBQUMsQ0FBQztJQUNqRSxDQUFDO0lBRUQsa0RBQVMsR0FBVCxVQUFVLFNBQW9CO1FBQTlCLGlCQVFDO1FBUEc7Ozs7VUFJRTtRQUNGLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRSxTQUFTLENBQUM7YUFDOUMsR0FBRyxDQUFDLFVBQUMsUUFBa0IsSUFBTyxLQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxDQUFBLENBQUMsQ0FBQyxDQUFDO0lBQ3BFLENBQUM7SUFFRCxtREFBVSxHQUFWO1FBQUEsaUJBT0M7UUFORzs7O1VBR0U7UUFDRixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDO2FBQzNCLEdBQUcsQ0FBQyxVQUFDLFFBQWtCLElBQU8sS0FBSSxDQUFDLGtCQUFrQixFQUFFLENBQUMsQ0FBQSxDQUFDLENBQUMsQ0FBQztJQUNwRSxDQUFDO0lBM0RRLDhCQUE4QjtRQUQxQyxpQkFBVSxFQUFFO3lDQUlrQix3QkFBVTtPQUg1Qiw4QkFBOEIsQ0E2RDFDO0lBQUQscUNBQUM7Q0FBQSxBQTdERCxJQTZEQztBQTdEWSx3RUFBOEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBUd28gZmFjdG9yIGF1dGhlbnRpY2F0aW9uIHNlcnZpY2UgKi9cbmltcG9ydCB7IEluamVjdGFibGUgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmVzcG9uc2UgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuaW1wb3J0IHsgU3ViamVjdCB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSAncnhqcy9TdWJqZWN0JztcblxuaW1wb3J0IHsgU21zUmVxdWVzdCwgU21zVmVyaWZ5IH0gICAgICAgICAgICAgICAgICAgICAgZnJvbSAnLi8uLi9fbW9kZWxzL2luZGV4JztcbmltcG9ydCB7IEFwaVNlcnZpY2UgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gJy4vYXBpLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVHdvRmFjdG9yQXV0aGVudGljYXRpb25TZXJ2aWNlIHtcbiAgICB0d29GYWN0b3JTdGF0dXMgPSBuZXcgU3ViamVjdDtcblxuICAgIGNvbnN0cnVjdG9yKCBwcml2YXRlIGh0dHA6IEFwaVNlcnZpY2UgKSB7XG4gICAgICAgIHRoaXMudHdvRmFjdG9yU3RhdHVzLm5leHQobnVsbCk7XG4gICAgfVxuXG4gICAgZ2V0VHdvRmFjdG9yU3RhdHVzKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgICAgIC8qXG4gICAgICAgIEdldCBpbmZvcm1hdGlvbiBhYm91dCB0d28gZmFjdG9yIGF1dGhlbnRpY2F0aW9uLlxuICAgICAgICA6cmV0dXJuOlxuICAgICAgICAqL1xuICAgICAgICB0aGlzLmh0dHAuZ2V0KCcvbWZhLycpXG4gICAgICAgICAgICAubWFwKChyZXNwb25zZTogUmVzcG9uc2UpID0+IHsgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTt9KVxuICAgICAgICAgICAgLnN1YnNjcmliZShkYXRhID0+IHtcbiAgICAgICAgICAgICAgICAgIGlmIChkYXRhLmVuYWJsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFR3b0ZhY3RvclN0YXR1cygnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0VHdvRmFjdG9yU3RhdHVzKCdub3QgYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXMudHdvRmFjdG9yU3RhdHVzO1xuICAgIH1cblxuICAgIHNldFR3b0ZhY3RvclN0YXR1cyhkYXRhKSB7XG4gICAgICAgIC8qXG4gICAgICAgIFNldCBpbmZvcm1hdGlvbiBhYm91dCB0d28gZmFjdG9yIGF1dGhlbnRpY2F0aW9uLlxuICAgICAgICAqL1xuICAgICAgICB0aGlzLnR3b0ZhY3RvclN0YXR1cy5uZXh0KGRhdGEpO1xuICAgIH1cblxuXG4gICAgc21zUmVxdWVzdChzbXNSZXF1ZXN0OiBTbXNSZXF1ZXN0KSB7XG4gICAgICAgIC8qXG4gICAgICAgIFNtcyByZXF1ZXN0LlxuICAgICAgICA6cGFyYW0gc21zUmVxdWVzdDpcbiAgICAgICAgOnJldHVybjpcbiAgICAgICAgKi9cbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQoJy9tZmEvc21zL3JlcXVlc3QvJywgc21zUmVxdWVzdClcbiAgICAgICAgICAgIC5tYXAoKHJlc3BvbnNlOiBSZXNwb25zZSkgPT4geyByZXR1cm4gcmVzcG9uc2UuanNvbigpO30pO1xuICAgIH1cblxuICAgIHNtc1ZlcmlmeShzbXNWZXJpZnk6IFNtc1ZlcmlmeSkge1xuICAgICAgICAvKlxuICAgICAgICBTbXMgdmVyaWZ5LlxuICAgICAgICA6cGFyYW0gc21zVmVyaWZ5OlxuICAgICAgICA6cmV0dXJuOlxuICAgICAgICAqL1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnB1dCgnL21mYS9zbXMvdmVyaWZ5LycsIHNtc1ZlcmlmeSlcbiAgICAgICAgICAgIC5tYXAoKHJlc3BvbnNlOiBSZXNwb25zZSkgPT4geyB0aGlzLmdldFR3b0ZhY3RvclN0YXR1cygpO30pO1xuICAgIH1cblxuICAgIGRlYWN0aXZhdGUoKSB7XG4gICAgICAgIC8qXG4gICAgICAgIERlYWN0aXZhdGUgdHdvIGZhY3RvciBhdXRoZW50aWNhdGlvbi5cbiAgICAgICAgOnJldHVybjpcbiAgICAgICAgKi9cbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5kZWxldGUoJy9tZmEvJylcbiAgICAgICAgICAgIC5tYXAoKHJlc3BvbnNlOiBSZXNwb25zZSkgPT4geyB0aGlzLmdldFR3b0ZhY3RvclN0YXR1cygpO30pO1xuICAgIH1cblxufVxuIl19