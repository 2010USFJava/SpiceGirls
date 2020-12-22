import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from '../login.service';
import { Login } from '../login';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit { 
  username: string;
  password: string;
  login: Login = new Login();

  constructor(private myLogin:LoginService, private _route: ActivatedRoute, private _router: Router, private cookieService: CookieService) { }

ngOnInit(): void {
}
onSubmit() {
  this.myLogin.getLogin(this.login.username, this.login.password).subscribe(

    data => {
      console.log(data);
      this.login = data;
      console.log(this.login.user_id)
      this.cookieService.set('cookie', `${this.login.user_id}`)
      console.log(this.cookieService.get('cookie'));
    }

  )

}

}
