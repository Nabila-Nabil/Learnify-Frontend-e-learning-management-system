import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../services/account/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  userData: any = {
    userName: '',
    password: ''
  };
  constructor(private loginService: LoginService,private router: Router) {}

  onSubmit(){
    this.loginService.postData(this.userData).subscribe({
      next:((response:any)=>{
        this.router.navigateByUrl('/home');
      }),
      error:((err:any)=>{
 console.log(err)
      })
    })
  }
}
