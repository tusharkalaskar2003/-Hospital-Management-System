import { Component } from '@angular/core';
import { PatientService } from '../patient.service';
import { Patient } from '../patient';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-patient',
  templateUrl: './update-patient.component.html',
  styleUrl: './update-patient.component.css'
})
export class UpdatePatientComponent {

  patientID:number=0;
  
  constructor(private patientService:PatientService, 
              private router:Router, 
              private route:ActivatedRoute){};

  patient:Patient= new Patient();

  ngOnInit(): void {
    this.patientID = this.route.snapshot.params['id'];

    this.patientService.getPatientById(this.patientID).subscribe((data) => {
      this.patient = data;
    });

  };

  updatePatient(){
    this.patientService.updatePatient(this.patientID ,this.patient).subscribe(data=>{
      this.gotoPatientList();
    })
  }



  onSubmit(){
    this.updatePatient();
  }

  gotoPatientList(){
    this.router.navigate(['/docdash']);
  }
}
