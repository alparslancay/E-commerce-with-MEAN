import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CollectionCommonService } from "../collection-common.service";
import { IItem,IUser } from "../model/interfaces";
import { productBaseUrl } from "../base-url";
import { UserService } from "../services/user.service";
@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent implements OnInit {

  constructor(
    private route : ActivatedRoute,
    private commonService : CollectionCommonService,
    private userService : UserService
  ) { }

  baseUrl : string = productBaseUrl + "/items";
  item : IItem = null;


  @Input() name : string;
  @Input() price : string;
  @Input() image : string;
  @Input() description : string;

  ngOnInit(): void {
    let id = this.route.snapshot.params['publisherID'];
    this.authorize(id, localStorage.getItem("user_token"));

    
  }

  authorize(itemID : string, userToken : string) : void {
    this.userService.getUserWithTokenID(userToken).subscribe((user : IUser)=>{
      this.commonService.getProduct(this.baseUrl, itemID).subscribe((item: any) => {
        let currentItem : IItem = item;
        if(user._id == currentItem.publisher)
          this.item = currentItem;

          this.loadItemPropertiesToInputs();
      }
      );
    });
    
  }

  loadItemPropertiesToInputs() : void{
    this.name = this.item.name;
    this.price = this.item.price.toString();
    this.image = this.item.image;
    this.description = this.item.description;
  }

  saveChanges() : void{
    this.item.name = this.name;
    this.item.price = parseFloat(this.price);
    this.item.image = this.image;
    this.item.description = this.description;
    this.commonService.updateProduct(this.baseUrl, this.item).subscribe();
  }

}
