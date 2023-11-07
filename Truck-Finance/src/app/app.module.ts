import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple'
import { RmHomepageComponent } from './rm-homepage/rm-homepage.component';
import { CarSubsComponent } from './car-subs/car-subs.component';
import { HomeCarCollecComponent } from './home-screen/home-car-collec/home-car-collec.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { TimelineModule } from 'primeng/timeline';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { RmCarCollecComponent } from './rm-homepage/rm-car-collec/rm-car-collec.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WorkspaceComponent } from './workspace/workspace.component';
import { NavbarAfterHomePageComponent } from './navbar-after-home-page/navbar-after-home-page.component';
import { HomePageAfterComponent } from './home-page-after/home-page-after.component';
import { VarificationLoginComponent } from './varification-login/varification-login.component';
import { FileUploadModule } from 'primeng/fileupload';
import { HttpClientModule } from '@angular/common/http'
import { AgGridModule } from 'ag-grid-angular';
import { HomepageUpperComponent } from './rm-homepage/homepage-upper/homepage-upper.component';
import { FooterComponent } from './footer/footer.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { Spinner1Component } from './spinner1/spinner1.component';
import { Spinner2Component } from './spinner2/spinner2.component';
import { GridOptions } from 'ag-grid-community';
import {Dialog, DialogRef, DIALOG_DATA, DialogModule} from '@angular/cdk/dialog';
import { HomeupperpageComponent } from './rm-homepage/homeupperpage/homeupperpage.component';
// import { HomeupperpageComponent } from './rm-homepage/homeupperpage/homeupperpage.component';
import { RouterModule } from '@angular/router';

// import { NavbarAfterHomePageComponent } from './navbar-after-home-page/navbar-after-home-page.component';
import { ApplyNowFlow1Component } from './apply-now-flow1/apply-now-flow1.component';
import { MainProfileComponent } from './main-profile/main-profile.component';
import { NavBarAfterHomeProfileComponent } from './nav-bar-after-home-profile/nav-bar-after-home-profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ProfileSettingsComponent } from './profile-settings/profile-settings.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { ApprovedComponent } from './approved/approved.component';
import { ApplyNowPendingComponent } from './apply-now-pending/apply-now-pending.component';
import { CreditInformationComponent } from './credit-information/credit-information.component';
import { CarSubRedesignComponent } from './car-sub-redesign/car-sub-redesign.component';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';
import { Spinner3Component } from './spinner3/spinner3.component';
import { StepperComponent } from './stepper/stepper.component';
import { Howitworks2Component } from './howitworks2/howitworks2.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { landingHomeupperpageComponent } from './landinghomeupperpage/landinghomeupperpage.component';
import { NavbarDealerComponent } from './navbardealer/navbardealer.component';
import { CarSubsCardComponent } from './car-subs-card/car-subs-card.component';


// import { ToastmssageComponent } from './toastmssage/toastmssage.component';
 

@NgModule({
  declarations: [
    NavbarDealerComponent,
    landingHomeupperpageComponent,
    LandingpageComponent,
    AppComponent,
    CarSubsComponent,
    HomeCarCollecComponent,
    RmHomepageComponent,
    CarSubsComponent,
    HomeCarCollecComponent,
    HomeScreenComponent,
    NavbarComponent,
    LoginComponent,
    RegistrationComponent,
    RmCarCollecComponent,
    DashboardComponent,
    WorkspaceComponent,
    NavbarAfterHomePageComponent,
    VarificationLoginComponent,
    HomePageAfterComponent,
    HomepageUpperComponent,
    FooterComponent,
    ApplyNowFlow1Component,
    MainProfileComponent,
    NavBarAfterHomeProfileComponent,
    EditProfileComponent,
    ProfileSettingsComponent,
    CreditInformationComponent,
    SpinnerComponent,
    Spinner1Component,
    Spinner2Component,
    HowItWorksComponent,
    ApprovedComponent,
    ApplyNowPendingComponent,
    CarSubRedesignComponent,
    DialogBoxComponent,
    HomeupperpageComponent,
    Spinner3Component,
    StepperComponent,
    NavbarAfterHomePageComponent,
    Howitworks2Component,
    LandingpageComponent,
    CarSubsCardComponent


  ],
  imports: [
   
    
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ToastModule,
    InputTextareaModule,
    BrowserAnimationsModule,
    ButtonModule,
    RippleModule,
    TimelineModule,
    AgGridModule,
    HttpClientModule,
  
    
    FileUploadModule,
    DialogModule
  ],
  providers: [],
  exports:[NavbarAfterHomePageComponent
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
