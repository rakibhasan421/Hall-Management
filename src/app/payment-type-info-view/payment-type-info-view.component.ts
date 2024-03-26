import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { HallManagementService } from '../hall-management.service';
import { PaymentType } from '../models/hallManagement';

@Component({
    selector: 'app-payment-type-info-view',
    templateUrl: './payment-type-info-view.component.html',
    styleUrls: ['./payment-type-info-view.component.css']
})
export class PaymentTypeInfoViewComponent implements OnInit {

    constructor(@Inject(MAT_DIALOG_DATA) public payment: PaymentType, private breakpointObserver: BreakpointObserver, private hallManagementService: HallManagementService) { }

    ngOnInit(): void {

    }
    isHandset$: Observable<boolean> = this.breakpointObserver.observe([Breakpoints.Handset, Breakpoints.Tablet]).pipe(
        map(result => result.matches),
        shareReplay()
    );

}
