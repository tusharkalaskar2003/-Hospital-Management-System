import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Patient} from './patient'

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private httpClient: HttpClient) { }

  private baseUrl = "http://localhost:8080/api/v1/patient/get";
  private baseUrl_insert = "http://localhost:8080/api/v1/patient/insert";
  private baseUrl_del_upd = "http://localhost:8080/api/v1/patient";
  //Rest APIs

  getPatientList(): Observable<Patient[]>{

      return this.httpClient.get<Patient[]>(`${this.baseUrl}`);
  }

  createPatient(patient:Patient):Observable<Patient>{
    
    return this.httpClient.post<Patient>(`${this.baseUrl_insert}`,patient);
  }

  deletePatient(id:number):Observable<object>{
    return this.httpClient.delete<object>(`${this.baseUrl_del_upd}/${id}`);
  }

  updatePatient(id:number, patient:Patient){
    return this.httpClient.put<Patient>(`${this.baseUrl_del_upd}/${id}`,patient);
  }

  getPatientById(id:number):Observable<Patient>{
    return this.httpClient.get<Patient>(`${this.baseUrl_del_upd}/${id}`);
  }
}
