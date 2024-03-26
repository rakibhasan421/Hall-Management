import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { HallManagementService } from '../hall-management.service';
import { UserInfo } from '../models/hallManagement';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    constructor(private breakpointObserver: BreakpointObserver, private hallManagementService: HallManagementService, public dialog: MatDialog) { }

    ngOnInit(): void {

    }
    isHandset$: Observable<boolean> = this.breakpointObserver.observe([Breakpoints.Handset, Breakpoints.Tablet]).pipe(
        map(result => result.matches),
        shareReplay()
    );
    userInfo: UserInfo = {
        authenticId: '',
        email: '',
        password: '',
        userName: ''
    }

    resetUserInfo() {
        this.userInfo = {
            authenticId: '',
            email: '',
            password: '',
            userName: ''
        }
    }

    register() {

        if (this.userInfo) {

            this.userInfo.authenticId = (this.userInfo.authenticId) ? this.userInfo.authenticId : this.hallManagementService.generateUniqueId();
            this.hallManagementService.userRegister(this.userInfo).subscribe((data) => {
                if (data) {
                    alert("Succesfully Registered")
                    this.resetUserInfo();
                } else {
                    alert("This Email is Already Registered")
                }
            })
        }
    }
}
