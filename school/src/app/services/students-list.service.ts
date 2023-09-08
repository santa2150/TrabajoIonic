import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentsListService {
  private apiUrl = 'http://localhost:3001/api/v1/';
  constructor(private http: HttpClient) {}

  getPersonas(): Observable<any> {
    const url = `${this.apiUrl}getPersonas`;
    return this.http.get(url);
  }
}
