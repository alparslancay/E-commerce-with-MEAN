import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { productBaseUrl } from "../base-url";
import { CartService } from "../services/cart.service";

import { CollectionCommonService }  from '../collection-common.service';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  item : any;
  baseUrl : string = productBaseUrl;
  constructor(
    private route: ActivatedRoute,
    private commonService: CollectionCommonService,
    private location: Location,
    private cartService : CartService
  ) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.getProduct(id);
  }

  getProduct(id : string): void {

      this.commonService.getProduct(this.baseUrl + "/items",id)
      .subscribe((item: any) => this.item = item);
  }

  public addItemToCart(item : any): void {
    this.cartService.addItem(item);
  }


}
