import { Component, OnInit } from '@angular/core';
import {UsersService} from '../users.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registeredUser = {email:'',password: ''};

  constructor(private usersService: UsersService,private router: Router) { }
   title:String = 'Registration';
  //  country = ['Others','Bangladesh','China','Pakisthan','Russia','Afganisthan','Nepal','Bhutan','Sri Lanka','India'];
   registerUser(){
 //console.log(this.registeredUser);
     this.usersService.registerUser(this.registeredUser)
    .subscribe(
      res => {
       
        localStorage.setItem('token', res['token'])
       this.router.navigate(['/login'])
      },
      err => console.log(err)
     )
   }
  ngOnInit(): void {
  }
}
