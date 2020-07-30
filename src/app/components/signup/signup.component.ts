import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";
import { NbRegisterComponent } from '@nebular/auth';
import { NbDialogService, NbDialogRef } from '@nebular/theme';
import { SigninComponent } from '../signin/signin.component';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent extends NbRegisterComponent implements OnInit {
  user:any
  verifica: string
  labelErrorVerify: boolean

  constructor(
    private dialogService: NbDialogService,
    protected dialogRef: NbDialogRef<any>
  ) {
    super();
    this.labelErrorVerify = false
   }

  ngOnInit() {
  }

  signup(){
    // if(this.user.password == this.verifica){
    //   this.authService.signUp(this.user).subscribe(resp=>{
    //     console.log(resp)
    //     localStorage.setItem('token',resp.token)
    //     // this.router.navigate(['/chest/'])
    //   },err =>{ console.log(err)}) //lanza error cuando no se puede conectar al server por la URL 
    // }else{
    //   this.labelErrorVerify = true
    //   this.verifica = ""
    // }
  }

  redirectToLogin() {
    this.dialogRef.close();
    this.dialogService.open(SigninComponent, {hasBackdrop:true }); // este es prueba con datos desde el ts
  }

}
