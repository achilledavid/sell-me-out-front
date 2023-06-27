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
import { OrdersComponent } from './PAGES/orders/orders.component';
import { CheckoutComponent } from './PAGES/checkout/checkout.component';
import { CartMiniComponent } from './COMPONENTS/cart-mini/cart-mini.component';
import { FormsModule } from '@angular/forms';
import { CartComponent } from './COMPONENTS/cart/cart.component';
import { ProductMiniComponent } from './COMPONENTS/product-mini/product-mini.component';
import { DetailsComponent } from './PAGES/details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    NavItemComponent,
    NavComponent,
    HomeComponent,
    SignInComponent,
    SignUpComponent,
    ProductsComponent,
    OrdersComponent,
    CheckoutComponent,
    CartMiniComponent,
    CartComponent,
    ProductMiniComponent,
    DetailsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
