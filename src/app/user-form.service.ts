import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Evenement } from './evenement';
import { UserForm } from './user-form';

@Injectable({
  providedIn: 'root'
})
export class UserFormService {
  private baseURL = "http://localhost:8082/api/userForm";
  constructor(private httpClient: HttpClient) { }

  getEvenementeById(id: number): Observable<Evenement>{
    return this.httpClient.get<Evenement>(`${this.baseURL}/${id}`);
  }

  createUserForm(userForm: UserForm): Observable<Object> {
    return this.httpClient.post<UserForm>(`${this.baseURL}`, userForm);
  }

  deleteUserForm(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
  
}
