import { Component, OnInit } from '@angular/core';
import { User} from '../user';
import {ActivatedRoute, Router} from '@angular/router';
// import { UserService} from '../user.service';
import {UserUpdateService} from '../user-update.service';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {
  id: number;
  user: User = new User();


  constructor(private route: ActivatedRoute, private router: Router, private userUpdateService: UserUpdateService) { }

  ngOnInit() {

    //on update: Replace this will call to cookie or session
    this.id=3;

    this.userUpdateService.getUserById(this.id)
    .subscribe(data => {
      console.log(data)
      this.user = data;
    }, error => console.log(error));


  }
    
    updateCompletly(){
      console.log("Update Completly is a work in progress");
      this.userUpdateService.updateCompletly(this.user)
      .subscribe(data=>{
          console.log(data)
          this.user=data;
        }, error => console.log(error));


        this.router.navigate(['/user-profile']);
    }

    

    

  }

