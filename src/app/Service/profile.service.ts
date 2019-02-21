import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { environment } from '../../environments/environment';
import {LogInService} from '../service/log-in.service';
export class Profile {
  constructor(public userId: string, public category: string, public description: string) { }
}
const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  url = "api/Profile";
  constructor(private http: Http, private loginService: LogInService) { }

  addNewProfile(profile:Profile): any {
    console.log("d");
    let headers2 = new Headers({ 'Authorization': 'Bearer ' + this.loginService.token });
    let options2 = new RequestOptions({ headers: headers2 });
   // let headers = new Headers({ 'Content-Type': 'application/json' });
         // let options = new RequestOptions({ headers: headers });
          return this.http.post(API_URL+this.url, profile,options2)
          .subscribe(response => {
            var data = response.json()
            return new Profile('',data.category,data.description);
          },
            err => {
            console.log('Error : ' + err);
            }
          );
      }
}
