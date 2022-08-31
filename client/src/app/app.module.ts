import { FilterPipe } from './shared/filter.pipe';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopComponent } from './comps/top/top.component';
import { MainComponent } from './comps/main/main.component';
import { LoginComponent } from './comps/login/login.component';
import { RegisterComponent } from './comps/register/register.component';
import { CartComponent } from './comps/cart/cart.component';
import { CheckoutComponent } from './comps/checkout/checkout.component';
import { AddproductComponent } from './comps/addproduct/addproduct.component';
import { AdmincheckService } from './services/admincheck.service';



@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    MainComponent,
    LoginComponent,
    RegisterComponent,
    CartComponent,
    FilterPipe,
    CheckoutComponent,
    AddproductComponent,

  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
