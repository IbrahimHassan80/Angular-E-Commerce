import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  constructor(private service:CartService){

  }
     ngOnInit(){
       this.getCartProducts()
     }

  cartProduct:any [] = []
  total:any = 0
  success:Boolean = false

  getCartProducts(){
    if ("cart" in localStorage) {
      this.cartProduct = JSON.parse(localStorage.getItem("cart")!)
  }
  this.getCartTotal()
  }

  getCartTotal(){
    this.total = 0
    for(let x in this.cartProduct) {
      this.total += this.cartProduct[x].item.price * this.cartProduct[x].quantity
    }    
  }

  plusAmount(index:number){
    this.cartProduct[index].quantity++
    this.getCartTotal()
    localStorage.setItem("cart", JSON.stringify(this.cartProduct))
  }

  minsAmount(index:number){
    this.cartProduct[index].quantity--
    this.getCartTotal()
    localStorage.setItem("cart", JSON.stringify(this.cartProduct))
  }

  deleteCart(index:number){
    this.cartProduct.splice(index , 1)
    this.getCartTotal()
    localStorage.setItem("cart", JSON.stringify(this.cartProduct))
  }

  clearCart(){
    this.cartProduct = [];
    this.getCartTotal()
    localStorage.setItem("cart", JSON.stringify(this.cartProduct))
  }

  detectChange(){
    localStorage.setItem("cart", JSON.stringify(this.cartProduct))
    this.getCartTotal()
  }

  addCart(){
    let Products = this.cartProduct.map(item => {
      return {productId:item.item.id , quantity:item.quantity}
    })

    let Model = {
      userId:5,
      date: new Date(),
      products:Products
    }
    this.service.creatNewCart(Model).subscribe(res => {
      this.success = true
    })
    console.log(Model);
  }
}