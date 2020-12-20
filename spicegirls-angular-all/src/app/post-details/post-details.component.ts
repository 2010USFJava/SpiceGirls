import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../post.service';
import { PostListComponent } from '../post-list/post-list.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  pid:number;
  post: Post;

  constructor(private route:ActivatedRoute, private router:Router, private postService:PostService) { }

  ngOnInit(): void {
    this.post = new Post();
    this.pid = this.route.snapshot.params['pid'];
    this.postService.getPost(this.pid).subscribe(data =>{
      console.log(data)
      this.post = data;
    }, error => console.log(error));
  }

  list(){
    this.router.navigate(['post']);
  }

}
