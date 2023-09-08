import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CursesListService {
  private apiUrl = 'http://localhost:3001/api/v1/';
  constructor(private http: HttpClient) { }


  getCursos(): Observable<any> {
    const url = `${this.apiUrl}getCursos`;
    return this.http.get(url);
  }
}
