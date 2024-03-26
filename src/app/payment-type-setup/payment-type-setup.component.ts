import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { HallManagementService } from '../hall-management.service';
import { PaymentType } from '../models/hallManagement';
import { PaymentTypeInfoViewComponent } from '../payment-type-info-view/payment-type-info-view.component';

@Component({
    selector: 'app-payment-type-setup',
    templateUrl: './payment-type-setup.component.html',
    styleUrls: ['./payment-type-setup.component.css']
})
export class PaymentTypeSetupComponent implements OnInit {

    constructor(private breakpointObserver: BreakpointObserver, private hallManagementService: HallManagementService, public dialog: MatDialog) { }

    patmentTypeList: PaymentType[] = [];

    ngOnInit(): void {

        this.hallManagementService.getPaymentTypeList().subscribe((paymentType) => {
            if (paymentType) {
                this.patmentTypeList = paymentType;
            }
        })

    }

    isHandset$: Observable<boolean> = this.breakpointObserver.observe([Breakpoints.Handset, Breakpoints.Tablet]).pipe(
        map(result => result.matches),
        shareReplay()
    );

    selectedItem: any;
    selectListItem(item: any) {
        this.selectedItem = item
    }

    paymentType: PaymentType = {
        paymentTypeId: '',
        title: '',
        amount: 0,
        descriptions: ''
    }
    resetPaymentInfo() {
        this.paymentType = {
            paymentTypeId: '',
            title: '',
            amount: 0,
            descriptions: ''
        }
    }

    addPayment() {
        if (this.paymentType) {
            this.paymentType.paymentTypeId = (this.paymentType.paymentTypeId) ? this.paymentType.paymentTypeId : this.hallManagementService.generateUniqueId();

            this.hallManagementService.savePaymentType(this.paymentType).subscribe((data) => {
                if (data) {
                    this.resetPaymentInfo();
                    this.updateDepartmentInfoViewList(data);
                }

            })
        }
    }

    editPaymentType(type: PaymentType) {
        this.paymentType = Object.assign({}, type)

    }

    updateDepartmentInfoViewList(paymentType: PaymentType) {
        if (paymentType) {

            var updateFlag = false;
            this.patmentTypeList.forEach((element) => {

                if (element.paymentTypeId == paymentType.paymentTypeId) {
                    var index = this.patmentTypeList.indexOf(element);
                    this.patmentTypeList[index] = paymentType;
                    // element = branchInfo;
                    updateFlag = true;
                }

            });
            if (updateFlag == false) {
                this.patmentTypeList.unshift(paymentType);

            }
        }
    }


    openPaymentTypeViewDialog(payment: PaymentType): void {
        const sampleDialog = this.dialog.open(PaymentTypeInfoViewComponent, {
            width: '50%',
            height: '50%',
            data: payment,
            // disableClose: true
        });
    }

}
