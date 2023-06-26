import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavItemComponent } from './COMPONENTS/nav/nav-item/nav-item.component';
import { NavComponent } from './COMPONENTS/nav/nav.component';
import { HomeComponent } from './PAGES/home/home.component';
import { SignInComponent } from './PAGES/sign-in/sign-in.component';

@NgModule({
  declarations: [AppComponent, NavItemComponent, NavComponent, HomeComponent, SignInComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
