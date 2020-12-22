import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
private baseUrl= 'http://localhost:8088/users'

  constructor(private http: HttpClient) { }

  getUser(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  registerUser(user: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/`, user);

  }
  updateUser(id:number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }
  deleteUser(id:number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, {responseType: 'text'});

  }
  getUserList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/list`);
  }
  findByName(name): Observable<any> {
    return this.http.get(`${this.baseUrl}/list/?name=${name}`);
  }
}
