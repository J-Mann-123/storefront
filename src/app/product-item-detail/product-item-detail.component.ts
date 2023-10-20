import { Component, OnInit } from '@angular/core';
import { ProductItemDetailService } from '../services/product-item-detail.service'

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent implements OnInit {
  products: any[] = [];

  constructor(private productItemDetailService: ProductItemDetailService) { }

  ngOnInit (): void {
    console.log(this.products, 'this.products 1')
    this.products = this.productItemDetailService.getproduct();
    console.log(this.products, 'this.products 2')
  }
}
