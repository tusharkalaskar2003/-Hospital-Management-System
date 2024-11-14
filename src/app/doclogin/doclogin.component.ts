import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DocauthService } from '../docauth.service';
import { UserDoctor } from '../user-doctor';

@Component({
  selector: 'app-doclogin',
  templateUrl: './doclogin.component.html',
  styleUrl: './doclogin.component.css'
})
export class DocloginComponent {

  userdoc:UserDoctor= new UserDoctor;

   username1:string='';
   email:String='';
   password:string='';

   errorMessage ='';

   inValidLogin=false;

   constructor(private router:Router, private docauth:DocauthService){};
 

   checkLogin(){

            this.docauth.getUserDoctorByUsername(this.username1).subscribe((data) => {
              this.userdoc = data;

              this.gotonextmethod();
            },
            (error) => {
              // On error, handle the failure
              this.handleError(error);
            } 
          );
   };


   handleError(error: any) {
          this.inValidLogin = true;  // Flag to indicate login failure

          if (error.status === 404) {
            this.errorMessage = 'Username not found.';
          } else if (error.status === 401) {
            this.errorMessage = 'Invalid credentials.';
          } else if (error.status === 0) {
            this.errorMessage = 'Network error. Please try again later.';
          } else {
            this.errorMessage = 'An unexpected error occurred.';
          }

          console.error('Login error:', error);  // Log the error for debugging
}


   gotonextmethod(){

        if(this.docauth.Authenticate(this.username1, this.password, this.userdoc)){
                
          this.router.navigate(['docdash'])
          this.inValidLogin=false
        }
        else{
              this.inValidLogin=true
                alert("Wrong Credintials")
                this.router.navigate(['home'])
        }
   }

   

}
