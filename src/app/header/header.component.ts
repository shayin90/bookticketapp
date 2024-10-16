import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './header.component.html',
  styles: ``
})
export class HeaderComponent implements OnInit {


 isLoggedIn = false;//default false

constructor() {

  console.log("HeaderComponent called"); 
}
ngOnInit(): void {
 //fetch items localstorage whether user is loggein
 this.isLoggedIn =  localStorage.getItem("Logged_IN-USER") == 'true';
  }
  logout(){
  // localStorage.removeItem("LOGGED_IN_USER");
  localStorage.clear();
  alert("Successfully LoggedOut !!!");
window.location.href = "/login";
 }
}
