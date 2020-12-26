import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../post';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { User } from '../user';
import { UserService } from '../user.service';
import { UploadService } from '../upload.service';


@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {
  post: Post = new Post();
  image:string;
  user: User;
  userId:number;
  postId:number;
  new: Post;
  submitted = false;
  selectedFile: File;

  toFile;



  constructor(private postService: PostService, private userService:UserService, 
    private router: Router,private cookieService: CookieService, private uploadService:UploadService) { }

  ngOnInit(): void {

  }

  newPost(): void {
    this.submitted = false;
    this.post = new Post();
    // this.post.userId = Number(this.cookieService.get('cookie'));
    this.post.likeCount = 0;
  }

  check(){
    var cookieExists: boolean = this.cookieService.check('cookie');
    if(cookieExists){
      console.log("cookie exists")
      // this.post.user = Number(this.cookieService.get('cookie'));
      this.save();
    }else{
      console.log("cookie does not exist")
    }
  }


  getUser(){
    this.userService.getUser(this.userId).subscribe(data =>{
      console.log(data);
      this.post.user = data;
      this.upload();
    },
    error => console.log(error));
  }

  save() {
    this.postService
      .createPost(this.post).subscribe(data => {
        console.log(data)
        this.post.postId = <number>data;
        console.log(this.post.postId);
        // this.post.uid = Number(this.cookieService.get('cookie'));
        // const formdata: FormData = new FormData();
        // formdata.append('image', this.post.image, this.post.image.name);
        this.goToList();
      },
        error => console.log(error));
  }

  onFileSelected(event){
    console.log(event);
    this.selectedFile = event.target.files[0];
    // this.post.image = this.selectedFile;
    // this.toFile = event.target.files;
    // this.image = event.target.files;
    
  }


  upload(){
    this.uploadService.pushFileToStorage(this.selectedFile).subscribe(data => {
      console.log(data);
      this.post.image = String(data);
      this.save();
    }, error => console.log(error));
  }

    //works good! Can attach user to post.
    //Now post.post isn't working and image is still null
  onSubmit() {
    this.submitted = true;
    // this.post.image = this.image;
    this.userId = Number(this.cookieService.get('cookie'));
    console.log(this.post.user);
    // const file = this.selectedFile;
    // this.uploadService.pushFileToStorage(file);
    // const formdata: FormData = new FormData();
    // formdata.append('image', this.post.image, this.post.image.name);
    this.getUser();
  }

  goToList() {
    this.router.navigate(['/post']);
  }

}
