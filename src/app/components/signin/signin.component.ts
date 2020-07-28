import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  user= {
    email: '',
    password:''
  }
  constructor(private authService: AuthService, private router: Router) {

   }

  ngOnInit() {
  }

  signin(){
    this.authService.signIn(this.user).subscribe(resp=>{
      localStorage.setItem('token',resp.token)
      this.router.navigate(['/dashboard'])
    },err =>{ console.log(err)})
  }
}
