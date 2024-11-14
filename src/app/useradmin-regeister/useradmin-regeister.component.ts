import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserRegeisterService } from '../user-regeister.service';
import { UserAdmin } from '../user-admin';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-useradmin-regeister',
  templateUrl: './useradmin-regeister.component.html',
  styleUrl: './useradmin-regeister.component.css'
})
export class UseradminRegeisterComponent {

  registrationForm: FormGroup;
  
  constructor(private router:Router, private userAdminServise:UserRegeisterService, private fb:FormBuilder){

    this.registrationForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });

  }

  onSubmit(){
    if(this.registrationForm.valid) {
      
      console.log('Form Submitted', this.registrationForm.value);
      const formData = this.registrationForm.value;

      this.userAdminServise.addUserAdmin(formData).subscribe(data=>{
        alert("admin register redirect to login..🙏🙏 ")
        this.gotoAdminLogin();
      })

    } else {
      alert("Wrong Credentials...")
      console.log('Form is invalid');
    }
  }

  gotoAdminLogin(){
    this.router.navigate(['/adminlogin'])
  }
}
