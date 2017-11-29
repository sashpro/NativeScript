"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var index_1 = require("./_services/index");
var AppComponent = (function () {
    function AppComponent(authenticationService, router, storage) {
        this.authenticationService = authenticationService;
        this.router = router;
        this.storage = storage;
    }
    AppComponent.prototype.ngOnInit = function () {
        if ((this.storage.getCurrencyTable() === undefined) ||
            (this.storage.getCurrencyList() === undefined) ||
            (this.storage.getCountryList() === undefined)) {
            this.router.navigate(['/server-down']);
        }
        // let context = this;
        //     window.addEventListener("beforeunload", function (e) {
        //         let currentUser = localStorage.getItem('currentUser');
        //         if(currentUser){
        //             context.authenticationService.logout().subscribe( (data) => { });
        //         }
        //     });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app',
            // host: {'window:beforeunload':'doSomething'},
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        }),
        __metadata("design:paramtypes", [index_1.AuthenticationService,
            router_1.Router,
            index_1.GlobalStorageService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkU7QUFDM0UsMENBQTZFO0FBRTdFLDJDQUFnRjtBQVNoRjtJQUVJLHNCQUFxQixxQkFBNEMsRUFDNUMsTUFBYyxFQUNkLE9BQTZCO1FBRjdCLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBdUI7UUFDNUMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLFlBQU8sR0FBUCxPQUFPLENBQXNCO0lBQUssQ0FBQztJQUV4RCwrQkFBUSxHQUFSO1FBQ0ksRUFBRSxDQUFDLENBQUMsQ0FBRSxJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixFQUFFLEtBQUssU0FBUyxDQUFFO1lBQ2pELENBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxlQUFlLEVBQUUsS0FBSyxTQUFTLENBQUU7WUFDaEQsQ0FBRSxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxLQUFLLFNBQVMsQ0FBRSxDQUFDLENBQUMsQ0FBQztZQUM5QyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7UUFDL0MsQ0FBQztRQUNULHNCQUFzQjtRQUN0Qiw2REFBNkQ7UUFDN0QsaUVBQWlFO1FBQ2pFLDJCQUEyQjtRQUMzQixnRkFBZ0Y7UUFDaEYsWUFBWTtRQUNaLFVBQVU7SUFDTixDQUFDO0lBbkJRLFlBQVk7UUFOeEIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxLQUFLO1lBQ2YsK0NBQStDO1lBQy9DLFdBQVcsRUFBRSxzQkFBc0I7WUFDbkMsU0FBUyxFQUFFLENBQUMscUJBQXFCLENBQUM7U0FDckMsQ0FBQzt5Q0FHOEMsNkJBQXFCO1lBQ3BDLGVBQU07WUFDTCw0QkFBb0I7T0FKekMsWUFBWSxDQXlDeEI7SUFBRCxtQkFBQztDQUFBLEFBekNELElBeUNDO0FBekNZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEhvc3RMaXN0ZW5lciB9ICAgICAgICAgICAgZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblNlcnZpY2UsIEdsb2JhbFN0b3JhZ2VTZXJ2aWNlIH0gZnJvbSAnLi9fc2VydmljZXMvaW5kZXgnO1xuXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnYXBwJyxcbiAgICAvLyBob3N0OiB7J3dpbmRvdzpiZWZvcmV1bmxvYWQnOidkb1NvbWV0aGluZyd9LFxuICAgIHRlbXBsYXRlVXJsOiAnLi9hcHAuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL2FwcC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIGNvbnN0cnVjdG9yKCBwcml2YXRlIGF1dGhlbnRpY2F0aW9uU2VydmljZTogQXV0aGVudGljYXRpb25TZXJ2aWNlLFxuICAgICAgICAgICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgICAgICAgICAgICAgICBwcml2YXRlIHN0b3JhZ2U6IEdsb2JhbFN0b3JhZ2VTZXJ2aWNlICkgeyB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgaWYgKCggdGhpcy5zdG9yYWdlLmdldEN1cnJlbmN5VGFibGUoKSA9PT0gdW5kZWZpbmVkICkgfHxcbiAgICAgICAgICAgICggdGhpcy5zdG9yYWdlLmdldEN1cnJlbmN5TGlzdCgpID09PSB1bmRlZmluZWQgKSB8fFxuICAgICAgICAgICAgKCB0aGlzLnN0b3JhZ2UuZ2V0Q291bnRyeUxpc3QoKSA9PT0gdW5kZWZpbmVkICkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9zZXJ2ZXItZG93biddKTtcbiAgICAgICAgfVxuLy8gbGV0IGNvbnRleHQgPSB0aGlzO1xuLy8gICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiYmVmb3JldW5sb2FkXCIsIGZ1bmN0aW9uIChlKSB7XG4vLyAgICAgICAgIGxldCBjdXJyZW50VXNlciA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjdXJyZW50VXNlcicpO1xuLy8gICAgICAgICBpZihjdXJyZW50VXNlcil7XG4vLyAgICAgICAgICAgICBjb250ZXh0LmF1dGhlbnRpY2F0aW9uU2VydmljZS5sb2dvdXQoKS5zdWJzY3JpYmUoIChkYXRhKSA9PiB7IH0pO1xuLy8gICAgICAgICB9XG4vLyAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gQEhvc3RMaXN0ZW5lcignd2luZG93OnVubG9hZCcsIFsnJGV2ZW50J10pXG4gICAgLy8gdW5sb2FkSGFuZGxlcihldmVudCkge1xuICAgIC8vICAgICBjb25zb2xlLmxvZygndW5sb2FkSGFuZGxlcicpO1xuICAgIC8vIH1cbiAgICAvL1xuICAgIC8vIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzpiZWZvcmV1bmxvYWQnLCBbJyRldmVudCddKVxuICAgIC8vIGJlZm9yZVVubG9hZEhhbmRlcihldmVudCkge1xuICAgIC8vICAgICByZXR1cm4gZmFsc2U7XG4gICAgLy8gfVxuICAgIC8vIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIC8vICAgdGhpcy5hdXRoZW50aWNhdGlvblNlcnZpY2UubG9nb3V0KCkuc3Vic2NyaWJlKHJlcyA9PiB7IH0pO1xuICAgIC8vIH1cblxuICAgIC8vIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzpiZWZvcmV1bmxvYWQnLCBbJyRldmVudCddKVxuICAgIC8vICAgIHB1YmxpYyBiZWZvcmV1bmxvYWRIYW5kbGVyKCRldmVudCkge1xuICAgIC8vICAgaWYoSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY3VycmVudFVzZXInKSkpIHtcbiAgICAvLyAgICAgdGhpcy5hdXRoZW50aWNhdGlvblNlcnZpY2UubG9nb3V0KCkuc3Vic2NyaWJlKChkYXRhKSA9PiB7XG4gICAgLy8gICAgIH0pO1xuICAgIC8vICAgfVxuICAgIC8vIH1cbn1cbiJdfQ==