import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-game-product',
  templateUrl: './game-product.component.html',
  styleUrls: ['./game-product.component.css']
})
export class GameProductComponent implements OnInit {

  products: any;
  prop: string;
  constructor(
    private productService : ProductService
    
    ) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() : void {
    this.productService.allProducts()
      .subscribe(products => this.products = products);

  }

}
