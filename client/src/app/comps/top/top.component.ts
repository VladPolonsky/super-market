import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent implements OnInit {
  public totalItem: number = 0;
  public searchTerm: string = '';
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.getProducts()
      .subscribe(res => {
        this.totalItem = res.length;
      })
  }
 search(event:any){
   this.searchTerm = (event.target as HTMLInputElement).value;
   console.log(this.searchTerm)
   this.cartService.search.next(this.searchTerm);
 }
}
