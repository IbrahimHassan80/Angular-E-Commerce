import { Component,OnInit } from '@angular/core';
import { Product } from '../../Models/Product';
import { ProductsService } from '../../Services/products.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent {
  products : Product[] = [];
  Categories : string[] = [];
  cartProduct:any [] = []
  loading : boolean = false;
  
  constructor(private service:ProductsService) {  }
  ngOnInit(): void {
    this.getProducts();
    this.getCategories();
  }
  
  getProducts(){
    this.loading = true;
    this.service.getAllProducts().subscribe((res:any) =>
    {
      this.products = res;
      this.loading = false;
    }, error => {
      this.loading = false;
      alert ("error")
    })
  }

  getCategories () {
    this.loading = true;
    this.service.getAllCategories().subscribe((res:any) => 
    {
      this.Categories = res;
      this.loading = false;
    })
  }

  filterCategory(event:any) {
    let value = event.target.value;
    (value == "All") ? this.getProducts() : this.getProductsByCategory(value)
  }

  getProductsByCategory(keyword:string){
      this.loading = true;
      this.service.getProductsByCategory(keyword).subscribe((res:any) => {
       this.products = res;
       this.loading = false;
      })
  }

  addToCart(event:any){
    if ("cart" in localStorage) {
      this.cartProduct = JSON.parse(localStorage.getItem("cart")!)
      let exist = this.cartProduct.find(item => item.item.id == event.item.id)
      if(exist) {
        alert("this Product is Already in your Cart")
      } else {
        this.cartProduct.push(event)
        localStorage.setItem("cart", JSON.stringify(this.cartProduct))
      }
    } else {
      this.cartProduct.push(event)
      localStorage.setItem("cart", JSON.stringify(this.cartProduct))
    }
  }
}