import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent{
userEmail: string = '';
   userPassword: string = '';
  // @Output() LoginAction: EventEmitter<object> = new EventEmitter<object>();

  userDataObj: Record<string, string> = {};

  setUserName(event: any): void {
    this.userEmail = event.target.value;
    console.log(this.userEmail);
  }

  setUserPassword(event: any): void {
    this.userPassword = event.target.value;

    console.log(this.userPassword);
  }

  LoginValidation(): void {
    //  this.userDataObj = {'user-email': this.userEmail, 'user-password': this.userPassword};

    if (this.userEmail === '' || this.userPassword === '') {
      alert('Incorrect Email or Password');
    }
    else if (this.userEmail != '' && this.userPassword != '') {
      alert('Welcom, '+this.userEmail);
      // window.location.assign("/profile");
      window.location.href = "/profile";

      
    }

  }
}
