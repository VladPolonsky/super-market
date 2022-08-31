import { AddproductComponent } from './comps/addproduct/addproduct.component';
import { CheckoutComponent } from './comps/checkout/checkout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './comps/cart/cart.component';
import { LoginComponent } from './comps/login/login.component';
import { MainComponent } from './comps/main/main.component';
import { RegisterComponent } from './comps/register/register.component';

const routes: Routes = [
  {path:'',redirectTo:'users/login',pathMatch:"full"},
  {path:'users/login',component:LoginComponent},
  {path:'users/register',component:RegisterComponent},
  {path:'products',component:MainComponent},
  {path:'cart', component:CartComponent},
  {path:'Checkout',component:CheckoutComponent},
  {path:'addproduct',component:AddproductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
