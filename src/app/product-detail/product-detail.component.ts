import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { productBaseUrl } from "../base-url";

import { ProductService }  from '../product.service';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product : any;
  baseUrl : string = productBaseUrl;
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private location: Location
  ) { }

  ngOnInit(): void {
    let category = this.route.snapshot.params['category'];
    let id = this.route.snapshot.params['id'];
    this.getProduct(category, id);
  }

  getProduct(category: string , id : string): void {

    this.productService.getProduct(this.baseUrl + "/" + category,id)
      .subscribe((product: any) => this.product = product);
  }

  public addItemToCart(product: any, amount: number): void {
 
  }


}
