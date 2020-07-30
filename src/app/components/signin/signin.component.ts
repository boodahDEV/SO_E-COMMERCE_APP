import { Component, OnInit, NgModule, Input } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Routes } from '@angular/router';
import { NbLoginComponent } from '@nebular/auth';  // <---
import { NbDialogRef, NbDialogService } from '@nebular/theme';
import { TemplateRef } from '@angular/core';
import { SignupComponent } from '../signup/signup.component';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
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

  constructor(private authService: AuthService,
    private dialogService: NbDialogService,
    protected dialogRef: NbDialogRef<any>
  ) {
    super();
    this.showPassword = false;
  }

  ngOnInit(): void {
    // throw new Error("Method not implemented.");
  }

  login() {
    this.authService.signIn(this.user).subscribe(resp => {
      localStorage.setItem('session-init', JSON.stringify({
        "email": this.user.email
      }))
      // this.router.navigate(['/dashboard'])
    }, err => { console.log(err) })
  }

  getInputType() {
    if (this.showPassword) {
      return 'text';
    }
    return 'password';
  }

  redirectToRegister() {
    this.dialogRef.close();
    this.dialogService.open(SignupComponent, {hasBackdrop:true }); // este es prueba con datos desde el ts
  }

  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }
}
