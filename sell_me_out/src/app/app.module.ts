import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavItemComponent } from './COMPONENTS/nav/nav-item/nav-item.component';
import { NavComponent } from './COMPONENTS/nav/nav.component';
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
import { RatingStarsComponent } from './COMPONENTS/rating-stars/rating-stars.component';
import { ProductCartComponent } from './COMPONENTS/product-cart/product-cart.component';
import { HttpClientModule } from '@angular/common/http';
import { ShopMiniComponent } from './COMPONENTS/shop-mini/shop-mini.component';
import { ShopComponent } from './PAGES/shop/shop.component';
import { ProductsListCartComponent } from './COMPONENTS/products-list-cart/products-list-cart.component';
import { ProductsListComponent } from './COMPONENTS/products-list/products-list.component';
import { NewComponent } from './PAGES/new/new.component';
import { OrderMiniComponent } from './COMPONENTS/order-mini/order-mini.component';

@NgModule({
  declarations: [
    AppComponent,
    NavItemComponent,
    NavComponent,
    SignInComponent,
    SignUpComponent,
    ProductsComponent,
    OrdersComponent,
    CheckoutComponent,
    CartMiniComponent,
    CartComponent,
    ProductMiniComponent,
    DetailsComponent,
    RatingStarsComponent,
    ProductCartComponent,
    ShopMiniComponent,
    ShopComponent,
    ProductsListCartComponent,
    ProductsListComponent,
    NewComponent,
    OrderMiniComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
