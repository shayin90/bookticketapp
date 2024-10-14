import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-profile-edit',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterLink],
  templateUrl: './profile-edit.component.html',
  styles: ``
})
export class ProfileEditComponent implements OnInit {

  user: any;

  editUserForm!: FormGroup;

  constructor(private readonly fb: FormBuilder, private toastr: ToastrService) {

  }

  ngOnInit(): void {

    this.editUserForm = this.fb.group({
      id: ['', [Validators.required]],
      name: ['', [Validators.required]],
      email: [, [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(16)]]
    })

    this.loadUser();
  }

  get name() {
    return this.editUserForm.controls['name'];
  }

  get email() {
    return this.editUserForm.controls['email']
  }

  get password() {
    return this.editUserForm.controls['password'];
  }

  onSubmit() {
    // alert('Form is submitted');
    const formValues = this.editUserForm.value; // {name:'', email:'', password:''}
    console.log('formValues', formValues);
    if (this.editUserForm.invalid) { //valid = true/false
      this.toastr.error('Please fill all the details');
    } else {
      this.toastr.success('Successfully Updated Profile Details');
      // const url = 'http://localhost:8000/users/1';
      // axios.put(url, formValues).then(res => {

      //   this.toastr.success('Successfully Updated Profile Details');
      // })
    }
  }


  //fetch loggedin user details from backend API ( )
  loadUser() {
   // this.user = { id: 1, name: 'Shayin', email: 'shayinbanu@gmail.com', password: 'pass1234' };//db
    this.editUserForm.patchValue(this.user);
    // let url = 'http://localhost:3000/users/1';
    // this.axios.get(url).then(res => {
    //   this.user = res.data;
    //   this.editUserForm.patchValue(this.user);
    // })
  }



}