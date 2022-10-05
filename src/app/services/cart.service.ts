import { Inject, Injectable } from "@angular/core";
import { Book } from "../home/home.component";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  rows: Row[] = [];

  addBook(book: Book): void {
    var rowOfBook = this.rows.find(e => e.book === book);

    if (rowOfBook)
      rowOfBook.number += 1;

    else {
      this.rows.push({
        book: book,
        number: 1
      })
    }
  }

  removeBook(book: Book, number: number = 1): void {
    var rowOfBook = this.rows.find(e => e.book === book);

    if (rowOfBook) {
      rowOfBook.number - number;

      if (rowOfBook.number > 1)
        this.rows = this.rows.filter(e => e.book !== book);
    }
  }

  getRows(): Row[] {
    return this.rows;
  }
}

export type Row = {
  book: Book,
  number: number;
};
