import { Component, OnInit } from '@angular/core';
import { Modal } from '../shared/models/Modal';
import { CartService } from '../services/cart.service'
import { bookDetail } from '../book-detail/book-detail.service';
import { formatPrice } from '../shared/_helpers';

@Component({
  selector: 'app-cart-modal',
  templateUrl: './cart-modal.component.html',
  styleUrls: ['./cart-modal.component.scss']
})
export class CartModalComponent implements OnInit, Modal {

  show:boolean = false;
  books:bookDetail[] = [];
  constructor(private cartService:CartService) { }

  close():void{
    this.show = false;
  }

  open(id?: number | undefined){
    this.show = true;
  };

  ngOnInit(): void {
    this.books = this.cartService.rows;
  }

  getTotalPrice(): string{
    let totalPrice = 0;
    this.books.forEach(b => totalPrice += b.price);
    return formatPrice(totalPrice);
  }

  getPrice(book:bookDetail):string{
    return formatPrice(book.price)
  }

}
