import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { HallManagementService } from '../hall-management.service';
import { DepartmentInfo } from '../models/hallManagement';

@Component({
    selector: 'app-department-setup',
    templateUrl: './department-setup.component.html',
    styleUrls: ['./department-setup.component.css']
})
export class DepartmentSetupComponent implements OnInit {

    constructor(private breakpointObserver: BreakpointObserver, private hallManagementService: HallManagementService, public dialog: MatDialog) { }

    departmentList: DepartmentInfo[] = []

    ngOnInit(): void {

        this.hallManagementService.getDepartmentList().subscribe((department) => {
            if (department) {
                this.departmentList = department;
            }
        })

    }

    selectedItem: any;
    selectListItem(item: any) {
        this.selectedItem = item
    }

    departmentInfo: DepartmentInfo = {
        departmentId: '',
        departmentTitle: '',
        descriptions: ''
    }

    resetDepartmentInfo() {
        this.departmentInfo = {
            departmentId: '',
            departmentTitle: '',
            descriptions: ''
        }
    }

    isHandset$: Observable<boolean> = this.breakpointObserver.observe([Breakpoints.Handset, Breakpoints.Tablet]).pipe(
        map(result => result.matches),
        shareReplay()
    );

    editDepartmnet(department: DepartmentInfo) {
        this.departmentInfo = Object.assign({}, department)

    }
    addDepartment() {
        if (this.departmentInfo) {
            this.departmentInfo.departmentId = (this.departmentInfo.departmentId) ? this.departmentInfo.departmentId : this.hallManagementService.generateUniqueId();

            this.hallManagementService.saveDepartment(this.departmentInfo).subscribe((data) => {
                if (data) {
                    this.resetDepartmentInfo();
                    this.updateDepartmentInfoViewList(data);
                }

            })


        }

    }

    updateDepartmentInfoViewList(department: DepartmentInfo) {
        if (department) {

            var updateFlag = false;
            this.departmentList.forEach((element) => {

                if (element.departmentId == department.departmentId) {
                    var index = this.departmentList.indexOf(element);
                    this.departmentList[index] = department;
                    // element = branchInfo;
                    updateFlag = true;
                }

            });
            if (updateFlag == false) {
                this.departmentList.unshift(department);

            }

        }
    }
}
