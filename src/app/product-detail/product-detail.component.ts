import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { ProductService }  from '../product.service';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product : any;
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private location: Location
  ) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.getProduct(id);
  }

  getProduct(id : string): void {

    this.productService.getProduct(id)
      .subscribe((product: any) => this.product = product);
  }

  public addItemToCart(product: any, amount: number): void {
 
  }


}
