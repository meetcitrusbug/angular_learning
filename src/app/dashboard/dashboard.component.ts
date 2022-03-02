import { Component, OnInit } from '@angular/core';
import {LogoutService} from './Services/logout.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private user:LogoutService, private router:Router) { }
  logoutUser(){
    this.user.logoutUser().subscribe((result)=>{
      console.log(result)
      for(let [key,value] of Object.entries(result)){
        if(key == 'code' && value == 200){
          this.router.navigate(['/login'])
        }
      }
      // this.router.navigate(['user-home']);
      localStorage.clear()

    })
  }

  ngOnInit(): void {
  }
  isUserLogIn:boolean = !!localStorage.getItem('Token')

}
