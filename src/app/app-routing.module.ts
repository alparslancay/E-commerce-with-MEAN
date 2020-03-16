import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent} from "./home-page/home-page.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { TrialsComponent } from "./trials/trials.component";
import { SpecialRequestProductComponent } from "./special-request-product/special-request-product.component";
import { ShoppingChartComponent } from "./shopping-chart/shopping-chart.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { ItemComponent } from "./item/item.component";

const routes: Routes = [
  {path : '', redirectTo : '/home-page', pathMatch: 'full'},
  {path : 'navbar', component : NavbarComponent},
  {path : 'home-page', component: HomePageComponent},
  {path : 'trial', component: TrialsComponent},
  {path : 'special-request-product', component: SpecialRequestProductComponent},
  {path : 'shopping-chart', component : ShoppingChartComponent},
  {path : 'items/:id' , component : ProductDetailComponent},
  {path : ':category/:id', component : ItemComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
