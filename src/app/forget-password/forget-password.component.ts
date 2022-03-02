import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms'
import { Router } from '@angular/router';
import {ForgetPasswordService} from './Services/forget-password.service'

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {
  resetPassword = new FormGroup({
    email : new FormControl('', [Validators.required, Validators.email]),
  })
  get email(){
    return this.resetPassword.get('email')
  }
  constructor(private user:ForgetPasswordService, private router:Router) { }

  ngOnInit(): void {
  }
  errorMessage:string = ''
  resetPassData(){
    this.user.resetPassword(this.resetPassword.value).subscribe((result)=>{
      console.log(result)
      for(let [key,value] of Object.entries(result)){
        if(key == 'message'){
          this.errorMessage = value
        }
      }
    })
  }

}
