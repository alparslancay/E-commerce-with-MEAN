import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent} from "./home-page/home-page.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { TrialsComponent } from "./trials/trials.component";
import { GameProductComponent } from "./game-product/game-product.component";
import { ErpProductComponent } from "./erp-product/erp-product.component";
import { SpecialRequestProductComponent } from "./special-request-product/special-request-product.component";
import { ShoppingChartComponent } from "./shopping-chart/shopping-chart.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";

const routes: Routes = [
  {path : '', redirectTo : '/home-page', pathMatch: 'full'},
  {path : 'navbar', component : NavbarComponent},
  {path : 'home-page', component: HomePageComponent},
  {path : 'trial', component: TrialsComponent},
  {path : 'game-product/:id', component: GameProductComponent},
  {path : 'erp-product' , component: ErpProductComponent},
  {path : 'special-request-product', component: SpecialRequestProductComponent},
  {path : 'shopping-chart', component : ShoppingChartComponent},
  {path : ':category/:id' , component : ProductDetailComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
