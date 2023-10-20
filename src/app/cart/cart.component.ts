import { Component, OnInit } from '@angular/core';
import { ProductItemDetailService } from '../services/product-item-detail.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  products: any[] = [];
  constructor(private productItemDetailService: ProductItemDetailService) { }

  ngOnInit () {
    this.products = this.productItemDetailService.getproduct()
    console.log('cart products', this.products)
  }

}
