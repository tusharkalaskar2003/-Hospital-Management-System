import { Component } from '@angular/core';
import { MedicineService } from '../medicine.service';
import { Medicine } from '../medicine';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-medicine',
  templateUrl: './add-medicine.component.html',
  styleUrl: './add-medicine.component.css'
})
export class AddMedicineComponent {

  medicine:Medicine=new Medicine();
  constructor(private medicineService: MedicineService, private router:Router){};

  saveMedicine(){
    this.medicineService.addMedicine(this.medicine).subscribe(date=>{
      this.gotoMedicineList();
    })
  }

  onSubmit(){
    this.saveMedicine();
  }

  gotoMedicineList(){
    this.router.navigate(['/medicinelist']);
  }

}
