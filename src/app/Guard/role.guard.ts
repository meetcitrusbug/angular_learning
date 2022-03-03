import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {LoginService} from '../Services/login.service'

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  constructor(private service:LoginService, private router:Router){}
  canActivate() {
    if(!this.service.isUserLogIn()){
      return true;
    }
    this.router.navigate(['/user-home']);
    return false;
  }

}
