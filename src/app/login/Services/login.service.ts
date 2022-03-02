import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url = "https://admin.creatorclasses.co/api/v1/user/login/"
  constructor(private user:HttpClient) {}
  loginUser(data:any){
    return this.user.post(this.url,data)
  }
  isUserLogIn(){
    return !!localStorage.getItem('Token')
  }
}
