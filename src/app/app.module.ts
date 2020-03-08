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
import { GameProductComponent } from './game-product/game-product.component';
import { ErpProductComponent } from './erp-product/erp-product.component';
import { SpecialRequestProductComponent } from './special-request-product/special-request-product.component';
import { ShoppingChartComponent } from './shopping-chart/shopping-chart.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarouselPhotosComponent,
    HomePageComponent,
    TrialsComponent,
    NewArrivalsComponent,
    FeaturedProductsComponent,
    GameProductComponent,
    ErpProductComponent,
    SpecialRequestProductComponent,
    ShoppingChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
