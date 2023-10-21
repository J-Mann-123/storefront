import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../models/Product';
import { ProductsService } from '../services/products.service';
import { ProductItemDetailService } from '../services/product-item-detail.service'
import { CartService } from '../services/cart.service'

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input() product: Product
  productList: any[] = [];

  constructor(private productsService: ProductsService, private productItemDetailService: ProductItemDetailService, private cartService: CartService) {
    this.product = {
      id: 0,
      name: 'test',
      price: 0,
      url: '',
      description: '',
    }
  }
  ngOnInit (): void {
    // gets all of the links
    this.productList = this.productsService.getProducts();
  }
  seeProduct (product: any): void {
    this.productItemDetailService.seeProduct(product);
    alert("Added!");
  }
  addToProduct (product: any): void {
    this.cartService.addToProduct(product);
    alert("Added!");
  }
}
