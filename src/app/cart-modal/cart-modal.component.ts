import { Component, OnInit } from '@angular/core';
import { Modal } from '../shared/models/Modal';
import { CartService } from '../services/cart.service'
import { bookDetail } from '../book-detail/book-detail.service';
import { formatPrice } from '../shared/_helpers';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart-modal',
  templateUrl: './cart-modal.component.html',
  styleUrls: ['./cart-modal.component.scss']
})
export class CartModalComponent implements OnInit, Modal {

  show: boolean = false;
  books: Observable<bookDetail[]>;
  totalPrice: Observable<number>;
  formatedTotalPrice = "";

  constructor(private cartService: CartService) {
    this.books = cartService.rows$;
    this.totalPrice = cartService.totalPrice$;
  }

  close(): void {
    this.show = false;
  }

  open(id?: number | undefined) {
    this.show = true;
  };

  ngOnInit(): void {
    this.totalPrice.subscribe(e => {
      this.formatedTotalPrice = formatPrice(e)
    })
  }

  getPrice(book: bookDetail): string {
    return formatPrice(book.price)
  }

  removeBook(book: bookDetail) {
    this.cartService.removeBook(book.id);
  }

}
