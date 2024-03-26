import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AddProvostPopupComponent } from '../add-provost-popup/add-provost-popup.component';
import { HallManagementService } from '../hall-management.service';
import { ProvostInfo } from '../models/hallManagement';

@Component({
    selector: 'app-provost',
    templateUrl: './provost.component.html',
    styleUrls: ['./provost.component.css']
})
export class ProvostComponent implements OnInit {

    provostInfo!: ProvostInfo

    provostInfoList: ProvostInfo[] = [];

    constructor(private breakpointObserver: BreakpointObserver, private hallManagementService: HallManagementService, public dialog: MatDialog) { }

    ngOnInit(): void {
        this.pastProvost();
    }

    pastProvost() {
        this.hallManagementService.getProvostInfoList().subscribe((provostList) => {
            if (provostList) {
                this.provostInfoList = provostList;
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

    updateProvostInfoViewList(provost: ProvostInfo) {
        if (provost) {

            var updateFlag = false;
            this.provostInfoList.forEach((element) => {

                if (element.provostId == provost.provostId) {
                    var index = this.provostInfoList.indexOf(element);
                    this.provostInfoList[index] = provost;
                    // element = branchInfo;
                    updateFlag = true;
                }

            });
            if (updateFlag == false) {
                this.provostInfoList.unshift(provost);

            }

        }
    }

    openProvostInfoDialog(provost?: ProvostInfo): void {
        const sampleDialog = this.dialog.open(AddProvostPopupComponent, {
            width: '60%',
            height: '90%',
            data: provost,

            // disableClose: true
        });
        sampleDialog.afterClosed().subscribe(result => {
            if (result) {
                this.hallManagementService.updateProvostInfo(result).subscribe((data) => {
                    if (data) {
                        this.updateProvostInfoViewList(data);
                    }

                })
            }
        });
    }
}
