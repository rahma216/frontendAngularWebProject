import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Admin } from './admin';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private baseURL = "http://localhost:8082/admin/login";
  constructor(private httpClient: HttpClient) { }
  login(admin: Admin): Observable<Object>{
    console.log(admin);
    return this.httpClient.post(`${this.baseURL}`, admin);
  }
}
