import { Injectable } from '@angular/core';
import { IItem } from "../model/interfaces";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartItems : IItem[];
  private cartItemsPrice = 0;
  private localStorage = window.localStorage;
  constructor() {

    var cartItems = JSON.parse(this.localStorage.getItem("cartItems"));

    if(cartItems != null)
      this.cartItems = cartItems;
      
   }

  addItem(item : IItem) : void {
    this.cartItems.push(item);

    this.localStorage.setItem("cartItems" , JSON.stringify(this.cartItems));
  }

  getCart() : IItem[]{
    return this.cartItems;
  }

  getCartItemsPrice() : number{
    this.cartItemsPrice = 0;
    this.cartItems.forEach(currentItem => {
      this.cartItemsPrice = this.cartItemsPrice + currentItem.price;
    });
    return parseFloat(this.cartItemsPrice.toFixed(2));
  }

  deleteItem(indexNum : number) : boolean{

    if(indexNum>-1){
      this.cartItems.splice(indexNum, 1);
      this.localStorage.setItem("cartItems", JSON.stringify(this.cartItems));
      return true;
    }
    
    return false;
  }

  deleteAllItems() : void{
    this.localStorage.setItem("cartItems",null);
  }

}
