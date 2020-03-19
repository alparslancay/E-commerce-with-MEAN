import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CollectionCommonService } from '../collection-common.service';
import { UserService } from '../services/user.service';
import { IItem, IUser, IItemType, IPublisher } from '../model/interfaces';
import { productBaseUrl } from '../base-url';
import { ItemTypeService } from "../services/item-type.service";

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  constructor(
    private route : ActivatedRoute,
    private commonService : CollectionCommonService,
    private userService : UserService,
    private itemTypeService : ItemTypeService
  ) { }

  baseUrl : string = productBaseUrl + "/items";

  user : IUser = null;
  itemTypes : IItemType[] = null; 
  selectedItemIndex : number = 0;
  @Input() name : string = "AnonProd";
  @Input() price : string = "33";
  @Input() image : string = "none";
  @Input() description : string = "Nonething";
  @Input() itemTypeName : string = "Game";


  searchedItemTypes : any;

  ngOnInit(): void {
    this.authorize(localStorage.getItem("user_token"));
    this.commonService.allProducts(productBaseUrl + "/item-types").subscribe((itemTypes : any[])=>{
      this.itemTypes = itemTypes;
    });

    
  }

  authorize(userToken : string) : void {
    this.userService.getUserWithTokenID(userToken).subscribe((user : IUser)=>{
      this.user = user;
    });
    
  }

  saveChanges() : void{

    var currentPublisher : IPublisher = {
      _id : this.user._id,
      name : this.user.name
    }

    var addingItem : IItem = {
      item_type : this.itemTypes[this.selectedItemIndex],
      description : this.description,
      name : this.name,
      price : parseFloat(this.price),
      publisher : currentPublisher,
      image : this.image

    }
    
    this.commonService.addProduct(this.baseUrl, addingItem).subscribe();

  }

  search(value : string)
  {
    this.searchedItemTypes = this.itemTypes.filter(
      (val)=> val.name.toLocaleLowerCase().includes(value.toLocaleLowerCase(),0))

  }

  selectItemType(index : number) : void{
    this.itemTypeName = this.itemTypes[index].name;
    this.selectedItemIndex = index;

    this.search(this.itemTypeName);
  }

}
