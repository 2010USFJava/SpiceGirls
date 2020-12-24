import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../post';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { User } from '../user';
@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {
  post: Post = new Post();
  user: User = new User();
  submitted = false;

  constructor(private postService: PostService, private router: Router,private cookieService: CookieService) { }

  ngOnInit(): void {
  }

  newPost(): void {
    this.submitted = false;
    this.post = new Post();
  }

  check(){
    var cookieExists: boolean = this.cookieService.check('cookie');
    if(cookieExists){
      console.log("cookie exists")
      this.save();
    }else{
      console.log("cookie does not exist")
    }
  }

  save() {
    this.postService
      .createPost(this.post).subscribe(data => {
        console.log(data)
        this.post.likeCount = 0;
        this.cookieService.get('cookie');
        var id = this.cookieService.get('cookie');
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
