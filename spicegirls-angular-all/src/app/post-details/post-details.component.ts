import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../post.service';
import { PostListComponent } from '../post-list/post-list.component';
import { Router, ActivatedRoute } from '@angular/router';
import { UploadService } from '../upload.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  pid:number;
  post: Post;
  key: string;

  constructor(private route:ActivatedRoute, private uploadService:UploadService, private router:Router, private postService:PostService) { }

  ngOnInit(): void {
    this.post = new Post();
    this.pid = this.route.snapshot.params['pid'];
    this.postService.getPost(this.pid).subscribe(data =>{
      console.log(data)
      this.post = data;
      this.post.image = this.key;
      this.getFilesFromS3();
    }, error => console.log(error));
  }

  getFilesFromS3(){
    this.uploadService.getFiles(this.key).subscribe(data =>{
      console.log(data);
      
      this.list();
    })
  }

  list(){
    this.router.navigate(['post']);
  }

}
