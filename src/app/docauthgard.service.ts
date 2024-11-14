import { Injectable } from '@angular/core';
import { DocauthService } from './docauth.service';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DocauthgardService implements CanActivate {

  constructor(private docauthServise:DocauthService, private router:Router) { }

  canActivate(){
    if(this.docauthServise.isUserLoggedIn()){
      return true;
    }else{
      console.log("doctor is not loggin..");
      this.router.navigate(['/doclogin']);
      return false;
    }
  }
}
