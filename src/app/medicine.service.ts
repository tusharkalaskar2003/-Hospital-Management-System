

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Medicine } from './medicine';
import { Patient } from './patient';

@Injectable({
  providedIn: 'root'
})
export class MedicineService {

  constructor(private httpClient : HttpClient) { }

  private baseUrl = "http://localhost:8080/api/v1/medicine/get";

  private baseUrl_insert = "http://localhost:8080/api/v1/medicine/insert";

  private baseUrl_del = "http://localhost:8080/api/v1/medicine";

  getMedicineList():Observable<Medicine[]>{
    return this.httpClient.get<Medicine[]>(this.baseUrl);
  }

  addMedicine(medicine:Medicine):Observable<Medicine>{
    return this.httpClient.post<Medicine>(this.baseUrl_insert, medicine);
  }

  deletemedicine(id:number):Observable<object>{
    return this.httpClient.delete<object>(`${this.baseUrl_del}/${id}`);
  }

  updateMedicine(id:number, medicine:Medicine){
    return this.httpClient.put<Medicine>(`${this.baseUrl_del}/${id}`, medicine);
  }

  getMedicineById(id:number):Observable<Medicine>{
    return this.httpClient.get<Medicine>(`${this.baseUrl_del}/${id}`);
  }
}


