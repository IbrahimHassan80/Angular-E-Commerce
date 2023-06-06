import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }
  basUrl = "https://fakestoreapi.com/";

  getAllProducts(){
    return this.http.get(this.basUrl + "products");
  }

  getAllCategories() {
    return this.http.get(this.basUrl + "products/categories");
  }

  getProductsByCategory(keyword:string){
    return this.http.get(this.basUrl + "products/category/" + keyword);
  }


  getProductById(id:any) {
    return this.http.get(this.basUrl + "products/" + id)
  }

}