import { Component, OnInit, Output } from '@angular/core';
import{UserProfileComponent} from '../user-profile/user-profile.component';
import { Observable} from "rxjs";
import {UserService} from "../user.service";
import{ Router } from '@angular/router';
import {User} from "../user";
import { stringify } from '@angular/compiler/src/util';
import { EventEmitter } from 'events';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: Observable<User[]>;
  name: string;
 

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.reloadData();

    this.name='';

  }
  reloadData() {
    this.users = this.userService.getUserList();
  }
  deleteUser(id: number) {
    this.userService.deleteUser(id)
    .subscribe(
      data => {
        console.log(data);
        this.reloadData();
      },
      error => console.log(error));
    }
    userDetails(id: number) {
      this.router.navigate(['details', id])
    }

    searchUser(): void {
      this.userService.findByName(this.name).subscribe(
        user => {
          this.users = user;
          console.log(user);
        },
      error => { console.log(error);
      });
    }
    onSubmit() {
      this.searchUser();
    }
  
   

    
  }
  
  

