import { Component, OnInit } from '@angular/core';
import { ItemService } from "../services/item.service";
import { CartService } from "../services/cart.service";

@Component({
  selector: 'app-new-arrivals',
  templateUrl: './new-arrivals.component.html',
  styleUrls: ['./new-arrivals.component.css']
})
export class NewArrivalsComponent implements OnInit {
  constructor(
    private itemService : ItemService, 
    private cartService : CartService) 
    { }

  newItems = null;
  private itemLimit = 6;
  private sortValue = -1;
  ngOnInit(): void {
    this.getNewItems();
  }

  getNewItems() : void{
    this.itemService.getNewItems(this.sortValue,this.itemLimit).subscribe(items => this.newItems = items);
  }

  addItemToCart(item : any){
    this.cartService.addItem(item);
  }
}
