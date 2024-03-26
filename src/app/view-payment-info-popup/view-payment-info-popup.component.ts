import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { HallManagementService } from '../hall-management.service';
import { PaymentInfo, StudentPaymentInfo } from '../models/hallManagement';

@Component({
    selector: 'app-view-payment-info-popup',
    templateUrl: './view-payment-info-popup.component.html',
    styleUrls: ['./view-payment-info-popup.component.css']
})
export class ViewPaymentInfoPopupComponent implements OnInit {

    constructor(@Inject(MAT_DIALOG_DATA) public data: any, private breakpointObserver: BreakpointObserver, private hallManagementService: HallManagementService, public dialog: MatDialog) { }

    paymentInfoList: StudentPaymentInfo[] = [];

    // studentId!: string;

    ngOnInit(): void {
        // if (this.data) {
        //     this.studentId = JSON.parse(JSON.stringify(this.data));

        // }

        if (this.data) {

            this.hallManagementService.getStudentPaymentInfo(this.data.studentId).subscribe((paymentList) => {
                if (paymentList) {
                    this.paymentInfoList = paymentList
                }
            })
        }



    }

    isHandset$: Observable<boolean> = this.breakpointObserver.observe([Breakpoints.Handset, Breakpoints.Tablet]).pipe(
        map(result => result.matches),
        shareReplay()
    );

    selectedItem: any;
    selectListItem(item: any) {
        this.selectedItem = item
    }

}
