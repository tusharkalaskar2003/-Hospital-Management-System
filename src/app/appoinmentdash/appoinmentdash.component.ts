import { Component } from '@angular/core';
import { AppoinmentService } from '../appoinment.service';
import { Appoinment } from '../appoinment';

@Component({
  selector: 'app-appoinmentdash',
  templateUrl: './appoinmentdash.component.html',
  styleUrl: './appoinmentdash.component.css'
})
export class AppoinmentdashComponent {
  appoinments:Appoinment[]=[];
  constructor(private appoinmentService:AppoinmentService){}

  ngOnInit():void{
    this.getAppoinment();
  }

  getAppoinment(){
    this.appoinmentService.getAppoinmentList().subscribe(data=>{
      this.appoinments = data;
    })
  }
  delete(id:number){ 

    this.appoinmentService.deleteAppoinment(id).subscribe(data=>{

      console.log(data);
      
      this.getAppoinment();
    })
  }
}
