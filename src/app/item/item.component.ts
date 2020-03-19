import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemService } from "../services/item.service";
import { ItemTypeService } from "../services/item-type.service";
import { CartService } from "../services/cart.service";
import { IItem , IItemType } from "../model/interfaces";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  products: IItem[];
  productCount : number;
  itemTypeName : string;
  itemTypeID : string;
  constructor(    
    private route: ActivatedRoute,
    private itemService : ItemService,
    private itemTypeService : ItemTypeService,
    private cartService : CartService
    
    ) {}

  ngOnInit(): void {
    let pageNumber = this.route.snapshot.params['id'];
    let itemTypeName = this.route.snapshot.params['category'];
    this.getProducts(pageNumber, itemTypeName);
    this.itemTypeName = itemTypeName;
  }
  
  getProducts(pageNumber: number, itemTypeName: string) : void {
    this.itemTypeService.getType(itemTypeName).subscribe((itemType : IItemType) => {
      this.itemTypeID = itemType._id;
      this.itemService.getCount(this.itemTypeID).subscribe(count => this.productCount = count);
      this.itemService.allProducts(itemType._id)
      .subscribe(products => this.products = products.slice((pageNumber-1)*9,9*pageNumber))});

  }

  createPageRange() : number[]{
    var items: number[] = [];
 
    for(var i = 1; i <= Math.ceil(this.productCount/6); i++){
       items.push(i);
    }
    return items;
  }

  addItemToCart(item : IItem){
    this.cartService.addItem(item);
  }

}
