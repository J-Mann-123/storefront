import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart-form',
  templateUrl: './cart-form.component.html',
  styleUrls: ['./cart-form.component.css']
})
export class CartFormComponent implements OnInit {
  address: any;
  creditCard: string = '';
  fullName: string = '';
  validate: Boolean = false;
  creditCardValidate: Boolean = false;
  fullNameValidate: Boolean = false;

  cardError: string = '';
  fullNameError: string = '';

  @Output() formData: EventEmitter<any> = new EventEmitter;
  @Output() validateForm: EventEmitter<any> = new EventEmitter;

  constructor(private cartService: CartService) { }

  ngOnInit (): void {
    this.sendFormData()
    this.validateCreditCard()
    // this.validateFullForm()
  }

  // this function validates the fullName and the form itself
  // it then will emit data to the parent component
  // it will run each time the title is updated and doesn't need to 
  // run each time the creditcard it updated since the credit card only needs
  // to be validated and not passed to the parent
  sendFormData () {
    this.validateFullName();
    const form: any = {
      fullName: this.fullName,
      address: this.address,
      creditCard: this.creditCard
    };
    this.formData.emit(form);
    this.validateFullForm();
    return this.validateCreditCard();
  }

  validateFullForm () {
    this.validate = this.creditCardValidate && this.fullNameValidate;
    this.validateForm.emit(this.validate);
  }

  validateFullName () {
    if (this.fullName.trim() === '') {
      this.fullNameValidate = false;
      this.fullNameError = 'Full Name is required';
    } else {
      this.fullNameValidate = true;
      this.fullNameError = '';
    }
  }

  validateCreditCard () {
    const creditCardLength = this.creditCard.trim().length;

    if (creditCardLength === 0) {
      this.creditCardValidate = false;
      this.cardError = 'Credit card is required';
    } else if (creditCardLength < 12) {
      this.creditCardValidate = false;
      this.cardError = 'Credit card must be at least 12 numbers long';
    } else if (creditCardLength > 12) {
      this.creditCardValidate = true;
      this.cardError = '';
    } else {
      this.creditCardValidate = false;
    }

    this.validateFullForm();
  }

}
