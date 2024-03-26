import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { HallManagementService } from './hall-management.service';
import { UserLogin } from './models/hallManagement';
import { Router } from '@angular/router';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'hallManagement';

    isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
        .pipe(
            map(result => result.matches),
            shareReplay()
        );

    constructor(private breakpointObserver: BreakpointObserver, private hallManagementService: HallManagementService, private router: Router) { }
    isLogedIn = false;

    ngOnInit(): void {
        this.initialLogin();
    }

    initialLogin() {
        var authId = this.hallManagementService.getUserIdCookie();
        var authPass = this.hallManagementService.getUserAuthPassCookie();
        if (authId && authPass) {
            var userLogin: UserLogin = {
                email: authId,
                password: authPass,
                status: false
            }
            this.hallManagementService.userLogin(userLogin).subscribe((data) => {
                if (data) {
                    if (data.status == true) {
                        this.isLogedIn = true;
                        this.setIsLoged(true)
                    }
                    else {
                        alert("Email or Password are Incorrect")
                    }

                }
            })
        }
    }
    logOut() {
        this.hallManagementService.clearCookie();
        this.setIsLoged(false)

        this.goToHome();
        alert("Succesfully Logout");
    }

    setIsLoged(status: boolean) {
        this.isLogedIn = status;
    }

    goToHome($myParam: string = ''): void {
        const navigationDetails: string[] = ['/home'];
        if ($myParam.length) {
            navigationDetails.push($myParam);
        }
        this.router.navigate(navigationDetails);
    }
}
