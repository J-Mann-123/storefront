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
export class ProductItemDetailService {
  products: any[] = [];

  constructor() { }

  getProduct () {
    return this.products;
  }
  seeProduct (product: any) {
    this.products = [];
    this.products.push(product);
    return this.products;
  }
  clearProductDetail () {
    this.products = [];
    return this.products;
  }
}
