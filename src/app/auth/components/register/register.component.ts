import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
UserForm!:FormGroup
users:any[] = []
constructor (private fb:FormBuilder, private servive:AuthService, private router:Router, private tostar:ToastrService) {
}

ngOnInit(): void{
  this.createForm();
  this.getUsers()
}

createForm() {
  this.UserForm = this.fb.group({
     username:['', [Validators.required]],
     email:['', [Validators.required, Validators.email]],
     password:['', [Validators.required]],
     confirmpassword:['', [Validators.required]],
  })
}

  getUsers(){
    this.servive.getAllUsers().subscribe((res:any) => {
      this.users = res
    })
  }

submit(){
    const model = {
      username:this.UserForm.value.username,
      email:this.UserForm.value.email,
      password:this.UserForm.value.password,
    }
    let index = this.users.findIndex(item => item.email == this.UserForm.value.email)
    console.log(index)
    if(index !== -1) {
      this.tostar.error("This email is already exists!")
    } else {
      this.servive.createUser(model).subscribe(res => {
        this.tostar.success("email Created Succesfully")
        this.router.navigate(['/products'])
      })
    }
  }
}