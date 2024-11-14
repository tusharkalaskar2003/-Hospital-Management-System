import { Component } from '@angular/core';
import { MedicineService } from '../medicine.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Medicine } from '../medicine';

@Component({
  selector: 'app-update-medicine',
  templateUrl: './update-medicine.component.html',
  styleUrl: './update-medicine.component.css'
})
export class UpdateMedicineComponent {

  constructor(private medicineServise:MedicineService, private router:Router,
              private route:ActivatedRoute){};

  medicine:Medicine=new Medicine();
  id:number=0;

  ngOnInit():void{
    this.id = this.route.snapshot.params['id'];

    this.medicineServise.getMedicineById(this.id).subscribe(data=>{
      this.medicine = data;
    })
  }



  onSubmit(){
    this.updateMedicine();
  }

  updateMedicine(){
    this.medicineServise.updateMedicine(this.id, this.medicine).subscribe(data=>{
      this.gotomedicine();
    })
  }

  gotomedicine(){
    this.router.navigate(['/medicinelist']);
  }


}
