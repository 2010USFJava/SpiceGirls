import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LikeService {

  private baseUrl= 'http://localhost:8088/like/list'

  constructor(private http: HttpClient) { }

  getLikeList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getLike(likeId:number):Observable<any>{
    return this.http.get(`${this.baseUrl}/${likeId}`);
  }

  deleteLike(likeId:number):Observable<any>{
    return this.http.delete(`${this.baseUrl}/${likeId}`,{responseType:'text'});
  }

  createLike(like:Object):Observable<Object>{
    return this.http.post(`${this.baseUrl}`, like);
  }

  // updateLike(postId:number, value:any):Observable<Object>{
  //   return this.http.put(`${this.baseUrl}/${postId}`,value);
  // }
  

  

  // getLikeByPid(uid:number):Observable<any>{
  //   return this.http.get(`${this.baseUrl}/${userId}`);
  // }

}
