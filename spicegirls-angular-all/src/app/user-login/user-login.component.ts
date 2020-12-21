import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Login } from '../login';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AjaxServiceService } from '../ajax-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  login: Login = new Login();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient
) { }

ngOnInit() {
    sessionStorage.setItem('token', '');
}
onSubmit() {
  let url = 'http://localhost:8080/login';
  this.http.post<Observable<boolean>>(url, {
    userName: this.login.username,
    password: this.login.password
}).subscribe(isValid => {
    if (isValid) {
        sessionStorage.setItem(
          'token', 
          btoa(this.login.username + ':' + this.login.password)
        );
	this.router.navigate(['']);
    } else {
        alert("Authentication failed.")
    }
});

}

}
