import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart-form',
  templateUrl: './cart-form.component.html',
  styleUrls: ['./cart-form.component.css']
})
export class CartFormComponent implements OnInit {
  address: any;
  creditCard: any;
  fullName: string = '';

  nameError: string = '';
  @Output() formData: EventEmitter<any> = new EventEmitter;

  constructor(private cartService: CartService) { }

  ngOnInit (): void {
    this.sendFormData()
  }

  sendFormData () {
    const form: any = {
      fullName: this.fullName,
      address: this.address,
      creditCard: this.creditCard
    }
    this.formData.emit(form);
  }

  validateName () {
    if (this.creditCard.trim() === '') {
      this.nameError = 'Credit card is required';
    } else {
      this.nameError = '';
    }
  }
}
