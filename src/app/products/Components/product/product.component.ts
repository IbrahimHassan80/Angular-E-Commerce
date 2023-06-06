import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../Models/Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  @Input() data!:Product
  @Output() item = new EventEmitter()
  addButton:Boolean = false
  amount:number = 0

  add(){
    this.item.emit({item:this.data, quantity:this.amount})
  }
}