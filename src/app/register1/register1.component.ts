import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-register1',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './register1.component.html',
  styles: ``
})
export class Register1Component implements OnInit {
 regForm!: FormGroup;

  // name!: string;
  // email!: string;
  // password!: string;
  // onSubmit: any;
  
  constructor() {
  console.log('Registered1Component constructor called');
}
ngOnInit(): void {
 this.regForm = new FormGroup({
  name: new FormControl('',[Validators.required]),
  email: new FormControl('',[Validators.required,Validators.email]),
 password: new FormControl('',[Validators.required,Validators.minLength(8),Validators.maxLength(12)]),
 });
}

onSubmit() {
console.log('Form Submitted');
console.log("Valid",this.regForm.valid);
console.log("value", this.regForm.value);

const userObj = this.regForm.value;
  // console.log('Form Submitted');
  // console.log('Name:', this.name + ",email:", this.email + ",password:" + this.password);
// if (this.password.length< 8) {
//  alert("Password is too short.Password must atlease 8 digit");
// }
  // const userObj = {
  //   name: this.name,
  //   email: this.email,
  //   password: this.password
  // };

console.log('UserObj:', userObj);

// const users = [];
// users.push(userObj);
// localStorage.setItem("USERS",JSON.stringify(users));

if(this.regForm.valid){
alert("Successfully Registered");
window.location.href = "/login";
} else {
  alert("Please Fill required Details");
}


}
}