import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Product } from '../models/Product'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  products: any[] = [];
  constructor(private cartService: CartService) { }
  ngOnInit () {
    this.products = this.cartService.getproduct()
    console.log('cart products', this.products)
  }
  removeProduct (product: Product): void {
    this.products = this.cartService.removeProduct(product)
  }

}
