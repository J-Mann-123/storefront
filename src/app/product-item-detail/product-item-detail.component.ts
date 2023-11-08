import { Component, OnInit } from '@angular/core';
import { ProductItemDetailService } from '../services/product-item-detail.service'
import { CartService } from '../services/cart.service'

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent implements OnInit {
  products: any[] = [];

  constructor(private productItemDetailService: ProductItemDetailService, private cartService: CartService) { }

  ngOnInit (): void {
    this.products = this.productItemDetailService.getProduct();
  }
  addToProduct (product: any): void {
    this.cartService.addToProduct(product);
  }
}
