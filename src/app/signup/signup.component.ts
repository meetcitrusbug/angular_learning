import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms'
import { Router } from '@angular/router';
import {SignupService} from './Services/signup.service'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  ngOnInit(): void {
  }
  error:boolean = false
  signupForm = new FormGroup({
    user : new FormControl('', [Validators.required]),
    email : new FormControl('',[Validators.required, Validators.email]),
    password : new FormControl('', [Validators.required, Validators.minLength(6)]),
    confirm_pass : new FormControl('', [Validators.required]),
    remember_me : new FormControl(false),
  })
  get user(){
    return this.signupForm.get('user')
  }
  get email(){
    return this.signupForm.get('email')
  }
  get password(){
    return this.signupForm.get('password')
  }
  get confirm_pass(){
    return this.signupForm.get('confirm_pass')
  }
  errorMessage:any
  constructor(private users:SignupService, private router:Router){}
  getUserData(){
    this.users.signUpUser(this.signupForm.value).subscribe((result:any)=>{
      console.log(result)
      for(let [key,value] of Object.entries(result)){
        if(key == 'message'){
          this.errorMessage = value
        }
      }
    })
  }
  user_password:any
  getPassword(val:any){
    console.log(val)
    this.user_password = val
  }
  user_confirm_password:any
  getConfirmPassword(val:any){
    console.log(val)
    this.user_confirm_password = val
  }
  checkpassword(){
    if(this.user_password != this.user_confirm_password){
      this.error = true
    }
  }
  passFieldType:string = 'password'
  changePassField(val:string){
    if(val == 'password'){
      this.passFieldType = 'text'
    }else{
      this.passFieldType = 'password'
    }
  }
  pass1FieldType:string = 'password'
  changePass1Field(val:string){
    if(val == 'password'){
      this.pass1FieldType = 'text'
    }else{
      this.pass1FieldType = 'password'
    }
  }
}
