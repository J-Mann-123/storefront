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
export class ProductItemComponent implements OnInit {
  @Input() product: Product;
  productList: Product[] = [];

  constructor(private productsService: ProductsService, private productItemDetailService: ProductItemDetailService, private cartService: CartService) {
    this.product = {
      id: 0,
      name: 'test',
      price: 0,
      url: '',
      description: '',
      quantity: 0,
    }
  }

  ngOnInit (): void {
    this.productsService.getProducts().subscribe((products: Product[]) => {
      this.productList = products;
    });
  }

  seeProduct (product: Product): void {
    this.productItemDetailService.seeProduct(product);
  }

  addToProduct (product: Product): void {
    this.cartService.addToProduct(product);
    alert("Added!");
  }
}
