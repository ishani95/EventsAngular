import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators, ReactiveFormsModule } from '@angular/forms';
import {User, SignUpService} from '../../service/sign-up.service';
import {LogInService} from '../../service/log-in.service';
import { Http, Headers, Response } from '@angular/http';
import {ErrorStateMatcher} from '@angular/material/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { error } from 'util';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  user: any
  errorMessage : any
  data: any
error: Function
  constructor(private loginService: LogInService, private router: Router) {
    this.user = new User('', '', '','');
   }
  ngOnInit() {
  }
  
  loginUser(user: User) {
    this.errorMessage = null;
  this.loginService.login(this.user);

   // console.log(x);
   
    console.log(this.errorMessage);
    
  }
}
