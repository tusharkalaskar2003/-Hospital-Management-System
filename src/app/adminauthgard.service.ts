import { Injectable } from '@angular/core';
import {CanActivate, Router } from '@angular/router';
import { AdminauthService } from './adminauth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminauthgardService implements CanActivate{

  constructor(private adminAuthServise: AdminauthService, private router:Router) { }

  canActivate(){
    if(this.adminAuthServise.isUserLoggedIn()){
      return true;
    }else{
      console.log("login kar laudya adhi")
      this.router.navigate(['adminlogin'])
      return false;
    }
  }
}
