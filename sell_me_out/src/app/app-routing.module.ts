import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnectionService } from './SERVICES/connection.service';
import { SignInComponent } from './PAGES/sign-in/sign-in.component';
import { SignUpComponent } from './PAGES/sign-up/sign-up.component';
import { ProductsComponent } from './PAGES/products/products.component';
import { OrdersComponent } from './PAGES/orders/orders.component';
import { DetailsComponent } from './PAGES/details/details.component';
import { ShopComponent } from './PAGES/shop/shop.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'products',
  },
  {
    path: 'sign-in',
    component: SignInComponent,
  },
  {
    path: 'sign-up',
    component: SignUpComponent,
  },
  {
    path: 'products',
    component: ProductsComponent,
    canActivate: [ConnectionService],
  },
  {
    path: 'products/details/:product_id',
    component: DetailsComponent,
    canActivate: [ConnectionService],
  },
  {
    path: 'orders',
    component: OrdersComponent,
    canActivate: [ConnectionService],
  },
  {
    path: 'shop',
    component: ShopComponent,
    canActivate: [ConnectionService],
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
