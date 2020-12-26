import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { Observable, forkJoin } from "rxjs";
import { LikeService } from "../like.service";
import { Like } from "../like";
import { PostService } from "../post.service";
import { Post } from "../post";

 /* Steps:  
  * [1] Grab Post Table & Read to screen
  * [2] Grab Likes Table & Read to screen
  * [3] Create and eventhandler that just populates the Like count
  * [4] Use (2) Users to change the Like count when button is pressed
  */

@Component({
  selector: 'app-like-post',
  templateUrl: './like-post.component.html',
  styleUrls: ['./like-post.component.css']
})

export class LikePostComponent implements OnInit {
   likes: Observable<Like[]>;
   posts: Observable<Post[]>;
   
   personLiked: Like = new Like();
   submitted = false;
  
  constructor(private likeService:LikeService, private postService:PostService, private router: Router ) {}

  ngOnInit(): void {
    this.reloadData();
  }
  reloadData() {
    this.likes = this.likeService.getLikeList();
    this.posts = this.postService.getPostList();

  }
 
   deleteLike(lid:number){
     this.likeService.deleteLike(lid).subscribe(
       data => {
         console.log(data);
         this.reloadData()
       },
       error => console.log(error));
   }

  //  newPersonLiked():void{
  //   this.personLiked=new Like();
  // }


  createLike(postId:number, userId:number){
    this.likeService.createLike(this.personLiked).subscribe(
      
      data => {
        console.log(data);
        this.personLiked = new Like();
      this.personLiked.postId;
      this.personLiked.userId;
        this.reloadData()
      },
      error => console.log(error));
  }



  // updateLike(postId:number, userId:number){
  //   this.likeService.updateLike(postId, userId).subscribe(
  //     data => {
  //       console.log(data);
  //       this.reloadData()
  //     },
  //     error => console.log(error));

  // }

  // onSubmit() {
  //   this.submitted = true;
  //   this.save();

  // }
 
  gotoList(){
    this.router.navigate(['/like']);
  }
  

}
