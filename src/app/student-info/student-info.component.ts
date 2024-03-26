import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { HallManagementService } from '../hall-management.service';
import { StudentInfo, StudentLogin, StudentPaymentInfo } from '../models/hallManagement';
import { ViewPaymentInfoPopupComponent } from '../view-payment-info-popup/view-payment-info-popup.component';

@Component({
    selector: 'app-student-info',
    templateUrl: './student-info.component.html',
    styleUrls: ['./student-info.component.css']
})
export class StudentInfoComponent implements OnInit {

    constructor(private breakpointObserver: BreakpointObserver, private hallManagementService: HallManagementService, public dialog: MatDialog) { }

    viewcomponent = false;

    studentInfo!: StudentInfo;

    ngOnInit(): void {
    }

    studentLogin: StudentLogin = {
        rollNo: '',
        registrationNo: ''
    }

    resetLogin() {
        this.studentLogin = {
            rollNo: '',
            registrationNo: ''
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

    search() {
        if (this.studentLogin) {
            this.hallManagementService.studentLogin(this.studentLogin).subscribe((login) => {
                if (login) {
                    this.studentInfo = login;
                    this.resetLogin();
                    this.viewcomponent = true;
                }
            })
        }
    }

    openPaymentInfoViewDialog(payment?: StudentPaymentInfo): void {
        const sampleDialog = this.dialog.open(ViewPaymentInfoPopupComponent, {
            width: '90%',
            height: '90%',
            data: {
                payment: payment,
                studentId: this.studentInfo.studentId
            }
            // disableClose: true
        });
    }
}
