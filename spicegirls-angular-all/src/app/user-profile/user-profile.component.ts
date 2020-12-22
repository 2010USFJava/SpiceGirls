import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService} from '../user.service';
import {UserListComponent}from  '../user-list/user-list.component';
import { Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  id: number;
  user: User;

  constructor(private route: ActivatedRoute, private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.user = new User();
    this.id = this.route.snapshot.params['id'];
    this.userService.getUser(this.id).subscribe(data => {
      console.log(data)
      this.user = data;
    }, error => console.log(error));
  }
  list() {
    this.router.navigate(['list'])
  }

}
