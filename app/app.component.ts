import { Component, OnInit, HostListener }            from '@angular/core';
import { Router }                                     from '@angular/router';

import { AuthenticationService, GlobalStorageService } from './_services/index';


@Component({
    selector: 'app',
    // host: {'window:beforeunload':'doSomething'},
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    constructor( private authenticationService: AuthenticationService,
                 private router: Router,
                 private storage: GlobalStorageService ) { }

    ngOnInit() {
        if (( this.storage.getCurrencyTable() === undefined ) ||
            ( this.storage.getCurrencyList() === undefined ) ||
            ( this.storage.getCountryList() === undefined )) {
                this.router.navigate(['/server-down']);
        }
// let context = this;
//     window.addEventListener("beforeunload", function (e) {
//         let currentUser = localStorage.getItem('currentUser');
//         if(currentUser){
//             context.authenticationService.logout().subscribe( (data) => { });
//         }
//     });
    }

    // @HostListener('window:unload', ['$event'])
    // unloadHandler(event) {
    //     console.log('unloadHandler');
    // }
    //
    // @HostListener('window:beforeunload', ['$event'])
    // beforeUnloadHander(event) {
    //     return false;
    // }
    // ngOnDestroy(): void {
    //   this.authenticationService.logout().subscribe(res => { });
    // }

    // @HostListener('window:beforeunload', ['$event'])
    //    public beforeunloadHandler($event) {
    //   if(JSON.parse(localStorage.getItem('currentUser'))) {
    //     this.authenticationService.logout().subscribe((data) => {
    //     });
    //   }
    // }
}
