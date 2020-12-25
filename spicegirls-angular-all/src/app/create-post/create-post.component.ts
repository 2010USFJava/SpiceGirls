import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../post';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { User } from '../user';
import { UserService } from '../user.service';
import { UploadService } from '../upload/upload.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {
  post: Post = new Post();
  user: User = new User();
  id:number;
  submitted = false;
  selectedFile: File = null;

  toFile;

  constructor(private postService: PostService, private userService:UserService, 
    private router: Router,private cookieService: CookieService, private uploadService:UploadService) { }

  ngOnInit(): void {

  }

  newPost(): void {
    this.submitted = false;
    this.post = new Post();
    this.post.uid = Number(this.cookieService.get('cookie'));
    this.post.likeCount = 0;
  }

  check(){
    var cookieExists: boolean = this.cookieService.check('cookie');
    if(cookieExists){
      console.log("cookie exists")
      this.post.uid = Number(this.cookieService.get('cookie'));
      this.save();
    }else{
      console.log("cookie does not exist")
    }
  }

  save() {
    this.post.uid = Number(this.cookieService.get('cookie'));

    this.userService.getUser(this.id).subscribe(data => {
      this.user = data;
    }, error => console.log(error));

    this.post.uid = this.user.userId;

    // const formdata: FormData = new FormData();
    // formdata.append('image', this.post.image, this.post.image.name);

    this.postService
      .createPost(this.post).subscribe(data => {
        console.log(data)
        // this.post.uid = Number(this.cookieService.get('cookie'));
        // const formdata: FormData = new FormData();
        // formdata.append('image', this.post.image, this.post.image.name);
        this.goToList();
      },
        error => console.log(error));
  }

  onFileSelected(event){
    console.log(event);
    this.toFile = event.target.files;
  }

  onSubmit() {
    this.submitted = true;
    this.post.uid = Number(this.cookieService.get('cookie'));
    const file = this.toFile.item(0);
    // this.uploadService.fileUpload(file);
    // const formdata: FormData = new FormData();
    // formdata.append('image', this.post.image, this.post.image.name);
    this.save();
  }

  goToList() {
    this.router.navigate(['/post']);
  }

}
