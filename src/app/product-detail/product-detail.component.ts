import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { productBaseUrl } from "../base-url";

import { CollectionCommonService }  from '../collection-common.service';
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
    private commonService: CollectionCommonService,
    private location: Location
  ) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.getProduct(id);
  }

  getProduct(id : string): void {

      this.commonService.getProduct(this.baseUrl + "/items",id)
      .subscribe((product: any) => this.product = product);
  }

  public addItemToCart(product: any, amount: number): void {
 
  }


}
