import { Component, OnInit } from '@angular/core';
import { Product } from '../models/Product'
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  name: string = 'Products';
  products: Product[] = [];

  constructor(private ProductsService: ProductsService) {

  }

  ngOnInit (): void {
    this.products = this.ProductsService.getProducts();
  }
}
