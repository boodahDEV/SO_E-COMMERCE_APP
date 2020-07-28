import { Component, OnInit, NgModule } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import {  Routes } from '@angular/router';
import { NbAuthComponent, NbAuthService, NbLoginComponent, NbLogoutComponent } from '@nebular/auth';  // <---
export const routes: Routes = [
  {
    path: '',
    component: NbAuthComponent,  // <---
  },
];

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
  // providers: [NbLogoutComponent, AuthService]
})
export class SigninComponent extends NbLoginComponent implements OnInit {
  redirectDelay: number;
  showMessages: any;
  strategy: string;
  errors: string[];
  messages: string[];
  user: any;
  submitted: boolean;
  rememberMe: boolean;
  showPassword: Boolean;

  constructor(){
    super();
    this.showPassword = false;
  }

  ngOnInit(): void {
    // throw new Error("Method not implemented.");
  }

  login(){
    console.log("Email:", this.user.email)
    // this.authService.signIn(this.user).subscribe(resp=>{
      // localStorage.setItem('token',resp.token)
      // this.router.navigate(['/dashboard'])
    // },err =>{ console.log(err)})
  }

  getInputType() {
    if (this.showPassword) {
      return 'text';
    }
    return 'password';
  }

  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }
}
