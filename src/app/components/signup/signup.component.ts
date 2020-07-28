import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user= {
    email: '',
    firstname:'',
    lastname:'',
    password:''
  }
  verifica: string
  labelErrorVerify: boolean

  constructor(private authService: AuthService, private router: Router) {
    this.labelErrorVerify = false
   }

  ngOnInit() {
  }

  signup(){
    if(this.user.password == this.verifica){
      this.authService.signUp(this.user).subscribe(resp=>{
        console.log(resp)
        localStorage.setItem('token',resp.token)
        this.router.navigate(['/chest/'])
      },err =>{ console.log(err)}) //lanza error cuando no se puede conectar al server por la URL 
    }else{
      this.labelErrorVerify = true
      this.verifica = ""
    }
  }
}
