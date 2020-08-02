import { Component, OnInit } from '@angular/core';
import {UsersService} from '../users.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 loginUserDetails = {email:'',password: ''};

  constructor(private usersService: UsersService,private router: Router) { }
title:String = 'Login';
loginUser(){
  //console.log(this.loginUserDetails)
    this.usersService.loginUser(this.loginUserDetails)
    .subscribe(
       
 res => { 
    // console.log('token')
    localStorage.setItem('token',res['token'])
    this.router.navigate(['/product'])
   },
   err => console.log(err)
   )
 }
  ngOnInit(): void {
  }

}
