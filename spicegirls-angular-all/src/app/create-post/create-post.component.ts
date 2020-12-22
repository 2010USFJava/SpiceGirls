import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../post';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {
  post: Post = new Post();
  submitted = false;

  constructor(private postService: PostService, private router: Router) { }

  ngOnInit(): void {
  }

  newPost(): void {
    this.submitted = false;
    this.post = new Post();
  }

  save() {
    this.postService
      .createPost(this.post).subscribe(data => {
        console.log(data)
        this.post.likeCount = 0;
        this.post = new Post();
        this.goToList();
      },
        error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  goToList() {
    this.router.navigate(['/post']);
  }

}
