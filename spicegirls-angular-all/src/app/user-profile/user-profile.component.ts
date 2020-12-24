import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../user';
import { UserService} from '../user.service';
import {UserListComponent}from  '../user-list/user-list.component';
import { Router, ActivatedRoute} from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
 
  cookie: number;
  user: User;

  constructor(private route: ActivatedRoute, private router: Router, private userService: UserService, private cookieService: CookieService) { }

  ngOnInit() {
    console.log(this.cookieService.get('cookie'));
    this.user = new User();
    this.cookie = this.route.snapshot.params['id'];
    
    this.userService.getUser(this.cookie).subscribe(data => {
      console.log(data)
      this.user = data;
    }, error => console.log(error));
  }
  list() {
    this.router.navigate(['list'])
  }


}
