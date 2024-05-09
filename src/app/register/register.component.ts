import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {RegisterService} from '../services/account/register.service'


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  userData: any = {
    userName: '',
    password: '',
    email: '',
    accountType:'User'
  };
  constructor(private registerService:RegisterService){

  }
  onSubmit(){
    this.registerService.postData(this.userData).subscribe({
      next:((response:any)=>{
     console.log(response)
      }),
      error:((err:any)=>{
console.log(err)
      })
    })
  }
}
