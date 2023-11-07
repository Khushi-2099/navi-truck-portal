import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { HomeupperpageComponent } from './rm-homepage/homeupperpage/homeupperpage.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { Howitworks2Component } from './howitworks2/howitworks2.component';
import { LoginComponent } from './login/login.component';
import { HomeupperpageComponent } from './rm-homepage/homeupperpage/homeupperpage.component';
import { HomePageAfterComponent } from './home-page-after/home-page-after.component';
import { RegistrationComponent } from './registration/registration.component';
import { ForgotComponent } from './forgot/forgot.component';
import { VarificationLoginComponent } from './varification-login/varification-login.component';
import { NewpassComponent } from './newpass/newpass.component';
import { CarSubsComponent } from './car-subs/car-subs.component';
import { WorkspaceComponent } from './workspace/workspace.component';
import { RmHomepageComponent } from './rm-homepage/rm-homepage.component';
import { MainProfileComponent } from './main-profile/main-profile.component';
import { ProfileSettingsComponent } from './profile-settings/profile-settings.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { CreditInformationComponent } from './credit-information/credit-information.component';
import { ApplyNowFlow1Component } from './apply-now-flow1/apply-now-flow1.component';
import { ApplyNowPendingComponent } from './apply-now-pending/apply-now-pending.component';
import { ApprovedComponent } from './approved/approved.component';
import { CarSubRedesignComponent } from './car-sub-redesign/car-sub-redesign.component';
import { RmCarCollecComponent } from './rm-homepage/rm-car-collec/rm-car-collec.component';
import { landingHomeupperpageComponent } from './landinghomeupperpage/landinghomeupperpage.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
const routes: Routes = [
  // {path:'',redirectTo:'',pathMatch:'full'},
  {path:'', component:LandingpageComponent},

  {path:'homescreen', component:HomeScreenComponent},
  {path:'user/login', component:LoginComponent},
  {path:'main-profile', component: MainProfileComponent },
  {path:'profile-settings', component: ProfileSettingsComponent },
  {path:'edit-profile', component: EditProfileComponent },
  {path:'home',component:HomePageAfterComponent},
  {path:'registration', component: RegistrationComponent},
  {path: 'forget', component: ForgotComponent},
  {path:'user/varification',component: VarificationLoginComponent},
  {path:'newPass', component: NewpassComponent},
  {path:'car-sub', component:CarSubsComponent},
  {path:'apply-now', component:CarSubsComponent},
  {path:'work-space', component: WorkspaceComponent},
  {path:'rm-home-page', component: RmHomepageComponent},
  {path:'how-it-works', component: HowItWorksComponent},
  {path :'credit-info', component: CreditInformationComponent},
  {path:'apply-now-flow-1', component: ApplyNowFlow1Component},
  {path:'apply-now-pending', component: ApplyNowPendingComponent},
  {path:'apply-now-approve', component: ApprovedComponent},
  {path:'car-sub-redesign', component: CarSubRedesignComponent},
  {path:'Homepage', component: HomeupperpageComponent},
  {path: 'rm-car',component:RmCarCollecComponent},
  // {path: 'howitworks2',component:Howitworks2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { 
}
