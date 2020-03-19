import { Component, OnInit } from '@angular/core';
import { IItem, IItemType, IPublisher, IUser } from "../model/interfaces";
import { UserService } from "../services/user.service";
import { ItemService } from "../services/item.service";
import { ItemTypeService } from "../services/item-type.service";

@Component({
  selector: 'app-publisher',
  templateUrl: './publisher.component.html',
  styleUrls: ['./publisher.component.css']
})
export class PublisherComponent implements OnInit {

  constructor(
    private userService : UserService,
    private itemService : ItemService,
    private itemTypeService : ItemTypeService
  ) { }

  user : IUser = null;
  items : IItem[] = null;

  ngOnInit(): void {
    this.loadInit();
  }

  loadInit() : void{
    var userToken = localStorage.getItem("user_token");
    this.userService.getUserWithTokenID(userToken).subscribe((user : IUser)=>{
      this.user = user;
      this.itemService.getPublisherItems(user._id).subscribe((items : IItem[])=>{
      this.items = items;
      });
    });
  }

  itemToTrash(index : number) : void{
    var text = prompt("Please enter your product name: '"+ this.items[index].name +" 'for delete it");
    if(text == this.items[index].name)
      if(confirm("Are you sure for delete?")){
        this.itemService.deleteItem(this.items[index]._id).subscribe();
        location.reload();
      }
  }
  

}
