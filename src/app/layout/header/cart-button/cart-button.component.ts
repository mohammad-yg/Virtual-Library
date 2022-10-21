import { Component, OnInit, ViewChild } from '@angular/core';
import { Modal } from 'src/app/shared/models/Modal';
@Component({
  selector: 'app-cart-button',
  templateUrl: './cart-button.component.html',
  styleUrls: ['./cart-button.component.scss']
})
export class CartButtonComponent implements OnInit {

  constructor() { }

  @ViewChild('cartModal', { static: true }) cartModal: Modal = { close: () => { }, open: () => { } };

  ngOnInit(): void {
  }

  openCartModal(): void{
    this.cartModal.open();
  }
}
