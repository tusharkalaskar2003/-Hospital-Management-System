import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserAdmin } from './user-admin';

@Injectable({
  providedIn: 'root'
})
export class UserRegeisterService {

  constructor(private httpClient:HttpClient) { }

  private baseUrl_ins = "http://localhost:8080/api/v1/userAdmin/insert";

  addUserAdmin(userAdmin:UserAdmin):Observable<UserAdmin>{

    return this.httpClient.post<UserAdmin>(this.baseUrl_ins, userAdmin);
  }
}
