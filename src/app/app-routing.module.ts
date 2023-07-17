import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/components/login/login.component';
import { RegisterComponent } from './auth/components/register/register.component';
import { CartComponent } from './carts/components/cart/cart.component';
import { AllProductsComponent } from './products/Components/all-products/all-products.component';
import { ProductsDetailsComponent } from './products/Components/products-details/products-details.component';

const routes: Routes = [
  {
    path : 'register',
    component : RegisterComponent,
  },
  {
    path : 'login',
    component : LoginComponent,
  },
  {
    path : 'products',
    component : AllProductsComponent,
  },
  {
    path : 'details/:id',
    component : ProductsDetailsComponent,
  },
  {
    path : 'cart',
    component : CartComponent,
  },
  {
    path : '**',
    redirectTo : "register",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
