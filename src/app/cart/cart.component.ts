import { Component, OnInit } from '@angular/core';
import { CartService } from "../services/cart.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private cartService : CartService) { }
  cartItems : any[] = null;
  totalPrice : number = 0;
  ngOnInit(): void {
    this.getCartItems();
    this.totalPrice = this.cartService.getCartItemsPrice();
  }

  getCartItems() : void{
    this.cartItems = this.cartService.getCart();

  }

  cartItemToTrash(indexNumber : number) : void{
    this.cartService.deleteItem(indexNumber);
  }

  ngAfterContentChecked()  {
    this.totalPrice = this.cartService.getCartItemsPrice();
}

}
