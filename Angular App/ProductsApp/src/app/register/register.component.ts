import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }
  title:String = 'Registration';
  country = ['India','Bangladesh','China','Pakisthan','Russia','Others'];
  ngOnInit(): void {
  }
}