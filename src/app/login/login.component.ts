import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private router: Router) { }
  loginform!: FormGroup;
  spinner: boolean = false;
  success: boolean = false
  ngOnInit() {
    this.initializeForm();
  }


  initializeForm() {
    this.loginform = new FormGroup({
      'username': new FormControl('', Validators.required),
      'password': new FormControl('', Validators.required)
    })
    console.log(this.loginform)
  }

  async signin() {
    this.spinner = true;


    // console.log(this.loginform.controls['username'].value, this.loginform.controls['password'].value);
    const body = {
      username: this.loginform.controls['username'].value,
      password: this.loginform.controls['password'].value
    }
    console.log(body, "body");


    // await axios.post('http://192.168.1.2:3000/login-auth/auth', body).then((response: any) => {

    //   console.log(response);
    // })
    this.router.navigate(['dashboard'])
    this.success = true
  }

}
