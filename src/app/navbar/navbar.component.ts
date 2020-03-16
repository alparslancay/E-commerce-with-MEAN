import { Component, OnInit } from '@angular/core';
import { ItemTypeService } from "../services/item-type.service" ;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private itemTypeService : ItemTypeService) { }
  categories = [];
  ngOnInit(): void {
    this.itemTypeService.getAllParentType().subscribe((types : any[]) => this.categories = types);
  }

}
