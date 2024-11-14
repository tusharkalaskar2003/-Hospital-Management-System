import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserDoctor } from './user-doctor';

@Injectable({
  providedIn: 'root'
})
export class DocauthService {

  constructor(private httpchlient: HttpClient) { }

  baseUrl = "http://localhost:8080/api/v1/userDoctor";

  
  isUserLoggedIn(){
    console.log("Doctor logged in...");
    let doctor = sessionStorage.getItem('username1');

    return !(doctor == null);
  }

  logout(){
    console.log("Doctor logOut....");
    sessionStorage.removeItem('username1');
  }

  getUserDoctorByUsername(username1:String):Observable<UserDoctor>{
    return this.httpchlient.get<UserDoctor>(`${this.baseUrl}/${username1}`);
  }


  Authenticate(username1:string, password:string, userdoc:UserDoctor){


    if(username1 == userdoc.username && password == userdoc.password){
      sessionStorage.setItem('username1', username1);
      return true;
    }else{
      return false;
    }
  }

}
