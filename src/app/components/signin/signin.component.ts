import { Component, OnInit, NgModule, Input } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { NbLoginComponent } from '@nebular/auth';  // <---
import { NbDialogRef, NbDialogService } from '@nebular/theme';
import { SignupComponent } from '../signup/signup.component';
import Swal from 'sweetalert2';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

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
    protected dialogRef: NbDialogRef<any>,
    public router: Router
  ) {
    super();
    this.showPassword = false;
  }

  ngOnInit(): void {
    // throw new Error("Method not implemented.");
  }

  login() {
    this.authService.signIn(this.user).subscribe(resp => {
      sessionStorage.setItem('session-data', JSON.stringify(resp))
      Swal.fire({
        title: "Inicio correcto",
        text: `Bienvenido ${resp.username}!`,
        timer: 1000,
        icon: "success",
        showConfirmButton: false,
      });
      window.location.reload()
      setTimeout(() => {
        // this.router.navigate(['/dashboard'])
        this.dialogRef.close();
      }, 1000);
    }, err => { console.log(err) })
    setTimeout(() => {
      this.authService.signIn(this.user).subscribe().unsubscribe();
    }, 1500);
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
