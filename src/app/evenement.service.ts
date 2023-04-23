import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Evenement } from './evenement';
import { UserForm } from './user-form';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EvenementService {
  private baseURL = "http://localhost:8082/api/evenement";
  constructor(private httpClient: HttpClient) { }
 
  getUserFormsCountById(id: number): Observable<number> {
    const url = `${this.baseURL}/${id}/userForm`;
    return this.httpClient.get<UserForm[]>(url).pipe(
      map(userForms => userForms.length)
    );
  }
  

  getEventList(): Observable<Evenement[]>{
    return this.httpClient.get<Evenement[]>(`${this.baseURL}`);
  }

  getUserFormsById(id: number): Observable<UserForm[]> {
    const url = `${this.baseURL}/${id}/userForm`;
    return this.httpClient.get<UserForm[]>(url);
  }
  createEvenement(evn: Evenement): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, evn);
  }
 updateEvenement(id: number, evn: Evenement): Observable<Object>{
  return this.httpClient.put(`${this.baseURL}/${id}`, evn);
}
getEvenementeById(id: number): Observable<Evenement>{
  return this.httpClient.get<Evenement>(`${this.baseURL}/${id}`);
}
deleEvenement(id: number): Observable<Object>{
  return this.httpClient.delete(`${this.baseURL}/${id}`);
}
deleteUserForm(id: number): Observable<Object>{
  return this.httpClient.delete(`${this.baseURL}/${id}`);
}
}


