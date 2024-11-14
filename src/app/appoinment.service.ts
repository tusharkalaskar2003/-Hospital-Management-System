import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Appoinment } from './appoinment';

@Injectable({
  providedIn: 'root'
})
export class AppoinmentService {


  constructor(private httpClient:HttpClient) {}
  private baseUrl = "http://localhost:8080/api/v1/appoinment/get";
  private baseUrl_insert = "http://localhost:8080/api/v1/appoinment/insert";
  private baseUrl_delete = "http://localhost:8080/api/v1/appoinment";

  getAppoinmentList():Observable<Appoinment[]>{
    
    return this.httpClient.get<Appoinment[]>(`${this.baseUrl}`);
  }

  createAppoinment(appoinment:Appoinment):Observable<Appoinment>{

    return this.httpClient.post<Appoinment>(`${this.baseUrl_insert}`, appoinment);
  }  

  deleteAppoinment(id:number):Observable<object>{

    return this.httpClient.delete<object>(`${this.baseUrl_delete}/${id}`);
  }
}
