import { Component, OnInit }                          from '@angular/core';
import { BsModalRef }                                 from 'ngx-bootstrap/modal/modal-options.class';


@Component({
    selector: 'auto-logout',
    templateUrl: 'auto-logout.component.html',
    styleUrls: ['auto-logout.component.css']
})
export class AutoLogoutComponent implements OnInit {

    constructor( public bsModalRef: BsModalRef ) { }

    ngOnInit() { };

}
