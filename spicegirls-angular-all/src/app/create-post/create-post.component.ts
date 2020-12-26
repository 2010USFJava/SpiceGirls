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
        // this.post.postId = <number>data;
        // console.log(this.post.postId);
        this.goToList();
      },
        error => console.log(error));
  }

  onFileSelected(event){
    console.log(event);
    this.selectedFile = event.target.files[0];
    
  }

  //need to get url of uploaded image to put into post.image
  upload(){
    this.uploadService.pushFileToStorage(this.selectedFile).subscribe(data => {
      this.post.image = JSON.stringify(data.body);
      console.log("LOOK AT THIS FOR URL: " + this.post.image);
      this.save();
    }, error => console.log(error));
  }


  // download(){
  //   this.uploadService.getFileFromStorage(this.selectedFile).subscribe(data => {
  //     console.log("LOOK HERE FOR DOWNLOAD URL: " + data);

  //   })
  // }

    //works good! Can attach user to post.
    //Now post.post isn't working and image is still null
  onSubmit() {
    this.submitted = true;
    this.userId = Number(this.cookieService.get('cookie'));
    console.log(this.post.user);
    this.getUser();
  }

  goToList() {
    this.router.navigate(['/post']);
  }

}
