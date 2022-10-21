import { Inject, Injectable } from "@angular/core";
import { bookDetail } from "../book-detail/book-detail.service";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  rows: bookDetail[] = [];
  totalPrice: number = 0;

  addBook(book: bookDetail): void {
    this.rows.push(book);
    this.totalPrice += book.price;
  }

  removeBook(id: number): void {
    var rowOfBook = this.rows.find(e => e.id === id);
    this.rows = this.rows.filter(e => e !== rowOfBook);
    this.totalPrice -= rowOfBook?.price ?? 0;
  }

  getRows(): bookDetail[] {
    return this.rows;
  }
}
