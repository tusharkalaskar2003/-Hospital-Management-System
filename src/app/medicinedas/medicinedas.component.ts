import { Component } from '@angular/core';
import { MedicineService } from '../medicine.service';
import { Medicine } from '../medicine';
import { Router } from '@angular/router';

@Component({
  selector: 'app-medicinedas',
  templateUrl: './medicinedas.component.html',
  styleUrl: './medicinedas.component.css'
})
export class MedicinedasComponent {

  medicines:Medicine[]=[];
  constructor(private medicineService:MedicineService, private router:Router){}

  ngOnInit():void{
    this.getMedicine();
  }


  

  deletemedicine(id:number){
    this.medicineService.deletemedicine(id).subscribe(data=>{
      this.getMedicine();
    })
  }

  getMedicine(){
    this.medicineService.getMedicineList().subscribe(data=>{
      this.medicines=data;
    })
  }

  updateMedicine(id:number){
    this.router.navigate(['/updateMedicine',id]);
  }

}
