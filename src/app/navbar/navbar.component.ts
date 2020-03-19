import { Component, OnInit } from '@angular/core';
import { ItemTypeService } from "../services/item-type.service" ;
import { CartService } from "../services/cart.service";
import { UserService } from "../services/user.service";
import { IUser } from "../model/interfaces";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private itemTypeService : ItemTypeService,
    private cartService : CartService,
    private userService : UserService
    ) { }
  categories = [];
  cartItems = [];
  totalPrice = 0;
  user : IUser = null;
  ngOnInit(): void {
    this.itemTypeService.getAllParentType().subscribe((types : IUser[]) => this.categories = types);
    this.cartItems = this.cartService.getCart();
    this.userService.getUserWithTokenID(localStorage.getItem("user_token")).subscribe((user : IUser)=>{
      this.user = user;
    });
  }

  ngAfterContentChecked()  {
    this.totalPrice = this.cartService.getCartItemsPrice();
}


}
