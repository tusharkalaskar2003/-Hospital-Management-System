import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserDoctor } from './user-doctor';
import { UserAdmin } from './user-admin';

@Injectable({
  providedIn: 'root'
})
export class AdminauthService {

  constructor(private httpchlient: HttpClient) { }

  baseUrl = "http://localhost:8080/api/v1/userAdmin";



  isUserLoggedIn(){
    console.log("user log in....");
    let user = sessionStorage.getItem('username2');

    return !(user == null);
  }

  logOut(){
    console.log("user logOut....");
    sessionStorage.removeItem('username2');
  }

  getUserAdminByUsername( username2:String ):Observable< UserDoctor >{
    return this.httpchlient.get<UserDoctor>(`${this.baseUrl}/${username2}`);
  }

  authentication(username2:string, password:string, useradmi:UserAdmin){
    if(username2 == useradmi.username && password == useradmi.password) {
      sessionStorage.setItem('username2', username2);
      return true;
    }else{
      return false;
    }
  }

}
