import { Component } from '@angular/core';
import { PatientService } from '../patient.service';
import { Patient } from '../patient';
import { AdminauthgardService } from '../adminauthgard.service';
import { AdminauthService } from '../adminauth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admindash',
  templateUrl: './admindash.component.html',
  styleUrl: './admindash.component.css'
})
export class AdmindashComponent {
  
  patients:Patient[]=[];
  constructor(private patientService:PatientService, private adminauthServise:AdminauthService, private router:Router){}
  
  ngOnInit():void{
    this.getPatients();
  }


  
  getPatients(){
    this.patientService.getPatientList().subscribe(data=>{
      this.patients=data;
    })
  }

    delete(id:number){
      this.patientService.deletePatient(id).subscribe(data=>{
        this.getPatients();
      })
    }

    LogOut(){
      this.adminauthServise.logOut();
      this.router.navigate(['home']);
    }
}
