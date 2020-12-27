import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { Observable, forkJoin } from "rxjs";
import { LikeService } from "../like.service";
import { Like } from "../like";
import { PostService } from "../post.service";
import { Post } from "../post";
import { User } from '../user';
import { UserService} from '../user.service';
import { CookieService } from 'ngx-cookie-service';
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
  imgSrc: string = '../../assets/P2Icons/chilli001.png'
  user: User;
  post: Post;
  postId: number;
  userId: number;
  key: string;
  id:number;
  
  //likes: Observable<Like[]>;
  posts: Observable<Post[]>;  
  personLiked: Like = new Like();
  
  constructor(private likeService:LikeService, private postService:PostService, private route: ActivatedRoute, private router: Router, private userService: UserService, private cookieService: CookieService ) {}

  ngOnInit(): void {
    

    this.userInfo();
    this.postInfo();
    this.reloadData();

  }
  reloadData() {
    //this.likes = this.likeService.getLikeList();
    this.posts = this.postService.getPostList();

  }
 

   createLike(id:number){
    this.postService.createLike(this.personLiked, id).subscribe(
      data => {
        console.log(data);
       this.reloadData()
      },
      error => console.log(error));
  }

   userInfo(){
    console.log(this.cookieService.get('cookie')); //prints out cookie (user id)
    this.user = new User();
    this.userId = this.route.snapshot.params['id'];
    this.userId = Number(this.cookieService.get('cookie')); //turns cookie into number and id = cookie
    console.log(this.userId);
    this.userService.getUser(this.userId).subscribe(data => { //id is 1 when it gets here and prints all data
      console.log(this.userId) //prints correct id number
      console.log(data) //prints whole user table
      
      this.user = data; 
      console.log(this.user) //prints all users
    }, error => console.log(error));
  }

  postInfo(){
    this.post = new Post();
    this.postId = this.route.snapshot.params['postId'];
    this.postService.getPostList().subscribe(data =>{
      console.log(data)
      this.post = data;
      this.post.image = this.key;
    }, error => console.log(error));

  }

  gotoList(){
    this.router.navigate(['/post']);
  }



  

}
