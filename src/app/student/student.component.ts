import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { HallManagementService } from '../hall-management.service';
import { StudentInfo } from '../models/hallManagement';
import { StudentAddPopupComponent } from '../student-add-popup/student-add-popup.component';
import { StudentViewPopupComponent } from '../student-view-popup/student-view-popup.component';

@Component({
    selector: 'app-student',
    templateUrl: './student.component.html',
    styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

    constructor(private breakpointObserver: BreakpointObserver, private hallManagementService: HallManagementService, public dialog: MatDialog) { }

    studentInfoList: StudentInfo[] = [];

    ngOnInit(): void {
        this.hallManagementService.getStudentInfoList().subscribe((student) => {
            if (student) {
                this.studentInfoList = student;
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

    updateStudentInfoViewList(studentInfo: StudentInfo) {
        if (studentInfo) {

            var updateFlag = false;
            this.studentInfoList.forEach((element) => {

                if (element.studentId == studentInfo.studentId) {
                    var index = this.studentInfoList.indexOf(element);
                    this.studentInfoList[index] = studentInfo;
                    // element = branchInfo;
                    updateFlag = true;
                }

            });
            if (updateFlag == false) {
                this.studentInfoList.unshift(studentInfo);

            }

        }
    }



    openStudentInfoDialog(student?: StudentInfo): void {
        const sampleDialog = this.dialog.open(StudentAddPopupComponent, {
            width: '60%',
            height: '90%',
            data: student,

            // disableClose: true
        });
        sampleDialog.afterClosed().subscribe(result => {
            if (result) {
                this.hallManagementService.updateStudentInfo(result).subscribe((data) => {
                    if (data) {
                        this.updateStudentInfoViewList(data);
                    }

                })

            }

        });
    }

    openStudentInfoViewDialog(student: StudentInfo): void {
        const sampleDialog = this.dialog.open(StudentViewPopupComponent, {
            width: '50%',
            height: '90%',
            data: student,
            // disableClose: true
        });
    }
}
