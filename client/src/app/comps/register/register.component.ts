import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder} from "@angular/forms"
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

 public registerForm !: FormGroup;
  constructor(private formBuilder : FormBuilder, private http : HttpClient, private router:Router) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      id:[''],
      username:[''],
      password:[''],
      city:[''],
      street:[''],
      name:[''],
      lname:['']
    })
  }
    register(){
      this.http.post<any>("http://localhost:1002/users/register",this.registerForm.value)
     .subscribe(res=>{
       alert("register done");
       this.registerForm.reset();
       this.router.navigate(['users/login']);
       
     },err=>{
      alert("Something went wrong")
     })
    }
  }


