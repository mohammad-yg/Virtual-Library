import { Component, OnInit } from '@angular/core';
import { Modal } from '../shared/models/Modal';
import { CartService } from '../services/cart.service'
import { bookDetail } from '../book-detail/book-detail.service';

@Component({
  selector: 'app-cart-modal',
  templateUrl: './cart-modal.component.html',
  styleUrls: ['./cart-modal.component.scss']
})
export class CartModalComponent implements OnInit, Modal {

  show:boolean = false;
  books:bookDetail[] = [];
  totalPrice:number = 0;
  constructor(private cartService:CartService) { }

  close():void{
    this.show = false;
  }

  open(id?: number | undefined){
    this.show = true;
  };

  ngOnInit(): void {
    this.books = this.cartService.rows;
    this.totalPrice = this.cartService.totalPrice;
  }

}
