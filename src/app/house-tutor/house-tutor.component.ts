import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AddHuseTutorPopupComponent } from '../add-huse-tutor-popup/add-huse-tutor-popup.component';
import { HallManagementService } from '../hall-management.service';
import { HouseTutorInfo } from '../models/hallManagement';

@Component({
    selector: 'app-house-tutor',
    templateUrl: './house-tutor.component.html',
    styleUrls: ['./house-tutor.component.css']
})
export class HouseTutorComponent implements OnInit {

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

    updateHouseTutorInfoViewList(tutor: HouseTutorInfo) {
        if (tutor) {

            var updateFlag = false;
            this.houseTutorList.forEach((element) => {

                if (element.tutorId == tutor.tutorId) {
                    var index = this.houseTutorList.indexOf(element);
                    this.houseTutorList[index] = tutor;
                    // element = branchInfo;
                    updateFlag = true;
                }

            });
            if (updateFlag == false) {
                this.houseTutorList.unshift(tutor);

            }

        }
    }

    openHouseTutorInfoDialog(tutor?: HouseTutorInfo): void {
        const sampleDialog = this.dialog.open(AddHuseTutorPopupComponent, {
            width: '60%',
            height: '90%',
            data: tutor,

            // disableClose: true
        });
        sampleDialog.afterClosed().subscribe(result => {
            if (result) {
                this.hallManagementService.updateHouseTutorInfo(result).subscribe((data) => {
                    if (data) {
                        this.updateHouseTutorInfoViewList(data);
                    }
                })
            }

        });
    }
}
