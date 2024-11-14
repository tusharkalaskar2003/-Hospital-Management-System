import { Component } from '@angular/core';
import { PatientService } from '../patient.service';
import { Router } from '@angular/router';
import { Patient } from '../patient';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrl: './add-patient.component.css'
})
export class AddPatientComponent {
  // router: any;

  patient:Patient=new Patient();
  
  constructor(private patientService:PatientService, private router:Router){};

  savePatient(){
    this.patientService.createPatient(this.patient).subscribe(data=>{
      this.gotopatient();
    })
  }

  onSubmit(){
    this.savePatient();
  }

  gotopatient(){
    this.router.navigate(['/docdash']);
  }
}
