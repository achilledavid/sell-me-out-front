import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './PAGES/home/home.component';
import { ConnectionService } from './SERVICES/connection.service';
import { SignInComponent } from './PAGES/sign-in/sign-in.component';
import { SignUpComponent } from './PAGES/sign-up/sign-up.component';
import { ProductsComponent } from './PAGES/products/products.component';
import { OrdersComponent } from './PAGES/orders/orders.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
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
    path: 'home',
    component: HomeComponent,
    canActivate: [ConnectionService],
  },
  {
    path: 'products',
    component: ProductsComponent,
    canActivate: [ConnectionService],
  },
  {
    path: 'orders',
    component: OrdersComponent,
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
