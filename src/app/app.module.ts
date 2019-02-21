import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule  } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogInComponent } from './Component/log-in/log-in.component';
import { SignUpComponent } from './Component/sign-up/sign-up.component';
import { SignUpService } from './service/sign-up.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ProfileService } from './service/profile.service';
import {ErrorStateMatcher,ShowOnDirtyErrorStateMatcher} from '@angular/material/core';
import { MatSelectModule,MatOptionModule,MatListModule, MatIconModule, MatMenuModule, MatButtonModule,MatInputModule,MatFormFieldModule,MatCardModule, MatDialogModule } from '@angular/material';
import {FormControl, FormGroupDirective, NgForm, Validators, ReactiveFormsModule,FormsModule } from '@angular/forms';
import { HomeComponent } from './Component/home/home.component';
import { ProfileComponent } from './Component/profile/profile.component';
@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    SignUpComponent,
    HomeComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpModule  ,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatListModule,
    ReactiveFormsModule,
    FormsModule,
    MatOptionModule,
    MatSelectModule
  ],
  providers: [{provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher},SignUpService,ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
