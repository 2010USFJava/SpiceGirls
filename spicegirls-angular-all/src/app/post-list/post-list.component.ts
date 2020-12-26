import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PostService } from '../post.service';
import { Post } from '../post';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts: Observable<Post[]>;

  constructor(private postService:PostService, private router:Router) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData(){
    this.posts = this.postService.getPostList();
  }

  deletePost(pid:number){
    this.postService.deletePost(pid).subscribe(
      data => {
        console.log(data);
        this.reloadData();
      },
      error => console.log(error));
  }

  postDetails(pid:number){
    this.router.navigate(['details', pid]);
  }

}
