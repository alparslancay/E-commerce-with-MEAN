import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent} from "./home-page/home-page.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { TrialsComponent } from "./trials/trials.component";
import { SpecialRequestProductComponent } from "./special-request-product/special-request-product.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { ItemComponent } from "./item/item.component";
import { LoginComponent } from "./login/login.component";
import { CartComponent } from "./cart/cart.component";
import { ProfileComponent } from "./profile/profile.component";
import { PaymentComponent } from "./payment/payment.component";

const routes: Routes = [
  {path : '', redirectTo : '/home-page', pathMatch: 'full'},
  {path : 'navbar', component : NavbarComponent},
  {path : 'home-page', component: HomePageComponent},
  {path : 'trial', component: TrialsComponent},
  {path : 'special-request-product', component: SpecialRequestProductComponent},
  {path : 'items/:id' , component : ProductDetailComponent},
  {path : ':category/:id', component : ItemComponent},
  {path : 'login', component : LoginComponent},
  {path : 'cart', component : CartComponent},
  {path : 'profile', component : ProfileComponent},
  {path : 'payment', component : PaymentComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
