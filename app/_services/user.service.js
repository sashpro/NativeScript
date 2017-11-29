"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* Current user service */
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var modal_1 = require("ngx-bootstrap/modal");
var Observable_1 = require("rxjs/Observable");
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
var api_service_1 = require("./api.service");
var auto_logout_component_1 = require("../auto-logout/auto-logout.component");
var UserService = (function () {
    function UserService(http, router, modalService) {
        var _this = this;
        this.http = http;
        this.router = router;
        this.modalService = modalService;
        this.currentUser = null;
        this.currentUserObserver = new BehaviorSubject_1.BehaviorSubject(null);
        var storedUser = localStorage.getItem('currentUser');
        if (storedUser !== null) {
            this.setCurrentUser(JSON.parse(storedUser));
            this.refreshCurrentUser();
        }
        this.http.errorUnauthorized.subscribe(function (error) {
            if (error) {
                if (!error.isLogin && _this.router.url != '/') {
                    _this.removeCurrentUser();
                    _this.modalService.show(auto_logout_component_1.AutoLogoutComponent);
                }
            }
        });
    }
    UserService.prototype.refreshCurrentUser = function () {
        var _this = this;
        /*
        Refresh information about the current user
        */
        this.http.get('/rest-auth/user/')
            .map(function (response) {
            var user = response.json();
            if (user.groups_name.indexOf('managers') != -1) {
                user.role = 'manager';
            }
            else if (user.groups_name.indexOf('users') != -1) {
                user.role = 'user';
            }
            return user;
        })
            .catch(function (error) {
            _this.setCurrentUser(null);
            return Observable_1.Observable.throw(error);
        })
            .subscribe(function (data) {
            _this.setCurrentUser(data);
        });
    };
    UserService.prototype.getCurrentUser = function () {
        /*
        Get information about the current user
        :return: Observer
        */
        if (this.currentUserObserver.getValue() === null || this.currentUserObserver.getValue() === undefined) {
            this.refreshCurrentUser();
        }
        return this.currentUserObserver;
    };
    UserService.prototype.setCurrentUser = function (user) {
        /*
        Set information about the current user
        :return:
        */
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUser = user;
        this.currentUserObserver.next(user);
    };
    UserService.prototype.updateUserInformation = function (user) {
        var _this = this;
        /*
        Update information about the current user
        :return: information about the current user
        */
        return this.http.patch("/rest-auth/user/", { "username": user.username,
            "first_name": user.first_name,
            "last_name": user.last_name,
            "date_of_birth": user.date_of_birth,
            "address": user.address,
            "city": user.city,
            "postal_code": user.postal_code, })
            .map(function (response) { _this.setCurrentUser(response.json()); });
    };
    UserService.prototype.updateUserAvatar = function (userAvatar) {
        var _this = this;
        /*
        Update avatar of current user
        :return: information about the current user
        */
        var formData = new FormData();
        formData.append('avatar', userAvatar, 'avatar.jpg');
        return this.http.patch("/rest-auth/user/", formData)
            .map(function (response) { _this.setCurrentUser(response.json()); });
    };
    UserService.prototype.updateUserPhone = function (userPhone) {
        var _this = this;
        /*
        Update current user phone
        :return:
        */
        return this.http.patch("/user/phone/update/", userPhone)
            .map(function (response) { _this.refreshCurrentUser(); });
    };
    UserService.prototype.changePassword = function (user) {
        /*
        Change password of the current user
        :return:
        */
        return this.http.post("/rest-auth/password/change/", { "new_password1": user.password,
            "new_password2": user.password, })
            .map(function (response) { });
    };
    UserService.prototype.removeCurrentUser = function () {
        /*
        Remove information about the current user
        :return:
        */
        this.router.navigate(['/']);
        localStorage.setItem('currentUser', JSON.stringify(null));
        localStorage.removeItem('currentUserWallets');
        this.setCurrentUser(null);
    };
    UserService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [api_service_1.ApiService,
            router_1.Router,
            modal_1.BsModalService])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXNlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMEJBQTBCO0FBQzFCLHNDQUEyRTtBQUUzRSwwQ0FBNkU7QUFDN0UsNkNBQWlGO0FBQ2pGLDhDQUE2RTtBQUM3RSx3REFBa0Y7QUFHbEYsNkNBQTJFO0FBRTNFLDhFQUFrRztBQUlsRztJQUlJLHFCQUFxQixJQUFnQixFQUNoQixNQUFjLEVBQ2QsWUFBNEI7UUFGakQsaUJBZ0JDO1FBaEJvQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBQ2hCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxpQkFBWSxHQUFaLFlBQVksQ0FBZ0I7UUFMekMsZ0JBQVcsR0FBZ0IsSUFBSSxDQUFDO1FBQ2hDLHdCQUFtQixHQUFHLElBQUksaUNBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUtwRCxJQUFJLFVBQVUsR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ3JELEVBQUUsQ0FBQyxDQUFDLFVBQVUsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3RCLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQzVDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQzlCLENBQUM7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBRSxVQUFDLEtBQUs7WUFDekMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFDUixFQUFFLENBQUMsQ0FBRSxDQUFDLEtBQUssQ0FBQyxPQUFPLElBQUksS0FBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLElBQUksR0FBSSxDQUFDLENBQUMsQ0FBQztvQkFDN0MsS0FBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7b0JBQ3pCLEtBQUksQ0FBQyxZQUFZLENBQUMs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Q0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQTFIUSxXQUFXO1FBRHZCLGlCQUFVLEVBQUU7eUNBS2tCLHdCQUFVO1lBQ1IsZUFBTTtZQUNBLHNCQUFjO09BTnhDLFdBQVcsQ0EySHZCO0lBQUQsa0JBQUM7Q0FBQSxBQTNIRCxJQTJIQztBQTNIWSxrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEN1cnJlbnQgdXNlciBzZXJ2aWNlICovXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJlc3BvbnNlIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgUm91dGVyIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEJzTW9kYWxTZXJ2aWNlIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gJ25neC1ib290c3RyYXAvbW9kYWwnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gJ3J4anMvQmVoYXZpb3JTdWJqZWN0JztcblxuaW1wb3J0IHsgQXV0aGVudGljYXRpb24sIENoYW5nZVBob25lLCBVc2VyIH0gICAgICAgICAgZnJvbSAnLi4vX21vZGVscy9pbmRleCc7XG5pbXBvcnQgeyBBcGlTZXJ2aWNlIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tICcuL2FwaS5zZXJ2aWNlJztcblxuaW1wb3J0IHsgQXV0b0xvZ291dENvbXBvbmVudCB9ICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSAnLi4vYXV0by1sb2dvdXQvYXV0by1sb2dvdXQuY29tcG9uZW50JztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVXNlclNlcnZpY2Uge1xuICAgIHByaXZhdGUgY3VycmVudFVzZXI6IFVzZXIgfCBudWxsID0gbnVsbDtcbiAgICBwcml2YXRlIGN1cnJlbnRVc2VyT2JzZXJ2ZXIgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KG51bGwpO1xuXG4gICAgY29uc3RydWN0b3IoIHByaXZhdGUgaHR0cDogQXBpU2VydmljZSxcbiAgICAgICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICAgICAgICAgICAgICAgcHJpdmF0ZSBtb2RhbFNlcnZpY2U6IEJzTW9kYWxTZXJ2aWNlLCApIHtcbiAgICAgICAgbGV0IHN0b3JlZFVzZXIgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY3VycmVudFVzZXInKTtcbiAgICAgICAgaWYgKHN0b3JlZFVzZXIgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0Q3VycmVudFVzZXIoSlNPTi5wYXJzZShzdG9yZWRVc2VyKSk7XG4gICAgICAgICAgICB0aGlzLnJlZnJlc2hDdXJyZW50VXNlcigpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaHR0cC5lcnJvclVuYXV0aG9yaXplZC5zdWJzY3JpYmUoIChlcnJvcikgPT4ge1xuICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgaWYgKCAhZXJyb3IuaXNMb2dpbiAmJiB0aGlzLnJvdXRlci51cmwgIT0gJy8nICkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUN1cnJlbnRVc2VyKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW9kYWxTZXJ2aWNlLnNob3coQXV0b0xvZ291dENvbXBvbmVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZWZyZXNoQ3VycmVudFVzZXIoKTogdm9pZCB7XG4gICAgICAgIC8qXG4gICAgICAgIFJlZnJlc2ggaW5mb3JtYXRpb24gYWJvdXQgdGhlIGN1cnJlbnQgdXNlclxuICAgICAgICAqL1xuICAgICAgICB0aGlzLmh0dHAuZ2V0KCcvcmVzdC1hdXRoL3VzZXIvJylcbiAgICAgICAgICAgIC5tYXAoKHJlc3BvbnNlOiBSZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCB1c2VyID0gcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgICAgIGlmICggdXNlci5ncm91cHNfbmFtZS5pbmRleE9mKCdtYW5hZ2VycycpICE9IC0xICkge1xuICAgICAgICAgICAgICAgICAgICB1c2VyLnJvbGUgPSAnbWFuYWdlcic7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICggdXNlci5ncm91cHNfbmFtZS5pbmRleE9mKCd1c2VycycpICE9IC0xICkge1xuICAgICAgICAgICAgICAgICAgICB1c2VyLnJvbGUgPSAndXNlcic7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB1c2VyO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0Q3VycmVudFVzZXIobnVsbCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyb3IpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKGRhdGE6IFVzZXIpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldEN1cnJlbnRVc2VyKGRhdGEpXG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXRDdXJyZW50VXNlcigpOiBPYnNlcnZhYmxlPFVzZXI+IHtcbiAgICAgICAgLypcbiAgICAgICAgR2V0IGluZm9ybWF0aW9uIGFib3V0IHRoZSBjdXJyZW50IHVzZXJcbiAgICAgICAgOnJldHVybjogT2JzZXJ2ZXJcbiAgICAgICAgKi9cbiAgICAgICAgaWYgKHRoaXMuY3VycmVudFVzZXJPYnNlcnZlci5nZXRWYWx1ZSgpID09PSBudWxsIHx8IHRoaXMuY3VycmVudFVzZXJPYnNlcnZlci5nZXRWYWx1ZSgpID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMucmVmcmVzaEN1cnJlbnRVc2VyKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuY3VycmVudFVzZXJPYnNlcnZlcjtcbiAgICB9XG5cbiAgICBzZXRDdXJyZW50VXNlcih1c2VyOiBVc2VyIHwgbnVsbCkge1xuICAgICAgICAvKlxuICAgICAgICBTZXQgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGN1cnJlbnQgdXNlclxuICAgICAgICA6cmV0dXJuOlxuICAgICAgICAqL1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY3VycmVudFVzZXInLCBKU09OLnN0cmluZ2lmeSh1c2VyKSk7XG4gICAgICAgIHRoaXMuY3VycmVudFVzZXIgPSB1c2VyO1xuICAgICAgICB0aGlzLmN1cnJlbnRVc2VyT2JzZXJ2ZXIubmV4dCh1c2VyKVxuICAgIH1cblxuICAgIHVwZGF0ZVVzZXJJbmZvcm1hdGlvbih1c2VyOiBVc2VyKSB7XG4gICAgICAgIC8qXG4gICAgICAgIFVwZGF0ZSBpbmZvcm1hdGlvbiBhYm91dCB0aGUgY3VycmVudCB1c2VyXG4gICAgICAgIDpyZXR1cm46IGluZm9ybWF0aW9uIGFib3V0IHRoZSBjdXJyZW50IHVzZXJcbiAgICAgICAgKi9cbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wYXRjaChcIi9yZXN0LWF1dGgvdXNlci9cIixcbiAgICAgICAgICAgICAgICB7IFwidXNlcm5hbWVcIjogdXNlci51c2VybmFtZSxcbiAgICAgICAgICAgICAgICAgIFwiZmlyc3RfbmFtZVwiOiB1c2VyLmZpcnN0X25hbWUsXG4gICAgICAgICAgICAgICAgICBcImxhc3RfbmFtZVwiOiB1c2VyLmxhc3RfbmFtZSxcbiAgICAgICAgICAgICAgICAgIFwiZGF0ZV9vZl9iaXJ0aFwiOiB1c2VyLmRhdGVfb2ZfYmlydGgsXG4gICAgICAgICAgICAgICAgICBcImFkZHJlc3NcIjogdXNlci5hZGRyZXNzLFxuICAgICAgICAgICAgICAgICAgXCJjaXR5XCI6IHVzZXIuY2l0eSxcbiAgICAgICAgICAgICAgICAgIFwicG9zdGFsX2NvZGVcIjogdXNlci5wb3N0YWxfY29kZSwgfSlcbiAgICAgICAgICAgIC5tYXAoKHJlc3BvbnNlOiBSZXNwb25zZSkgPT4geyB0aGlzLnNldEN1cnJlbnRVc2VyKHJlc3BvbnNlLmpzb24oKSk7fSk7XG4gICAgfVxuXG4gICAgdXBkYXRlVXNlckF2YXRhcih1c2VyQXZhdGFyOiBGaWxlKSB7XG4gICAgICAgIC8qXG4gICAgICAgIFVwZGF0ZSBhdmF0YXIgb2YgY3VycmVudCB1c2VyXG4gICAgICAgIDpyZXR1cm46IGluZm9ybWF0aW9uIGFib3V0IHRoZSBjdXJyZW50IHVzZXJcbiAgICAgICAgKi9cbiAgICAgICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnYXZhdGFyJywgdXNlckF2YXRhciwgJ2F2YXRhci5qcGcnKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wYXRjaChcIi9yZXN0LWF1dGgvdXNlci9cIiwgZm9ybURhdGEpXG4gICAgICAgICAgICAubWFwKChyZXNwb25zZTogUmVzcG9uc2UpID0+IHsgdGhpcy5zZXRDdXJyZW50VXNlcihyZXNwb25zZS5qc29uKCkpO30pO1xuICAgIH1cblxuICAgIHVwZGF0ZVVzZXJQaG9uZSh1c2VyUGhvbmU6IENoYW5nZVBob25lKSB7XG4gICAgICAgIC8qXG4gICAgICAgIFVwZGF0ZSBjdXJyZW50IHVzZXIgcGhvbmVcbiAgICAgICAgOnJldHVybjpcbiAgICAgICAgKi9cbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wYXRjaChcIi91c2VyL3Bob25lL3VwZGF0ZS9cIiwgdXNlclBob25lKVxuICAgICAgICAgICAgLm1hcCgocmVzcG9uc2U6IFJlc3BvbnNlKSA9PiAgeyB0aGlzLnJlZnJlc2hDdXJyZW50VXNlcigpO30pO1xuICAgIH1cblxuICAgIGNoYW5nZVBhc3N3b3JkKHVzZXI6IEF1dGhlbnRpY2F0aW9uKSB7XG4gICAgICAgIC8qXG4gICAgICAgIENoYW5nZSBwYXNzd29yZCBvZiB0aGUgY3VycmVudCB1c2VyXG4gICAgICAgIDpyZXR1cm46XG4gICAgICAgICovXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChcIi9yZXN0LWF1dGgvcGFzc3dvcmQvY2hhbmdlL1wiLFxuICAgICAgICAgICAgICAgIHsgXCJuZXdfcGFzc3dvcmQxXCI6IHVzZXIucGFzc3dvcmQsXG4gICAgICAgICAgICAgICAgICBcIm5ld19wYXNzd29yZDJcIjogdXNlci5wYXNzd29yZCx9KVxuICAgICAgICAgICAgLm1hcCgocmVzcG9uc2U6IFJlc3BvbnNlKSA9PiB7IH0pO1xuICAgIH1cblxuICAgIHJlbW92ZUN1cnJlbnRVc2VyKCkge1xuICAgICAgICAvKlxuICAgICAgICBSZW1vdmUgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGN1cnJlbnQgdXNlclxuICAgICAgICA6cmV0dXJuOlxuICAgICAgICAqL1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy8nXSk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjdXJyZW50VXNlcicsIEpTT04uc3RyaW5naWZ5KG51bGwpKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2N1cnJlbnRVc2VyV2FsbGV0cycpO1xuICAgICAgICB0aGlzLnNldEN1cnJlbnRVc2VyKG51bGwpO1xuICAgIH1cbn1cbiJdfQ==