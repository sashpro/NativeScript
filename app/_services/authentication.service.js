"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* Authentication service */
var core_1 = require("@angular/core");
var core_2 = require("angular2-cookie/core");
require("rxjs/Rx");
var index_1 = require("../_models/index");
var user_service_1 = require("./user.service");
var api_service_1 = require("./api.service");
var AuthenticationService = (function () {
    function AuthenticationService(http, userService, _cookieService) {
        this.http = http;
        this.userService = userService;
        this._cookieService = _cookieService;
        this.email = new index_1.Email;
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }
    AuthenticationService.prototype.getEmail = function () {
        /*
        Get email.
        :return: email
        */
        return this.email;
    };
    AuthenticationService.prototype.checkEmail = function (email) {
        /*
        Check if the user is registered or not.
        :param email:
        */
        return this.http.get('/user/rest-auth/user_exist/' + email + '/')
            .map(function (response) { return response.json(); });
    };
    AuthenticationService.prototype.login = function (authentication) {
        var _this = this;
        /*
        Login.
        :param authentication:
        */
        return this.http.post('/rest-auth/login/', authentication)
            .map(function (response) {
            var res = response.json();
            if (res.token) {
                _this.userService.refreshCurrentUser();
                res.user['token'] = res.token;
                localStorage.setItem('currentUser', JSON.stringify(res.user));
            }
            return response.json();
        });
    };
    AuthenticationService.prototype.register = function (user) {
        /*
        Registration user.
        :param user:
        */
        return this.http.post("/rest-auth/registration/", { "email": user.email,
            "password1": user.password,
            "password2": user.password, })
            .map(function (response) { });
    };
    AuthenticationService.prototype.registrationSecondStep = function (user) {
        var _this = this;
        /*
        Second step of registration. Update user information.
        :param user:
        */
        return this.http.patch("/rest-auth/user/", { "first_name": user.first_name,
            "last_name": user.last_name,
            "phone": user.phone,
            "country": user.country, })
            .map(function (response) { _this.userService.refreshCurrentUser(); });
    };
    AuthenticationService.prototype.resetPassword = function (email) {
        /*
        Reset user password. Send letter to email.
        :param email:
        */
        return this.http.post('/rest-auth/password/reset/', email)
            .map(function (response) { return response.json(); });
    };
    AuthenticationService.prototype.resetPasswordConfirm = function (resetPassword) {
        /*
        Reset user password. Change user password.
        :param resetPassword:
        */
        return this.http.post('/rest-auth/password/reset/confirm/', { "new_password1": resetPassword.password,
            "new_password2": resetPassword.password,
            "token": resetPassword.token,
            "uid": resetPassword.uid })
            .map(function (response) { return response.json(); });
    };
    AuthenticationService.prototype.logout = function () {
        var _this = this;
        /*
        Logout.
        */
        return this.http.post("/rest-auth/logout/", {})
            .map(function (response) {
            _this.userService.removeCurrentUser();
            _this._cookieService.remove('csrftoken');
        });
    };
    AuthenticationService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [api_service_1.ApiService,
            user_service_1.UserService,
            core_2.CookieService])
    ], AuthenticationService);
    return AuthenticationService;
}());
exports.AuthenticationService = AuthenticationService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aGVudGljYXRpb24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImF1dGhlbnRpY2F0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw0QkFBNEI7QUFDNUIsc0NBQTJFO0FBRTNFLDZDQUFrRjtBQUNsRixtQkFBaUI7QUFFakIsMENBQThFO0FBQzlFLCtDQUE0RTtBQUM1RSw2Q0FBMkU7QUFJM0U7SUFJSSwrQkFBb0IsSUFBZ0IsRUFDaEIsV0FBd0IsRUFDeEIsY0FBNEI7UUFGNUIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNoQixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixtQkFBYyxHQUFkLGNBQWMsQ0FBYztRQUxoRCxVQUFLLEdBQUcsSUFBSSxhQUFLLENBQUM7UUFNZCxJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztRQUNsRSxJQUFJLENBQUMsS0FBSyxHQUFHLFdBQVcsSUFBSSxXQUFXLENBQUMsS0FBSyxDQUFDO0lBQ2xELENBQUM7SUFFRCx3Q0FBUSxHQUFSO1FBQ0k7OztVQUdFO1FBQ0YsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDdEIsQ0FBQztJQUVELDBDQUFVLEdBQVYsVUFBVyxLQUFhO1FBQ3BCOzs7VUFHRTtRQUNGLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyw2QkFBNkIsR0FBRyxLQUFLLEdBQUcsR0FBRyxDQUFDO2FBQzVELEdBQUcsQ0FBQyxVQUFDLFFBQWtCLElBQU8sTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFBLENBQUMsQ0FBQyxDQUFDO0lBQ2pFLENBQUM7SUFFRCxxQ0FBSyxHQUFMLFVBQU0sY0FBOEI7UUFBcEMsaUJBY0M7UUFiRzs7O1VBR0U7UUFDRixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJ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QUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFwR1EscUJBQXFCO1FBRGpDLGlCQUFVLEVBQUU7eUNBS2lCLHdCQUFVO1lBQ0gsMEJBQVc7WUFDVCxvQkFBYTtPQU52QyxxQkFBcUIsQ0FxR2pDO0lBQUQsNEJBQUM7Q0FBQSxBQXJHRCxJQXFHQztBQXJHWSxzREFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBBdXRoZW50aWNhdGlvbiBzZXJ2aWNlICovXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJlc3BvbnNlIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgQ29va2llU2VydmljZSB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSAnYW5ndWxhcjItY29va2llL2NvcmUnO1xuaW1wb3J0ICdyeGpzL1J4JztcblxuaW1wb3J0IHsgQXV0aGVudGljYXRpb24sIEVtYWlsLCBSZXNldFBhc3N3b3JkLCBVc2VyIH0gZnJvbSAnLi4vX21vZGVscy9pbmRleCc7XG5pbXBvcnQgeyBVc2VyU2VydmljZSB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tICcuL3VzZXIuc2VydmljZSc7XG5pbXBvcnQgeyBBcGlTZXJ2aWNlIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tICcuL2FwaS5zZXJ2aWNlJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQXV0aGVudGljYXRpb25TZXJ2aWNlIHtcbiAgICBlbWFpbCA9IG5ldyBFbWFpbDtcbiAgICB0b2tlbjogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBBcGlTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgX2Nvb2tpZVNlcnZpY2U6Q29va2llU2VydmljZSkge1xuICAgICAgICB2YXIgY3VycmVudFVzZXIgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjdXJyZW50VXNlcicpKTtcbiAgICAgICAgdGhpcy50b2tlbiA9IGN1cnJlbnRVc2VyICYmIGN1cnJlbnRVc2VyLnRva2VuO1xuICAgIH1cblxuICAgIGdldEVtYWlsKCkge1xuICAgICAgICAvKlxuICAgICAgICBHZXQgZW1haWwuXG4gICAgICAgIDpyZXR1cm46IGVtYWlsXG4gICAgICAgICovXG4gICAgICAgIHJldHVybiB0aGlzLmVtYWlsO1xuICAgIH1cblxuICAgIGNoZWNrRW1haWwoZW1haWw6IHN0cmluZykge1xuICAgICAgICAvKlxuICAgICAgICBDaGVjayBpZiB0aGUgdXNlciBpcyByZWdpc3RlcmVkIG9yIG5vdC5cbiAgICAgICAgOnBhcmFtIGVtYWlsOlxuICAgICAgICAqL1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCgnL3VzZXIvcmVzdC1hdXRoL3VzZXJfZXhpc3QvJyArIGVtYWlsICsgJy8nKVxuICAgICAgICAgICAgLm1hcCgocmVzcG9uc2U6IFJlc3BvbnNlKSA9PiB7IHJldHVybiByZXNwb25zZS5qc29uKCk7fSk7XG4gICAgfVxuXG4gICAgbG9naW4oYXV0aGVudGljYXRpb246IEF1dGhlbnRpY2F0aW9uKSB7XG4gICAgICAgIC8qXG4gICAgICAgIExvZ2luLlxuICAgICAgICA6cGFyYW0gYXV0aGVudGljYXRpb246XG4gICAgICAgICovXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCgnL3Jlc3QtYXV0aC9sb2dpbi8nLCBhdXRoZW50aWNhdGlvbilcbiAgICAgICAgICAgIC5tYXAoKHJlc3BvbnNlOiBSZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCByZXMgPSByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICAgICAgaWYgKHJlcy50b2tlbikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVzZXJTZXJ2aWNlLnJlZnJlc2hDdXJyZW50VXNlcigpO1xuICAgICAgICAgICAgICAgICAgICByZXMudXNlclsndG9rZW4nXSA9IHJlcy50b2tlbjtcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2N1cnJlbnRVc2VyJywgSlNPTi5zdHJpbmdpZnkocmVzLnVzZXIpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTt9KTtcbiAgICB9XG5cbiAgICByZWdpc3Rlcih1c2VyOiBBdXRoZW50aWNhdGlvbikge1xuICAgICAgICAvKlxuICAgICAgICBSZWdpc3RyYXRpb24gdXNlci5cbiAgICAgICAgOnBhcmFtIHVzZXI6XG4gICAgICAgICovXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChcIi9yZXN0LWF1dGgvcmVnaXN0cmF0aW9uL1wiLFxuICAgICAgICAgICAgICAgIHsgXCJlbWFpbFwiOiB1c2VyLmVtYWlsLFxuICAgICAgICAgICAgICAgICAgXCJwYXNzd29yZDFcIjogdXNlci5wYXNzd29yZCxcbiAgICAgICAgICAgICAgICAgIFwicGFzc3dvcmQyXCI6IHVzZXIucGFzc3dvcmQsIH0pXG4gICAgICAgICAgICAubWFwKChyZXNwb25zZTogUmVzcG9uc2UpID0+IHsgfSk7XG4gICAgfVxuXG4gICAgcmVnaXN0cmF0aW9uU2Vjb25kU3RlcCh1c2VyOiBVc2VyKSB7XG4gICAgICAgIC8qXG4gICAgICAgIFNlY29uZCBzdGVwIG9mIHJlZ2lzdHJhdGlvbi4gVXBkYXRlIHVzZXIgaW5mb3JtYXRpb24uXG4gICAgICAgIDpwYXJhbSB1c2VyOlxuICAgICAgICAqL1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBhdGNoKFwiL3Jlc3QtYXV0aC91c2VyL1wiLFxuICAgICAgICAgICAgICAgIHsgXCJmaXJzdF9uYW1lXCI6IHVzZXIuZmlyc3RfbmFtZSxcbiAgICAgICAgICAgICAgICAgIFwibGFzdF9uYW1lXCI6IHVzZXIubGFzdF9uYW1lLFxuICAgICAgICAgICAgICAgICAgXCJwaG9uZVwiOiB1c2VyLnBob25lLFxuICAgICAgICAgICAgICAgICAgXCJjb3VudHJ5XCI6IHVzZXIuY291bnRyeSx9KVxuICAgICAgICAgICAgLm1hcCgocmVzcG9uc2U6IFJlc3BvbnNlKSA9PiB7IHRoaXMudXNlclNlcnZpY2UucmVmcmVzaEN1cnJlbnRVc2VyKCk7fSk7XG4gICAgfVxuXG4gICAgcmVzZXRQYXNzd29yZChlbWFpbDogRW1haWwpIHtcbiAgICAgICAgLypcbiAgICAgICAgUmVzZXQgdXNlciBwYXNzd29yZC4gU2VuZCBsZXR0ZXIgdG8gZW1haWwuXG4gICAgICAgIDpwYXJhbSBlbWFpbDpcbiAgICAgICAgKi9cbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KCcvcmVzdC1hdXRoL3Bhc3N3b3JkL3Jlc2V0LycsIGVtYWlsKVxuICAgICAgICAgICAgLm1hcCgocmVzcG9uc2U6IFJlc3BvbnNlKSA9PiB7IHJldHVybiByZXNwb25zZS5qc29uKCk7fSk7XG4gICAgfVxuXG4gICAgcmVzZXRQYXNzd29yZENvbmZpcm0ocmVzZXRQYXNzd29yZDogUmVzZXRQYXNzd29yZCkge1xuICAgICAgICAvKlxuICAgICAgICBSZXNldCB1c2VyIHBhc3N3b3JkLiBDaGFuZ2UgdXNlciBwYXNzd29yZC5cbiAgICAgICAgOnBhcmFtIHJlc2V0UGFzc3dvcmQ6XG4gICAgICAgICovXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCgnL3Jlc3QtYXV0aC9wYXNzd29yZC9yZXNldC9jb25maXJtLycsXG4gICAgICAgICAgICAgICAgeyBcIm5ld19wYXNzd29yZDFcIjogcmVzZXRQYXNzd29yZC5wYXNzd29yZCxcbiAgICAgICAgICAgICAgICAgIFwibmV3X3Bhc3N3b3JkMlwiOiByZXNldFBhc3N3b3JkLnBhc3N3b3JkLFxuICAgICAgICAgICAgICAgICAgXCJ0b2tlblwiOiByZXNldFBhc3N3b3JkLnRva2VuLFxuICAgICAgICAgICAgICAgICAgXCJ1aWRcIjogcmVzZXRQYXNzd29yZC51aWQgfSlcbiAgICAgICAgICAgIC5tYXAoKHJlc3BvbnNlOiBSZXNwb25zZSkgPT4geyByZXR1cm4gcmVzcG9uc2UuanNvbigpO30pO1xuICAgIH1cblxuICAgIGxvZ291dCgpIHtcbiAgICAgICAgLypcbiAgICAgICAgTG9nb3V0LlxuICAgICAgICAqL1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoXCIvcmVzdC1hdXRoL2xvZ291dC9cIiwge30pXG4gICAgICAgICAgICAubWFwKChyZXNwb25zZTogUmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnVzZXJTZXJ2aWNlLnJlbW92ZUN1cnJlbnRVc2VyKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fY29va2llU2VydmljZS5yZW1vdmUoJ2NzcmZ0b2tlbicpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG4iXX0=