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
  }

  totalPrice () {
    const productPrices = this.products.map((product) => {
      return product.quantity * product.price
    })
    const sumProductPrices = productPrices.reduce((x, y) => x + y)
    return sumProductPrices.toFixed(2)
  }

  removeProduct (product: Product): void {
    this.products = this.cartService.removeProduct(product)
  }
}
