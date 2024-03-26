import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { HallManagementService } from '../hall-management.service';
import { PaymentInfo, PaymentType, StudentInfo } from '../models/hallManagement';

@Component({
    selector: 'app-add-payment-info-popup',
    templateUrl: './add-payment-info-popup.component.html',
    styleUrls: ['./add-payment-info-popup.component.css']
})
export class AddPaymentInfoPopupComponent implements OnInit {

    constructor(@Inject(MAT_DIALOG_DATA) public data: any, private breakpointObserver: BreakpointObserver, private hallManagementService: HallManagementService, public dialogRef: MatDialogRef<AddPaymentInfoPopupComponent>, public matDialog: MatDialog) { }

    paymentTypeList: PaymentType[] = []

    studentId!: string;

    ngOnInit(): void {
        this.hallManagementService.getPaymentTypeList().subscribe((payment) => {
            debugger
            if (payment) {
                this.paymentTypeList = payment;
            }
        })
        if (this.data) {
            this.studentId = this.data.studentId;
            this.paymentInfo = JSON.parse(JSON.stringify(this.data.payment));
        }


    }

    isHandset$: Observable<boolean> = this.breakpointObserver.observe([Breakpoints.Handset, Breakpoints.Tablet]).pipe(
        map(result => result.matches),
        shareReplay()
    );

    paymentInfo: PaymentInfo = {
        paymentInfoId: '',
        slipNo: '',
        dateTime: '',
        amount: 0,
        paymentTypeId: '',
        studentId: ''
    }

    resetPaymentInfo() {
        this.paymentInfo = {
            paymentInfoId: '',
            slipNo: '',
            dateTime: '',
            amount: 0,
            paymentTypeId: '',
            studentId: ''
        }
    }

    typeInfo: PaymentType = {
        paymentTypeId: '',
        title: '',
        amount: 0,
        descriptions: ''
    }

    onSelectionChange() {
        if (this.typeInfo.title) {
            this.paymentInfo.paymentTypeId = this.typeInfo.paymentTypeId;

        }
    }

    addPayment() {

        if (this.paymentInfo) {

            this.paymentInfo.paymentInfoId = (this.paymentInfo.paymentInfoId) ? this.paymentInfo.paymentInfoId : this.hallManagementService.generateUniqueId();

            this.paymentInfo.paymentTypeId = this.typeInfo.paymentTypeId;
            this.paymentInfo.studentId = this.studentId

            this.dialogRef.close(this.paymentInfo);
            // this.prepareContactNumberFormate();
            // this.prepareZipCodeFormate();
            this.resetPaymentInfo();
        }
    }
}
