import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http:HttpClient) { }
  basUrl = "https://fakestoreapi.com/";
  
  creatNewCart(model:any){
    return this.http.post(this.basUrl + "carts", model)
  }
}