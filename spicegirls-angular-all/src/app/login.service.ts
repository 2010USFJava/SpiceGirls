import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseUrl = 'http://localhost:8088/spice';

  constructor(private http: HttpClient) { }

  getLogin(uid: number): Observable<any>{
    return this.http.get(`${this.baseUrl}/${uid}`);
  }  

  createLogin(login: Object): Observable<any>{
    return this.http.post(`${this.baseUrl}`, login);
  }

  deleteLogin(uid:number): Observable<any>{
    return this.http.delete(`${this.baseUrl}/${uid}`, { responseType: 'text' });
  }

  getLoginList(): Observable<any>{
    return this.http.get(`${this.baseUrl}/login`);
  }
  
}
