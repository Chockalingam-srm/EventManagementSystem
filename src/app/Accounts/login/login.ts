import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Service } from '../../Services/service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInput, MatButtonModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login implements OnInit{

  public formg !: FormGroup;

  constructor(private fb : FormBuilder, private service : Service, private router : Router){
  }

  ngOnInit(): void {
    this.formg= this.fb.group({
      email : ["", [ Validators.required, Validators.email]],
      password : ["",[ Validators.required]]
    })
  }

  loginCredentials(){
    this.service.Login(this.formg.value).subscribe({
      next : (response) => {
        alert("login successfully!!!");
        localStorage.setItem("token", response.message);
        localStorage.setItem("role", response.role);
        this.router.navigate(['/viewevents'])
      },
      error : (error) => {
        alert(`error occured : ${error.message}`);
      }
    })
  }
}
