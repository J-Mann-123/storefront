import { Injectable } from '@angular/core';

export interface Product {
  id: number,
  name: string,
  price: number,
  url: string,
  description: string,
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  products: any[] = [];

  constructor() { }

  getproduct () {
    console.log(this.products)
    return this.products;
  }

  addToProduct (product: any) {
    this.products.push(product);
    return this.products;
  }
}