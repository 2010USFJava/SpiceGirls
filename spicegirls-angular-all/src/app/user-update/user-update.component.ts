import { Component, OnInit } from '@angular/core';
import { User} from '../user';
import {ActivatedRoute, Router} from '@angular/router';
import { UserService} from '../user.service';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {
  id: number;
  user: User;


  testUser: User ={
    
    userId:22,
    firstName:"Eliza",
    lastName:"Benit",
    bio:"Killer of Zombies",
    profilePicture:"Green",
    username: "elzebells",
    password: "greenBeans"
  };

  constructor(private route: ActivatedRoute, private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.user = new User();
    this.id = this.route.snapshot.params['id'];
    this.user=this.testUser;

    this.userService.getUser(this.id)
    .subscribe(data => {
      console.log(data)
      this.user = data;
    }, error => console.log(error));
    }

    updateUser() {
      this.userService.updateUser(this.id, this.user).subscribe(data => {
        console.log(data);
        this.user = new User();
        this.goToList();
      }, error => console.log(error));
    }
    onSubmit() {
      this.updateUser();

    }
    goToList() {
      this.router.navigate(['/users']);
    }


    //individual update functions
    

    updateFirstName(){
      console.log("Update First Name is a work in progress");
      // this.userService.updateFirstName(user, fName)
      //   .subscribe(data=>{
      //     console.log(data)
      //     this.user=data;
      //   })
    }

    
    updateLastName(){
      console.log("Update Last Name is yet to be programmed");
    }

    
    updateBio(){
      console.log("Update bio is yet to be programmed");
    }

    
    updatePassword(){
      console.log("Update Password is yet to be programmed");
    }

    updateProfilePicture(){
      
      console.log("Update Profile Picture is yet to be programmed");
    }

  }

