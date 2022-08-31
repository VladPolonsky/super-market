import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import{map} from 'rxjs/operators'
import Product from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http : HttpClient) { }

  productArr:Product[]
  getProduct(){
    return this.http.get<any>("http://localhost:1002/products")
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  async getUsers(){

  }
}
