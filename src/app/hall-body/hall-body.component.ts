import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AddHallBodyPopupComponent } from '../add-hall-body-popup/add-hall-body-popup.component';
import { HallManagementService } from '../hall-management.service';
import { HallBodyInfo } from '../models/hallManagement';

@Component({
    selector: 'app-hall-body',
    templateUrl: './hall-body.component.html',
    styleUrls: ['./hall-body.component.css']
})
export class HallBodyComponent implements OnInit {

    constructor(private breakpointObserver: BreakpointObserver, private hallManagementService: HallManagementService, public dialog: MatDialog) { }

    hallBodyInfoList: HallBodyInfo[] = [];

    ngOnInit(): void {
        this.hallManagementService.getHallBodyInfo().subscribe((body) => {
            if (body) {
                this.hallBodyInfoList = body;
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

    updateHallBodyViewList(hallBody: HallBodyInfo) {
        if (hallBody) {

            var updateFlag = false;
            this.hallBodyInfoList.forEach((element) => {

                if (element.hallBodyId == hallBody.hallBodyId) {
                    var index = this.hallBodyInfoList.indexOf(element);
                    this.hallBodyInfoList[index] = hallBody;
                    // element = branchInfo;
                    updateFlag = true;
                }

            });
            if (updateFlag == false) {
                this.hallBodyInfoList.unshift(hallBody);

            }

        }
    }

    openHallBodyInfoDialog(hallBody?: HallBodyInfo): void {
        const sampleDialog = this.dialog.open(AddHallBodyPopupComponent, {
            width: '60%',
            height: '90%',
            data: hallBody,

            // disableClose: true
        });
        sampleDialog.afterClosed().subscribe(result => {
            if (result) {
                this.hallManagementService.updateHallBodyInfo(result).subscribe((data) => {
                    if (data) {
                        this.updateHallBodyViewList(data);
                    }
                })
            }

        });
    }

}
