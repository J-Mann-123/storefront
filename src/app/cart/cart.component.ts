import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Product } from '../models/Product'
import { Router } from '@angular/router'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  products: any[] = [];

  fullName: any;
  address: any = '';
  creditCard: any = '';

  fullPrice: any;

  constructor(private cartService: CartService, private router: Router) { }

  ngOnInit () {
    this.products = this.cartService.getProduct()
    this.assignPrice();
    console.log('this.totalPrice:', this.totalPrice(), 'fP', this.fullPrice)
  }

  totalPrice () {
    const productPrices = this.products.map((product) => {
      return product.quantity * product.price
    })
    console.log(productPrices)
    const sumProductPrices = productPrices.reduce((x, y) => x + y)
    return sumProductPrices.toFixed(2)
  }
  assignPrice () {
    this.totalPrice();
    this.fullPrice = this.totalPrice()
    return console.log('this.Fullprice in asignprice', this.fullPrice)
  }

  removeProduct (product: Product): void {
    this.products = this.cartService.removeProduct(product)
  }

  submitCart () {
    this.products = this.cartService.submitCart()
    this.fullName = this.cartService.submitCart()
    // this.userInfo = this.cartService.submitCart()
    this.router.navigateByUrl('/confirmation')
  }
}
