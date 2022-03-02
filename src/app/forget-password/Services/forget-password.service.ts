import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ForgetPasswordService {
  url = "https://admin.creatorclasses.co/api/v1/user/forgot-password/"
  constructor(private user:HttpClient) { }
  resetPassword(data:any){
    return this.user.post(this.url,data)
  }
}
