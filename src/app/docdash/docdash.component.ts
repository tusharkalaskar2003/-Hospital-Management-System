import { Component } from '@angular/core';
import { PatientService } from '../patient.service';
import { Patient } from '../patient';
import { Router } from '@angular/router';
import { DocauthService } from '../docauth.service';

@Component({
  selector: 'app-docdash',
  templateUrl: './docdash.component.html',
  styleUrl: './docdash.component.css'
})
export class DocdashComponent {

  patients:Patient[]=[];
  constructor(private PatitentService:PatientService, private router:Router, private docauthServise:DocauthService){}

  ngOnInit():void{

    //when a server get load this methon will call
    this.getPatients();
  }

  getPatients(){
    this.PatitentService.getPatientList().subscribe(data=>{
      this.patients = data;
    })
  }

  deletePatient(id : number){
    this.PatitentService.deletePatient(id).subscribe(data=>{
      this.getPatients();
    })
  }

  update(id:number){
    this.router.navigate(['/updatePatient',id]);
  }

  LogOut(){
    this.docauthServise.logout();
    this.router.navigate(['/home']);
  }
}
