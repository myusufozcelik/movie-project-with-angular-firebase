import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isRegister = false;

  constructor() { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  registerNow() {
    console.log(this.isRegister);
    this.isRegister = !this.isRegister;
  }

}
