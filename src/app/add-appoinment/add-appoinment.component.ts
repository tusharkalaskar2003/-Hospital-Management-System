import { Component } from '@angular/core';
import { Appoinment } from '../appoinment';
import { AppoinmentService } from '../appoinment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-appoinment',
  templateUrl: './add-appoinment.component.html',
  styleUrl: './add-appoinment.component.css'
})
export class AddAppoinmentComponent {
  // appoinment: any;

  appoinment:Appoinment=new Appoinment();

  constructor(private appoinmentService:AppoinmentService,  private router:Router){}

    saveAppoinment(){
      this.appoinmentService.createAppoinment(this.appoinment).subscribe(data=>{
        console.log(data);
        this.gotoAppoinment();
      })
    }

  onSubmit(){
    this.saveAppoinment();
  }


  gotoAppoinment(){
    this.router.navigate(['/appoinmentlist']);
  }
}