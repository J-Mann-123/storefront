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
  validateForm: Boolean = false;

  fullPrice: any;

  submitOn: Boolean = false;
  formData: any;

  constructor(private cartService: CartService, private router: Router) { }

  ngOnInit () {
    this.products = this.cartService.getProduct()
    if (this.products[0]) {
      this.assignPrice();
    }
    this.validateCartForm(this.validateForm)
  }

  totalPrice () {
    const productPrices = this.products.map((product) => {
      return product.quantity * product.price
    })
    const sumProductPrices = productPrices.reduce((x, y) => x + y)
    return sumProductPrices.toFixed(2)
  }
  assignPrice (): Promise<void> {
    return new Promise<void>((resolve) => {
      this.totalPrice();
      this.fullPrice = this.totalPrice()
      resolve();
    });
  }

  submitCart () {
    if (this.validateForm = true) {
      this.assignPrice().then(() => {
        this.products = this.cartService.submitCart()
        this.submitOn = !this.submitOn;
      })
    }
    else {
      return undefined
    }
  }

  removeProduct (product: Product): void {
    this.products = this.cartService.removeProduct(product)
    alert('Product has been removed');

  }
  getFormData (form: any) {
    this.formData = form
  }
  validateCartForm (validate: Boolean) {
    this.validateForm = validate
  }
}
