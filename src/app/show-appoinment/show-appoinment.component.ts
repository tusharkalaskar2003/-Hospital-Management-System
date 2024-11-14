import { Component } from '@angular/core';
import { AppoinmentService } from '../appoinment.service';
import { Appoinment } from '../appoinment';

@Component({
  selector: 'app-show-appoinment',
  templateUrl: './show-appoinment.component.html',
  styleUrl: './show-appoinment.component.css'
})
export class ShowAppoinmentComponent {

  constructor(private appoinmentService:AppoinmentService){}
  appoinments:Appoinment[]=[];


  ngOnInit():void{
    this.getAppoinment();
  }

  getAppoinment(){
    this.appoinmentService.getAppoinmentList().subscribe(data=>{
      this.appoinments = data;
    })
  }
}
