import { Injectable, Injector, inject } from '@angular/core';
import {HttpInterceptor} from '@angular/common/http';
import {UsersService} from './users.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {
   constructor(private injector: Injector) { }
  intercept(req,next){
    let usersService = this.injector.get(UsersService)
    let tokenizedReq = req.clone(
      {
        setHeaders:{
          Authorization: `Bearer ${usersService.getToken()}` 
        }
      })
    return next.handle(tokenizedReq)
  }
 }
