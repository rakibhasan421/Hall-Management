import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AppComponent } from '../app.component';
import { HallManagementService } from '../hall-management.service';
import { UserLogin } from '../models/hallManagement';

@Component({
    selector: 'app-user-login',
    templateUrl: './user-login.component.html',
    styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

    constructor(private breakpointObserver: BreakpointObserver, private hallManagementService: HallManagementService, private appComponent: AppComponent) { }

    ngOnInit(): void {

    }
    isHandset$: Observable<boolean> = this.breakpointObserver.observe([Breakpoints.Handset, Breakpoints.Tablet]).pipe(
        map(result => result.matches),
        shareReplay()
    );

    userLogin: UserLogin = {
        email: '',
        password: '',
        status: false
    }

    resetLoginInfo() {
        this.userLogin = {
            email: '',
            password: '',
            status: false
        }
    }

    login() {
        if (this.userLogin && this.userLogin.email && this.userLogin.password) {

            this.hallManagementService.userLogin(this.userLogin).subscribe((data) => {
                if (data) {
                    if (data.status == true) {
                        this.hallManagementService.setUserLoginCookieService(data.email, data.password);
                        this.appComponent.initialLogin()

                        this.resetLoginInfo();
                        alert("You are successfully Logged In")
                    }
                    else {
                        alert("Email or Password are Incorrect")
                    }

                }
            })
        }
    }
}
