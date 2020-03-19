import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselPhotosComponent } from './carousel-photos/carousel-photos.component';
import { HomePageComponent } from './home-page/home-page.component';
import { TrialsComponent } from './trials/trials.component';
import { NewArrivalsComponent } from './new-arrivals/new-arrivals.component';
import { FeaturedProductsComponent } from './featured-products/featured-products.component';
import { SpecialRequestProductComponent } from './special-request-product/special-request-product.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ItemComponent } from './item/item.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from "@angular/forms";
import { CartComponent } from './cart/cart.component';
import { ProfileComponent } from './profile/profile.component';
import { PaymentComponent } from './payment/payment.component';
import { RegisterComponent } from './register/register.component';
import { PublisherComponent } from './publisher/publisher.component';
import { EditItemComponent } from './edit-item/edit-item.component';
import { AddItemComponent } from './add-item/add-item.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarouselPhotosComponent,
    HomePageComponent,
    TrialsComponent,
    NewArrivalsComponent,
    FeaturedProductsComponent,
    SpecialRequestProductComponent,
    ProductDetailComponent,
    ItemComponent,
    LoginComponent,
    CartComponent,
    ProfileComponent,
    PaymentComponent,
    RegisterComponent,
    PublisherComponent,
    EditItemComponent,
    AddItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
