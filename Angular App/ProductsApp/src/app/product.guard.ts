import { Injectable } from '@angular/core';
import { CanActivate,Router} from '@angular/router';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root'
})
 export class ProductGuard implements CanActivate {
   constructor(private usersService: UsersService,private router: Router){}
    canActivate(): boolean{
 if(this.usersService.loggedIn()){
   console.log('true');
   return true;
 }
else{
  this.router.navigate(['/login'])
  return false;
}
    }
  
 }
