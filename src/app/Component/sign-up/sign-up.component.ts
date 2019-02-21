import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators, ReactiveFormsModule } from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {User, SignUpService} from '../../service/sign-up.service';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
//import { Observable } from 'rxjs';
//import 'rxjs/add/operator/map';
/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})


export class SignUpComponent implements OnInit {
  user: any
  errorMessage : any
  data: any
  constructor(private signupService: SignUpService,private http:Http) {
    this.user = new User('', '', '', '');
   }

  ngOnInit() {
  }
 
  saveUser(user: User) {
    //let headers = new Headers({ 'Authorization': 'Bearer ' + this.authService.token });
   // let options = new RequestOptions({ headers: headers });
    var x =this.signupService.addNewUser(this.user).subscribe((data) => 
    this.data = data,
  (error) => this.errorMessage = error);

   // console.log(x);
   
    console.log(this.errorMessage);
    
  }
   

  
emailFormControl = new FormControl('', [
  Validators.required,
  Validators.email,
]);
 matcher = new MyErrorStateMatcher();

}
