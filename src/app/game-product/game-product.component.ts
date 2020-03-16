import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemService } from "../services/item.service";
import { ItemTypeService } from "../services/item-type.service";
@Component({
  selector: 'app-game-product',
  templateUrl: './game-product.component.html',
  styleUrls: ['./game-product.component.css']
})
export class GameProductComponent implements OnInit {

  products: any;
  productCount : number;
  itemTypeName : string;
  itemTypeID : string;
  constructor(    
    private route: ActivatedRoute,
    private itemService : ItemService,
    private itemTypeService : ItemTypeService
    
    ) {}

  ngOnInit(): void {
    this.setInitValue();
    let pageNumber = this.route.snapshot.params['id'];
    this.getProducts(pageNumber);
    this.getProductCount();
  }

  setInitValue() : void {
    this.itemTypeName = "Game";
    this.itemTypeID = "5e6b95cd53522f2f24a92a7d";
  }
  getProducts(pageNumber) : void {
     this.itemTypeService.getType(this.itemTypeName).subscribe((typeID : any) => 
       this.itemTypeID = typeID['_id']);
    var tempItemTypeID : string = this.itemTypeID;
    this.itemService.allProducts(tempItemTypeID)
      .subscribe(products => this.products = products.slice((pageNumber-1)*9,9*pageNumber));

  }

  getProductCount() : void{
    this.itemService.getCount(this.itemTypeID).subscribe(count => this.productCount = count);
  }

  createPageRange() : number[]{
    var items: number[] = [];
 
    for(var i = 1; i <= Math.ceil(this.productCount/6); i++){
       items.push(i);
    }
    return items;
  }

}
