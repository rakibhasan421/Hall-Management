import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { HallManagementService } from '../hall-management.service';
import { HouseTutorInfo } from '../models/hallManagement';

@Component({
    selector: 'app-house-tutor-list',
    templateUrl: './house-tutor-list.component.html',
    styleUrls: ['./house-tutor-list.component.css']
})
export class HouseTutorListComponent implements OnInit {


    constructor(private breakpointObserver: BreakpointObserver, private hallManagementService: HallManagementService, public dialog: MatDialog) { }

    houseTutorList: HouseTutorInfo[] = [];

    ngOnInit(): void {
        this.hallManagementService.getHouseTutorInfo().subscribe((tutor) => {
            if (tutor) {
                this.houseTutorList = tutor;
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
}
