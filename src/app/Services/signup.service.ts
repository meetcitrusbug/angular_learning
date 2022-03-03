import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  url = "https://admin.creatorclasses.co/api/v1/user/signup/"
  constructor(private user:HttpClient) {}
  signUpUser(data:any){
    return this.user.post(this.url,data)
  }
}
