import { Component, OnInit, Input } from '@angular/core';
import { CartService } from "../services/cart.service";
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor(private cartService : CartService) { }

  @Input() cardOwnerName : string = null;
  @Input() cardNumber : number = null;
  @Input() expirationMonth : number = null;
  @Input() expirationYear : number = null;
  @Input() cardCVV : number = null;

  cartItems = [];
  ngOnInit(): void {
    this.cartItems = this.cartService.getCart();
  }

  submitPayment() : void{


    if(this.checkInputValues()){
      let alertMessage = "";
      let cartItemsLength = this.cartItems.length;
      for (let index = 0; index < cartItemsLength; index++) {
        alertMessage = alertMessage + (index+1) + ".product: " +this.cartItems[index].name +  " Serial Number: " + (Math.random()*1000000000).toFixed(0).toString() +"\n" ;
      }
      alert(alertMessage);
      this.cartService.deleteAllItems();
      location.replace("#");
    }
    else
      alert("You entered missing informations");
      
    }


  checkInputValues() : boolean{
    return this.cardOwnerName.length > 3 && 
    this.cardNumber > Math.pow(10,15) &&
    this.checkInputExpirationValues() &&
    this.cardCVV > 99; 
  }

  checkInputExpirationValues() : boolean{
    return Math.floor(this.expirationMonth/12.99) == 0 && 
    this.expirationMonth !=0 &&
    this.expirationYear > 0 ;
  }
}
