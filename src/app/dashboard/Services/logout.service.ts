import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class LogoutService {
  url = "https://admin.creatorclasses.co/api/v1/user/logout/"
  constructor(private user:HttpClient) { }
  token:any = localStorage.getItem('Token')
  headers = new HttpHeaders().set(
    "Authorization",
    this.token
  )
  logoutUser(){
    return this.user.post(this.url,null,{headers:this.headers})
  }
}
