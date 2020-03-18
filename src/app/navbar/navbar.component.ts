import { Component, OnInit } from '@angular/core';
import { ItemTypeService } from "../services/item-type.service" ;
import { CartService } from "../services/cart.service";
import { UserService } from "../services/user.service";

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
  user : any = null;
  ngOnInit(): void {
    this.itemTypeService.getAllParentType().subscribe((types : any[]) => this.categories = types);
    this.cartItems = this.cartService.getCart();
    this.userService.getUserWithTokenID(localStorage.getItem("user_token")).subscribe((user : any)=>{
      this.user = user;
    });
  }

  ngAfterContentChecked()  {
    this.totalPrice = this.cartService.getCartItemsPrice();
}


}
