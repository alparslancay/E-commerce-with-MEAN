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
import { RegisterComponent } from './register/register.component';
import { PublisherComponent } from "./publisher/publisher.component";
import { EditItemComponent } from "./edit-item/edit-item.component";
import { AddItemComponent } from "./add-item/add-item.component";

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
  {path : 'payment', component : PaymentComponent},
  {path : 'register', component : RegisterComponent},
  {path : 'publisher', component : PublisherComponent},
  {path : 'publisher/edit/item/:publisherID', component : EditItemComponent},
  {path : 'publisher/add/item', component : AddItemComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
