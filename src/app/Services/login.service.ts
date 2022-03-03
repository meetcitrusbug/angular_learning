import { Injectable,Input } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  @Input() activate:any = ''
  constructor(private user:HttpClient) {}
  url = "https://admin.creatorclasses.co/api/v1/user/login/"
  ngOnInit(): void {
    console.log(this.url,';;;;;;;;;;;;;;;;;;;')
  }
  loginUser(data:any){
    return this.user.post(this.url,data)
  }
  isUserLogIn(){
    return !!localStorage.getItem('Token')
  }
}
