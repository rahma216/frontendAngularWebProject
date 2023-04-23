import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categorie } from './categorie';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
  })
  export class CategorieService {
    private baseURL = "http://localhost:8082/api/categorie";
  
    constructor(private httpClient: HttpClient) {}
    
    getCategorieList(): Observable<Categorie[]>{
      return this.httpClient.get<Categorie[]>(`${this.baseURL}`);
    }

    createCategory(cat: Categorie): Observable<Object>{
      return this.httpClient.post(`${this.baseURL}`, cat);
    }

  }