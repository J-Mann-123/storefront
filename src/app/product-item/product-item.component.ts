import { Component, Input } from '@angular/core';
import { Product } from '../models/Product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input() product: Product

  constructor() {
    this.product = {
      id: 0,
      name: 'test',
      price: 0,
      url: '',
      description: '',
    }
  }

}
