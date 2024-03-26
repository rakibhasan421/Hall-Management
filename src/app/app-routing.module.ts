import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminMenuComponent } from './admin-menu/admin-menu.component';
import { HallBodyComponent } from './hall-body/hall-body.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HouseTutorComponent } from './house-tutor/house-tutor.component';
import { InfoMenuComponent } from './info-menu/info-menu.component';
import { ProvostComponent } from './provost/provost.component';
import { RegisterComponent } from './register/register.component';
import { StudentComponent } from './student/student.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { WellComepageComponent } from './well-comepage/well-comepage.component';

const routes: Routes = [
    {
        path: 'register', component: RegisterComponent
    },
    {
        path: 'login', component: UserLoginComponent
    },
    {
        path: '', component: WellComepageComponent
    },
    {
        path: 'home', component: HomepageComponent
    },
    {
        path: 'infoMenu', component: InfoMenuComponent
    },
    {
        path: 'provost', component: ProvostComponent
    },
    {
        path: 'houseTutor', component: HouseTutorComponent
    },
    {
        path: 'hallBody', component: HallBodyComponent
    },
    {
        path: 'student', component: StudentComponent
    },
    {
        path: 'adminMenu', component: AdminMenuComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
