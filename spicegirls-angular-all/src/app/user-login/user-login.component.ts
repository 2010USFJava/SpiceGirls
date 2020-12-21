import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Login } from '../login';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AjaxServiceService } from '../ajax-service.sevrice';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit { 
  //userDetails = '';

  loginMessage = '';

  //logoutMessage = '';



  login: Login = new Login();

  constructor(private myAjax: AjaxServiceService) { }

ngOnInit(): void {
}
onSubmit() {
  this.myAjax.infoRequest().subscribe(

    data => {
      console.log(data);

      const ourField = 'username';
      this.loginMessage = this.loginMessage + ' ' + data[ourField];
    }

  )

}

}
