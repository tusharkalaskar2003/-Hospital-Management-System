import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmindashComponent } from './admindash/admindash.component';
import { AppoinmentdashComponent } from './appoinmentdash/appoinmentdash.component';
import { MedicinedasComponent } from './medicinedas/medicinedas.component';
import { AddMedicineComponent } from './add-medicine/add-medicine.component';
import { AddAppoinmentComponent } from './add-appoinment/add-appoinment.component';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { HomePageComponent } from './home-page/home-page.component';
import { DocdashComponent } from './docdash/docdash.component';
import { ShowAppoinmentComponent } from './show-appoinment/show-appoinment.component';
import { UpdatePatientComponent } from './update-patient/update-patient.component';
import { UpdateMedicineComponent } from './update-medicine/update-medicine.component';
import { DocloginComponent } from './doclogin/doclogin.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminauthgardService } from './adminauthgard.service';
import { DocauthgardService } from './docauthgard.service';
import { UseradminRegeisterComponent } from './useradmin-regeister/useradmin-regeister.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {path:'admin', component:AdmindashComponent, canActivate:[AdminauthgardService]},
  {path:'appoinmentlist', component:AppoinmentdashComponent, canActivate:[AdminauthgardService]},
  {path:'medicinelist',component:MedicinedasComponent, canActivate:[DocauthgardService]},
  {path:'add-medicine',component:AddMedicineComponent,  canActivate:[DocauthgardService]},
  {path:'add-appoinment',component:AddAppoinmentComponent, canActivate:[AdminauthgardService]},
  {path:'add-patient',component:AddPatientComponent,  canActivate:[DocauthgardService]},
  {path:'home', component:HomePageComponent},
  {path:'', redirectTo:'home',pathMatch:'full'},
  {path:'docdash', component:DocdashComponent,  canActivate:[DocauthgardService]},
  {path:'showAppoinment', component:ShowAppoinmentComponent,  canActivate:[DocauthgardService]},
  {path:'updatePatient/:id',component:UpdatePatientComponent,  canActivate:[DocauthgardService]},
  {path:'updateMedicine/:id', component:UpdateMedicineComponent,  canActivate:[DocauthgardService]},
  {path:'doclogin', component:DocloginComponent,},
  {path:'adminlogin', component:AdminloginComponent},
  {path:'adminRegister', component:UseradminRegeisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ReactiveFormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
