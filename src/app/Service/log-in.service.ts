import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { environment } from '../../environments/environment';
import {User, SignUpService} from '../service/sign-up.service';
import { catchError, retry } from 'rxjs/operators';
const API_URL = environment.apiUrl;
@Injectable({
  providedIn: 'root'
})
export class LogInService {
  data: any;
  // error: any;
   public token: string;
   url = "api/Authenticate";
   constructor(private http: Http) {
     var currentUser = JSON.parse(localStorage.getItem('currentUser'));
     this.token = currentUser && currentUser.token;
    }
   /* login(user:User) {
     this.http.post(API_URL+this.url, user)
       .map(res => res.json()) 
       .subscribe(
         // We're assuming the response will be an object
         // with the JWT on an id_token key
       //  data => localStorage.setItem('id_token', data.id_token),
         //error => console.log(error)
 
         let token = res.json() && res.json().token;
         if (token) {
             // set token property
             this.token = token;
         
             // store username and jwt token in local storage to keep user logged in between page refreshes
             localStorage.setItem('currentUser', JSON.stringify({ username: user.user_name, token: token }));
       );
   }
 }, */
 
 
 login(user:User){
 return this.http.post(API_URL+this.url,user )
 .subscribe(res => {if(res.status != 200) {
   throw new Error('No comments to retrieve! code status ' + res.status);
 } else {
   let token = res.json() && res.json().token;
   this.token = token;
   localStorage.setItem('currentUser', JSON.stringify({ email: user.email, token: token }));
   return res.json();
 }})};
}
