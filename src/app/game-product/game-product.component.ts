import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';
import { productBaseUrl } from "../base-url";
@Component({
  selector: 'app-game-product',
  templateUrl: './game-product.component.html',
  styleUrls: ['./game-product.component.css']
})
export class GameProductComponent implements OnInit {

  products: any;
  productCount : number;
  productCategoryURL : string = "games"
  baseUrl : string = productBaseUrl + "/"+ this.productCategoryURL;
  constructor(    
    private route: ActivatedRoute,
    private productService : ProductService
    
    ) {}

  ngOnInit(): void {
    let pageNumber = this.route.snapshot.params['id'];
    this.getProducts(pageNumber);
    this.getProductCount();
  }

  getProducts(pageNumber) : void {
    this.productService.allProducts(this.baseUrl)
      .subscribe(products => this.products = products.slice((pageNumber-1)*9,9*pageNumber));

  }

  getProductCount() : void{
    this.productService.getProductCount(this.baseUrl)
    .subscribe(count => this.productCount = count);
  }

  createPageRange() : number[]{
    var items: number[] = [];
 
    for(var i = 1; i <= Math.ceil(this.productCount/6); i++){
       items.push(i);
    }
    return items;
  }

}
