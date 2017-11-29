import { Component, OnInit }        from '@angular/core';
import { GlobalStorageService }     from './../_services/index';

@Component({
    selector: 'server-down-page',
    templateUrl: './server-down-page.component.html',
    styleUrls: ['./server-down-page.component.css']
})
export class ServerDownPageComponent implements OnInit {

    constructor ( private globalStorageService: GlobalStorageService ) {}

    ngOnInit () {

    }
}