import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { HomepageComponent } from './homepage/homepage.component';
import { ProvostComponent } from './provost/provost.component';
import { HouseTutorComponent } from './house-tutor/house-tutor.component';
import { HallBodyComponent } from './hall-body/hall-body.component';
import { StudentComponent } from './student/student.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { StudentAddPopupComponent } from './student-add-popup/student-add-popup.component';
import { WellComepageComponent } from './well-comepage/well-comepage.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { RegisterComponent } from './register/register.component';
import { AddProvostPopupComponent } from './add-provost-popup/add-provost-popup.component';
import { AddHuseTutorPopupComponent } from './add-huse-tutor-popup/add-huse-tutor-popup.component';
import { AddHallBodyPopupComponent } from './add-hall-body-popup/add-hall-body-popup.component';
import { StudentViewPopupComponent } from './student-view-popup/student-view-popup.component';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { CookieService } from 'ngx-cookie-service';
import { InfoMenuComponent } from './info-menu/info-menu.component';
import { CurrentProvostInfoComponent } from './current-provost-info/current-provost-info.component';
import { HouseTutorListComponent } from './house-tutor-list/house-tutor-list.component';
import { StudentInfoComponent } from './student-info/student-info.component';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterModule } from '@angular/router';
import { AdminMenuComponent } from './admin-menu/admin-menu.component';
import { DepartmentSetupComponent } from './department-setup/department-setup.component';
import { PaymentTypeSetupComponent } from './payment-type-setup/payment-type-setup.component';
import { PaymentInfoSetupComponent } from './payment-info-setup/payment-info-setup.component';
import { PaymentTypeInfoViewComponent } from './payment-type-info-view/payment-type-info-view.component';
import { AddPaymentInfoPopupComponent } from './add-payment-info-popup/add-payment-info-popup.component';
import { ViewPaymentInfoPopupComponent } from './view-payment-info-popup/view-payment-info-popup.component';

@NgModule({
    declarations: [
        AppComponent,
        HomepageComponent,
        ProvostComponent,
        HouseTutorComponent,
        HallBodyComponent,
        StudentComponent,
        StudentAddPopupComponent,
        WellComepageComponent,
        UserLoginComponent,
        RegisterComponent,
        AddProvostPopupComponent,
        AddHuseTutorPopupComponent,
        AddHallBodyPopupComponent,
        StudentViewPopupComponent,
        InfoMenuComponent,
        CurrentProvostInfoComponent,
        HouseTutorListComponent,
        StudentInfoComponent,
        AdminMenuComponent,
        DepartmentSetupComponent,
        PaymentTypeSetupComponent,
        PaymentInfoSetupComponent,
        PaymentTypeInfoViewComponent,
        AddPaymentInfoPopupComponent,
        ViewPaymentInfoPopupComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NoopAnimationsModule,
        MatSidenavModule,
        MatToolbarModule,
        MatIconModule,
        MatListModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        FlexLayoutModule,
        MatButtonModule,
        MatDialogModule,
        MatRadioModule,
        MatSelectModule,
        HttpClientModule,
        MatTabsModule,
        RouterModule

    ],
    providers: [MatDialog, CookieService],
    bootstrap: [AppComponent]
})
export class AppModule { }
