import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styles: ``
})
export class LoginComponent {

email!: string;
password!:string;

  constructor() {
    console.log('LoginComponent');
  }

  onSubmit() {
    console.log('Form Submitted');
    console.log('Email:' ,this.email, 'Password:' +this.password);

    //if admingmail.com,pass123 ,valid login

    if(this.email == "admin@gmail.com" && this.password == "pass123"){
      alert("Successfully LoggedIn");
      localStorage.setItem("Logged_IN-USER","true");
      localStorage.setItem("EMAIL" ,this.email);


      //redirect
      window.location.href = "/movies";
    }
    else{
      alert("Invalid Login Credientials");
    }
  }
}
