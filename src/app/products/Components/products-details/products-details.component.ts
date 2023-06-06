import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../Services/products.service';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.css']
})
export class ProductsDetailsComponent {
  ngOnInit(): void{
    this.getProduct()
  }
  loading:boolean = false;
  id:any
  data:any = {}
  
  constructor(private route: ActivatedRoute, private service: ProductsService){
    this.id = this.route.snapshot.paramMap.get("id")
    console.log(this.id)
  }

  getProduct() {
    this.loading = true;
    this.service.getProductById(this.id).subscribe(res => {
      this.loading = false
      this.data = res
    }, error => {
      this.loading = false
      alert(error)
    })
  }
}