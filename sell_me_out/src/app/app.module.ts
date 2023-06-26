import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavItemComponent } from './COMPONENTS/nav/nav-item/nav-item.component';
import { NavComponent } from './COMPONENTS/nav/nav.component';
import { HomeComponent } from './PAGES/home/home.component';
import { SignInComponent } from './PAGES/sign-in/sign-in.component';
import { SignUpComponent } from './PAGES/sign-up/sign-up.component';
import { ProductsComponent } from './PAGES/products/products.component';
import { DetailsComponent } from './PAGES/products/details/details.component';
import { ListComponent } from './PAGES/products/list/list.component';
import { OrdersComponent } from './PAGES/orders/orders.component';
import { CheckoutComponent } from './PAGES/checkout/checkout.component';
import { CartMiniComponent } from './COMPONENTS/cart-mini/cart-mini.component';

@NgModule({
  declarations: [AppComponent, NavItemComponent, NavComponent, HomeComponent, SignInComponent, SignUpComponent, ProductsComponent, DetailsComponent, ListComponent, OrdersComponent, CheckoutComponent, CartMiniComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
