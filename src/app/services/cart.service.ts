import { Injectable } from '@angular/core';

export interface Product {
  id: number,
  name: string,
  price: number,
  url: string,
  description: string,
  quantity: number,
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  products: any[] = [];

  constructor() { }

  getProduct () {
    return this.products;
  }

  addToProduct (product: any) {
    const checkExistingItem = this.products.some(item => item.id === product.id)
    if (!checkExistingItem) {
      this.products.push(product);
      this.products;
      alert("Added!");
    } else {
      alert('This product already has been added to cart')
    }
  }

  removeProduct (products: Product) {
    this.products = this.products.filter(p => p.id !== products.id);
    return this.products;
  }

  submitCart () {
    return this.products = [];
  }
}
