import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminauthService } from '../adminauth.service';
import { UserAdmin } from '../user-admin';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrl: './adminlogin.component.css'
})
export class AdminloginComponent {

    useradmi:UserAdmin= new UserAdmin;

    username2:string='';
    email:String='';
    password:string='';

    errorMessage= '';


    inValidLogin=false;

    constructor(private router:Router, private adminauth:AdminauthService){}

    checkLogin(){

          this.adminauth.getUserAdminByUsername(this.username2).subscribe((data) => {
            this.useradmi = data;
            this.gotonextmethod();
          },
          (error) => {
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
            alert(this.errorMessage);
            
    }


    gotonextmethod(){

      if(this.adminauth.authentication(this.username2, this.password, this.useradmi)){
              
        this.router.navigate(['admin'])
        this.inValidLogin=false
      }
      else{
            this.inValidLogin=true
              alert("Wrong Credintials")
              this.router.navigate(['home'])
      }
 }
}
