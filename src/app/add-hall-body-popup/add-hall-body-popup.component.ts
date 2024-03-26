import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { HallManagementService } from '../hall-management.service';
import { HallBodyInfo, HouseTutorInfo, StudentInfo } from '../models/hallManagement';

@Component({
    selector: 'app-add-hall-body-popup',
    templateUrl: './add-hall-body-popup.component.html',
    styleUrls: ['./add-hall-body-popup.component.css']
})
export class AddHallBodyPopupComponent implements OnInit {

    constructor(@Inject(MAT_DIALOG_DATA) public hallBody: HallBodyInfo, private breakpointObserver: BreakpointObserver, private hallManagementService: HallManagementService, public dialogRef: MatDialogRef<AddHallBodyPopupComponent>, public matDialog: MatDialog) { }

    ngOnInit(): void {
        if (this.hallBody) {
            this.hallBodyInfo = JSON.parse(JSON.stringify(this.hallBody));
        }

    }
    isHandset$: Observable<boolean> = this.breakpointObserver.observe([Breakpoints.Handset, Breakpoints.Tablet]).pipe(
        map(result => result.matches),
        shareReplay()
    );

    hallBodyInfo: HallBodyInfo = {
        hallBodyId: '',
        hallBodyName: '',
        contactNo: '',
        hallBodyEmail: '',
        hallBodyDesignation: '',
        hallBodyTenune: ''
    }

    resethallBodyInfo() {
        this.hallBodyInfo = {
            hallBodyId: '',
            hallBodyName: '',
            contactNo: '',
            hallBodyEmail: '',
            hallBodyDesignation: '',
            hallBodyTenune: ''
        }
    }

    addHallBody() {

        if (this.hallBodyInfo)
            this.hallBodyInfo.hallBodyId = (this.hallBodyInfo.hallBodyId) ? this.hallBodyInfo.hallBodyId : this.hallManagementService.generateUniqueId();

        this.dialogRef.close(this.hallBodyInfo);
        // this.prepareContactNumberFormate();
        // this.prepareZipCodeFormate();
        this.resethallBodyInfo();
    }

}


