import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AddProvostPopupComponent } from '../add-provost-popup/add-provost-popup.component';
import { HallManagementService } from '../hall-management.service';
import { HallBodyInfo, HouseTutorInfo } from '../models/hallManagement';

@Component({
    selector: 'app-add-huse-tutor-popup',
    templateUrl: './add-huse-tutor-popup.component.html',
    styleUrls: ['./add-huse-tutor-popup.component.css']
})
export class AddHuseTutorPopupComponent implements OnInit {

    constructor(@Inject(MAT_DIALOG_DATA) public tutor: HouseTutorInfo, private breakpointObserver: BreakpointObserver, private hallManagementService: HallManagementService, public dialogRef: MatDialogRef<AddHuseTutorPopupComponent>, public matDialog: MatDialog) { }

    ngOnInit(): void {
        if (this.tutor) {
            this.houseTutorInfo = JSON.parse(JSON.stringify(this.tutor));
        }

    }
    isHandset$: Observable<boolean> = this.breakpointObserver.observe([Breakpoints.Handset, Breakpoints.Tablet]).pipe(
        map(result => result.matches),
        shareReplay()
    );
    houseTutorInfo: HouseTutorInfo = {
        tutorId: '',
        image: '',
        tutorName: '',
        contactNo: '',
        tutorEmail: '',
        tutorDesignation: '',
        tutorDepartment: '',
        tutorTenune: ''
    }

    resethouseTutorInfo() {
        this.houseTutorInfo = {
            tutorId: '',
            image: '',
            tutorName: '',
            contactNo: '',
            tutorEmail: '',
            tutorDesignation: '',
            tutorDepartment: '',
            tutorTenune: ''
        }
    }

    addTutor() {

        if (this.houseTutorInfo) {

            this.houseTutorInfo.tutorId = (this.houseTutorInfo.tutorId) ? this.houseTutorInfo.tutorId : this.hallManagementService.generateUniqueId();

            this.dialogRef.close(this.houseTutorInfo);
            // this.prepareContactNumberFormate();
            // this.prepareZipCodeFormate();
            this.resethouseTutorInfo();
        }
    }
}
