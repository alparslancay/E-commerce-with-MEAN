import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartItems = [];
  private cartItemsPrice = 0;
  private localStorage = window.localStorage;
  constructor() {

    var cartItems = JSON.parse(this.localStorage.getItem("cartItems"));

    if(cartItems != null)
      this.cartItems = cartItems;
      
   }

  addItem(item : any) : void {
    this.cartItems.push(item);

    this.localStorage.setItem("cartItems" , JSON.stringify(this.cartItems));
  }

  getCart() : any[]{
    return this.cartItems;
  }

  getCartItemsPrice() : number{
    this.cartItemsPrice = 0;
    this.cartItems.forEach(currentItem => {
      this.cartItemsPrice = this.cartItemsPrice + parseFloat(currentItem.price);
    });
    return this.cartItemsPrice;
  }

  deleteItem(indexNum : number){
    const index = this.cartItems.indexOf(indexNum);
    if (index > -1) {
      this.cartItems.splice(index, 1);
    }
  }

}
