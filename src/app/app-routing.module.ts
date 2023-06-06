import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './carts/components/cart/cart.component';
import { AllProductsComponent } from './products/Components/all-products/all-products.component';
import { ProductsDetailsComponent } from './products/Components/products-details/products-details.component';

const routes: Routes = [
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
    redirectTo : "products",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
