import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { HallManagementService } from '../hall-management.service';
import { DepartmentInfo, StudentInfo } from '../models/hallManagement';

@Component({
    selector: 'app-student-add-popup',
    templateUrl: './student-add-popup.component.html',
    styleUrls: ['./student-add-popup.component.css']
})
export class StudentAddPopupComponent implements OnInit {

    constructor(@Inject(MAT_DIALOG_DATA) public student: StudentInfo, private breakpointObserver: BreakpointObserver, private hallManagementService: HallManagementService, public dialogRef: MatDialogRef<StudentAddPopupComponent>, public matDialog: MatDialog) { }

    departmentList: DepartmentInfo[] = []

    ngOnInit(): void {
        if (this.student) {
            this.studentInfo = JSON.parse(JSON.stringify(this.student));
        }

        this.hallManagementService.getDepartmentList().subscribe((department) => {
            if (department) {
                this.departmentList = department;
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
    studentInfo: StudentInfo = {
        studentId: '',
        studentName: '',
        studentRoll: '',
        studentReg: '',
        session: '',
        contactNo: '',
        studentEmail: '',
        studentFatherName: '',
        studentMotherName: '',
        lavel: '',
        department: '',
        permanentAddress: '',
        residentiality: false,
        departmentId: ''
    }

    departmentInfo: DepartmentInfo = {
        departmentId: '',
        departmentTitle: '',
        descriptions: ''
    }

    resetstudentInfo() {
        this.studentInfo = {
            studentId: '',
            studentName: '',
            studentRoll: '',
            studentReg: '',
            session: '',
            contactNo: '',
            studentEmail: '',
            studentFatherName: '',
            studentMotherName: '',
            lavel: '',
            departmentId: '',
            department: '',
            permanentAddress: '',
            residentiality: false
        }
    }

    onDepartmentSelectionChange() {
        if (this.departmentInfo.departmentTitle) {
            this.studentInfo.department = this.departmentInfo.departmentTitle
        }
    }

    addStudent() {

        if (this.studentInfo) {

            this.studentInfo.studentId = (this.studentInfo.studentId) ? this.studentInfo.studentId : this.hallManagementService.generateUniqueId();
            this.studentInfo.departmentId = this.departmentInfo.departmentId;

            this.dialogRef.close(this.studentInfo);
            // this.prepareContactNumberFormate();
            // this.prepareZipCodeFormate();
            this.resetstudentInfo();
        }

    }

}
