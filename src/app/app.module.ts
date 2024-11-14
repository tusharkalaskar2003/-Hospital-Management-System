import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdmindashComponent } from './admindash/admindash.component';
import { HttpClientModule } from '@angular/common/http';
import { MedicinedasComponent } from './medicinedas/medicinedas.component';
import { AppoinmentdashComponent } from './appoinmentdash/appoinmentdash.component';
import { AddMedicineComponent } from './add-medicine/add-medicine.component';
import { AddAppoinmentComponent } from './add-appoinment/add-appoinment.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { HomePageComponent } from './home-page/home-page.component';
import { DocdashComponent } from './docdash/docdash.component';
import { ShowAppoinmentComponent } from './show-appoinment/show-appoinment.component';
import { UpdatePatientComponent } from './update-patient/update-patient.component';
import { UpdateMedicineComponent } from './update-medicine/update-medicine.component';
import { DocloginComponent } from './doclogin/doclogin.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { UseradminRegeisterComponent } from './useradmin-regeister/useradmin-regeister.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    AdmindashComponent,
    MedicinedasComponent,
    AppoinmentdashComponent,
    AddMedicineComponent,
    AddAppoinmentComponent,
    AddPatientComponent,
    HomePageComponent,
    DocdashComponent,
    ShowAppoinmentComponent,
    UpdatePatientComponent,
    UpdateMedicineComponent,
    DocloginComponent,
    AdminloginComponent,
    UseradminRegeisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
