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

  getproduct () {
    console.log(this.products)
    return this.products;
  }
  returnProduct (product: any) {
    this.products.push(product);
    return this.products;
  }
  clearProductDetail () {
    this.products = [];
    return this.products;
  }
}
