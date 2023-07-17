import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm!:FormGroup
  users:any[] = []
constructor (private fb:FormBuilder, private servive:AuthService, private router:Router, private tostar:ToastrService) {
}

ngOnInit(): void{
  this.createForm();
  this.getUsers()
}

createForm() {
  this.loginForm = this.fb.group({
     email:['', [Validators.required, Validators.email]],
     password:['', [Validators.required]],
  })
 }
 getUsers(){
  this.servive.getAllUsers().subscribe((res:any) => {
    this.users = res
  })
}

submit(){
  let index = this.users.findIndex(item => item.email == this.loginForm.value.email && item.password == this.loginForm.value.password)
  console.log(index)
  if(index == -1) {
    this.tostar.error("The email Or Password is InValid")
  } else {
      this.tostar.success("Login Succesfully")
      this.router.navigate(['/products'])
  }
}
}