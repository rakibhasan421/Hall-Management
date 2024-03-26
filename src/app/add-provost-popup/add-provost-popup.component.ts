import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { HallManagementService } from '../hall-management.service';
import { HallBodyInfo, ProvostInfo } from '../models/hallManagement';

@Component({
    selector: 'app-add-provost-popup',
    templateUrl: './add-provost-popup.component.html',
    styleUrls: ['./add-provost-popup.component.css']
})
export class AddProvostPopupComponent implements OnInit {

    constructor(@Inject(MAT_DIALOG_DATA) public provost: ProvostInfo, private breakpointObserver: BreakpointObserver, private hallManagementService: HallManagementService, public dialogRef: MatDialogRef<AddProvostPopupComponent>, public matDialog: MatDialog) { }

    ngOnInit(): void {
        if (this.provost) {
            this.provostInfo = JSON.parse(JSON.stringify(this.provost));
        }

    }
    isHandset$: Observable<boolean> = this.breakpointObserver.observe([Breakpoints.Handset, Breakpoints.Tablet]).pipe(
        map(result => result.matches),
        shareReplay()
    );

    provostInfo: ProvostInfo = {
        provostId: '',
        image: '',
        provostName: '',
        contactNo: '',
        provostEmail: '',
        provostDesignation: '',
        provostDepartment: '',
        provostTenune: '',
        isCurrent: false
    }

    resetprovostInfo() {
        this.provostInfo = {
            provostId: '',
            image: '',
            provostName: '',
            contactNo: '',
            provostEmail: '',
            provostDesignation: '',
            provostDepartment: '',
            provostTenune: '',
            isCurrent: false
        }
    }

    addProvost() {

        if (this.provostInfo) {

            this.provostInfo.provostId = (this.provostInfo.provostId) ? this.provostInfo.provostId : this.hallManagementService.generateUniqueId();

            this.dialogRef.close(this.provostInfo);
            // this.prepareContactNumberFormate();
            // this.prepareZipCodeFormate();
            this.resetprovostInfo();
        }

    }

}
