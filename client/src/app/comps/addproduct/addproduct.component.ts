import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  public productForm !: FormGroup;

  constructor(private formBuilder: FormBuilder,private http:HttpClient, private router:Router) { }

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      name: [''],
      category: [''],
      price: [''],
      img: ['']

    })
  }
  addproduct() {
    this.http.post<any>("http://localhost:1002/products/add",this.productForm.value)
     .subscribe(res=>{
       alert("product added successfuly");
       this.productForm.reset();
       this.router.navigate(['products']);
       
     },err=>{
      alert("Something went wrong")
     })
  }
}

