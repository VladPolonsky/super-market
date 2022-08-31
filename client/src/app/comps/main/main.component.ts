import { AdmincheckService } from './../../services/admincheck.service';

import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public productList: any;
  public filterCategory: any;
  searchKey: string = "";
  isAdmin:Boolean
  constructor(private data: DataService, private cartService: CartService , public admincheckService:AdmincheckService) { }

  ngOnInit(): void {
    this.data.getProduct()
      .subscribe(res => {
        this.productList = res;
        this.filterCategory = res;
        this.productList.forEach((a: any) => {
          if (a.category === '1') {
            a.category = "Meat and Fish"
          }
          Object.assign(a, { quantity: 1, total: a.price });
        });
        console.log(this.productList)
      });
    this.cartService.search.subscribe((val: any) => {
      this.searchKey = val;
    })
    this.admincheckService.isAdmin.subscribe(val=>{
      this.isAdmin = val
    })
  }
  addtocart(item: any) {
    this.cartService.addToCart(item);
  }
  filter(category: any) {
    this.filterCategory = this.productList
      .filter((a: any) => {
        if (a.category == category || category == '') {
          return a;
        }
      })
  }
}
