import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private _registerUrl = 'http://localhost:3000/admin/register';
  private _loginUrl = 'http://localhost:3000/admin/login';

  constructor(private http: HttpClient,private router: Router) { }
  registerUser(user){
    return this.http.post(this._registerUrl,user)
  }
  loginUser(user){
    return this.http.post(this._loginUrl,user)
  }
  loggedIn(){
    return !!localStorage.getItem('token')
  }
  getToken(){
     return localStorage.getItem('token')
  }
}
