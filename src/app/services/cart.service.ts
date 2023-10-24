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

  fullName: any = '';
  address: any = '';
  creditCard: any = '';


  constructor() { }

  getProduct () {
    return this.products;
  }

  getUserInfo () {
    return this.fullName;
  }

  addToProduct (product: any) {
    this.products.push(product);
    return this.products;
  }

  removeProduct (products: Product) {
    this.products = this.products.filter(p => p.id !== products.id);
    return this.products;
  }

  submitCart () {
    this.products = [];
    return this.fullName;
  }
}
