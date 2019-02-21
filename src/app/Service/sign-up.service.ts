import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
//import { Observable } from 'rxjs';
//import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';
export class User {
  constructor(public name: string, public password: string, public email: string ,  public phone: string) { }
}
const API_URL = environment.apiUrl;

@Injectable()
export class SignUpService {

  public token: string;
  
  users = []
  url = "api/User";
  constructor(private http:Http) { }
  addNewUser(user:User): any {
    console.log("d");
  //  let headers2 = new Headers({ 'Authorization': 'Bearer ' + this.authService.token });
   // let options2 = new RequestOptions({ headers: headers2 });
   // let headers = new Headers({ 'Content-Type': 'application/json' });
         // let options = new RequestOptions({ headers: headers });
          return this.http.post(API_URL+this.url, user)
          .subscribe(response => {
            let token = response.json() && response.json().token;
            this.token = token;
            localStorage.setItem('currentUser', JSON.stringify({ email: user.email, token: token }));
            var data = response.json()
            return new User(data.name,data.password,data.email,data.phone);
          },
            err => {
            console.log('Error : ' + err);
            }
          );
      }
      

}
