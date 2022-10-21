import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { formatPrice } from 'src/app/shared/_helpers';
import { bookDetail } from '../book-detail.service';

@Component({
  selector: 'app-book-detail-footer',
  templateUrl: './book-detail-footer.component.html',
  styleUrls: ['./book-detail-footer.component.scss']
})
export class BookDetailFooterComponent implements OnInit {

  constructor(private cartService:CartService) { }

  @Input() price: number = 0;
  @Input() bookDetail: bookDetail = new bookDetail();

  displayPrice: string = '';

  ngOnInit(): void {
  }

  getPrice(price: number):string {
    return formatPrice(price);
  }

  addToCart(){
    this.cartService.addBook(this.bookDetail);
  }

}
