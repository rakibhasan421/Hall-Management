import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { HallManagementService } from '../hall-management.service';
import { StudentInfo } from '../models/hallManagement';

@Component({
    selector: 'app-student-view-popup',
    templateUrl: './student-view-popup.component.html',
    styleUrls: ['./student-view-popup.component.css']
})
export class StudentViewPopupComponent implements OnInit {

    constructor(@Inject(MAT_DIALOG_DATA) public studentInfo: StudentInfo, private breakpointObserver: BreakpointObserver, private hallManagementService: HallManagementService) { }

    ngOnInit(): void {

    }
    isHandset$: Observable<boolean> = this.breakpointObserver.observe([Breakpoints.Handset, Breakpoints.Tablet]).pipe(
        map(result => result.matches),
        shareReplay()
    );


}
