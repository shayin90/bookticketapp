import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

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

  constructor(private readonly toastr: ToastrService) {
    console.log('LoginComponent');
  }

  onSubmit() {
    
    console.log('Form Submitted');

    console.log('Email:' ,this.email, 'Password:' +this.password);
     

    //if admingmail.com,pass123 ,valid login


    const usersStr = localStorage.getItem("USERS");

    let users = [];
    if (usersStr) {
      users = JSON.parse (usersStr);
    }else{
      users = [];
    }
//const val = (condition)?'a':'b';//ternart operatory
    //const users = usersStr != null ? JSON .parse(usersStr) : [];

    //using find check the input email /password matches
    //axios .post (url,data).then(res=>{ ....})
    const userExits = users.find((obj:any )=>obj.email == this.email && obj.password == this.password);
    
    if (userExits !=null) {
    // if(this.email == "admin@gmail.com" && this.password == "pass123"){
      // alert("Successfully LoggedIn");
      this.toastr.warning("Successfully Loggedin"); 
      localStorage.setItem("Logged_IN-USER","true");
      localStorage.setItem("EMAIL" ,this.email);


    }
    else{
      // alert("Invalid Login Credientials");
      this.toastr.info("Successfully Loggedin"); 
      
      //redirect
      window.location.href = "/movies";
    }
  }
}
