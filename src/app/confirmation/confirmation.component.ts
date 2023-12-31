import { Component, OnInit, Input } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  @Input() fullPrice: any;
  @Input() formData: any;

  constructor(private cartService: CartService) { }

  ngOnInit () { }
}