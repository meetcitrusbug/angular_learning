import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms'
import {LoginService} from '../Services/login.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loggedInUserId:string = ''
  loginUser = new FormGroup({
    email_or_username : new FormControl('',[Validators.required, Validators.email]),
    password : new FormControl('', [Validators.required, Validators.minLength(6)]),
  })
  get email_or_username(){
    return this.loginUser.get('email_or_username')
  }
  get password(){
    return this.loginUser.get('password')
  }
  userData:any
  constructor(private user:LoginService, private router:Router) { }
  errorMessage:string = ''
  loginUserData(){
    this.user.loginUser(this.loginUser.value).subscribe((result)=>{
      console.log(result)
      for(let [key,value] of Object.entries(result)){
        if(key == 'code' && value == 200){
          this.router.navigate(['/user-home'])
        }else{
          if(key == 'message'){
            this.errorMessage = value
          }
        }
        if(key == 'data'){
          this.userData = value
          if(this.userData.token){
            localStorage.setItem('Token',this.userData.token)
          }
        }
      }
      this.loginUser.reset()
      // this.router.navigate(['user-home']);
    })
  }
  @Output() data = new EventEmitter ()
  passFieldType:string = 'password'
  changePassField(val:string){
    if(val == 'password'){
      this.passFieldType = 'text'
    }else{
      this.passFieldType = 'password'
    }
  }
  ngOnInit(): void {
    this.data.emit(this.userData)
  }

}
