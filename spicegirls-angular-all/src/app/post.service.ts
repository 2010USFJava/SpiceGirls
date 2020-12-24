import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private baseUrl = 'http://localhost:8088/spice';

  constructor(private http: HttpClient) { }

  getPost(pid: number): Observable<any>{
    return this.http.get(`${this.baseUrl}/${pid}`);
  }  

  createPost(post: Post): Observable<any>{
    // const formdata: FormData = new FormData();
    // formdata.append('post.image', post.image);
    return this.http.post(`${this.baseUrl}/newpost`, post);
  }

  deletePost(pid:number): Observable<any>{
    return this.http.delete(`${this.baseUrl}/${pid}`, { responseType: 'text' });
  }

  getPostList(): Observable<any>{
    return this.http.get(`${this.baseUrl}/post`);
  }
  
}
