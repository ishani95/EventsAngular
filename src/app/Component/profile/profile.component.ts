import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {Profile, ProfileService} from '../../service/profile.service';
import {LogInService} from '../../service/log-in.service';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import {Photo, PhotoService} from '../../service/photo.service';

const API_URL = environment.apiUrl;
export class Category {
  id:number;
  category:string;
  
  constructor( id: number,category: string) {
    this.id = id;
    this.category = category;
     }
}
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {
  profile: any;
  selectedvalue: string = '';
  selectedOptions: string; 
 // categories: Category[];
  //skill: Skill
  
  categories = [
  new Category(1, 'Photography'),
  new Category(2, 'Catering'),
  new Category(3, 'Sounds'),
  new Category(4, 'Florist')		 
] ;
selectedFile: File = null;
url = "api/Photo";
  constructor(private profileservice: ProfileService,private http:Http,private loginService: LogInService ) { 
    this.profile = new Profile('', '', '');
  }

  ngOnInit() {
  }
  addNewProfile(profile:Profile) {
    let headers = new Headers({ 'Authorization': 'Bearer ' + this.loginService.token });
    let options = new RequestOptions({ headers: headers });
    
    /* for (let i=0; i < this.selectedOptions.length; i++) {
      console.log("Technology Id: " + this.selectedOptions[i]);
      this.profile.skills = this.profile.skills + this.selectedOptions[i] + ",";
   //   console.log("Technology Name: " + user.technologies[i].techName);
   }  */
  // profile.category = this.selectedvalue;
   console.log('ssuccesss'+ profile.category);
    var x =this.profileservice.addNewProfile(this.profile);
    if(x)
    {
      console.log("Technology Id: ");
    }
    else{
      console.log("AAAAAAAAAAAAA ");
    }
  /*   if(x)
    {
    //  let userTechnologies: Skill[] = form.controls['selectedOptions'].value;
      for (let i=0; i < this.selectedOptions.length; i++) {
         console.log("Technology Id: " + this.selectedOptions[i]);
      //   console.log("Technology Name: " + user.technologies[i].techName);
      } 
      console.log('ssuccesss');
    }
    for (let i=0; i < this.selectedOptions.length; i++) {
      console.log("Technology Id: " + this.selectedOptions[i]);
   //   console.log("Technology Name: " + user.technologies[i].techName);
   } */ 
      console.log(this.profile);
  }
 /*  selected(event) {
    let target = event.source.selected._element.nativeElement;
    let selectedData = {
      value: event.value,
      text: target.innerText.trim()
    }; */
  /* onSelect(category: Category): void {
    this.selectedvalue = category;
  } */
  onFileSelected(event) {
    this.selectedFile = <File>event.target.files[0];
    console.log(event);
  }
  onUpload(profile:Profile) {
    let headers2 = new Headers({ 'Authorization': 'Bearer ' + this.loginService.token });
    let options2 = new RequestOptions({ headers: headers2 });
   // let headers = new Headers({ 'Content-Type': 'application/json' });
         // let options = new RequestOptions({ headers: headers });
         
    //let headers = new Headers({ 'Authorization': 'Bearer ' + this.authService.token });
    //let options = new RequestOptions({ headers: headers });
    //this.profile.type = 'receiver';
    const fd = new FormData(); 
     fd.append('image' , this.selectedFile, this.selectedFile.name) ;
    console.log('ccccccccccccccccccccccccc');
    console.log(profile.category);
    return this.http.post(API_URL+this.url, fd,options2)
    .subscribe(response => {
      console.log(response);
      var data = response.json()
            return new Photo('','','',data.category);
    },
      err => {
      console.log('Error : ' + err);
      }
    );
    //for (let i=0; i < this.selectedOptions.length; i++) {
      //console.log("Technology Id: " + this.selectedOptions[i]);
    //  this.profile.skills = this.profile.skills + this.selectedOptions[i] + ",";
   //   console.log("Technology Name: " + user.technologies[i].techName);
   } 
}
