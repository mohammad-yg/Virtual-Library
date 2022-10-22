import { Inject, Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { bookDetail } from "../book-detail/book-detail.service";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private rowsSubject = new BehaviorSubject<bookDetail[]>([])
  rows$: Observable<bookDetail[]>;
  totalPrice$: Observable<number>;
  totalPriceSubject = new BehaviorSubject<number>(0);

  constructor() {
    this.rows$ = this.rowsSubject.asObservable();
    this.totalPrice$ = this.totalPriceSubject.asObservable();
  }

  addBook(book: bookDetail): void {
    let rows = this.rowsSubject.getValue();
    rows.push(book);
    this.rowsSubject.next(rows);
    this.totalPriceSubject.next(this.totalPriceSubject.getValue() + book.price);
  }

  removeBook(id: number): void {
    let rows = this.rowsSubject.getValue();
    let shouldDeleteRow = rows.find(e => e.id == id);

    if (Array.isArray(shouldDeleteRow))
      shouldDeleteRow = shouldDeleteRow[0];

    if (shouldDeleteRow)
    {
      let finalyRows = [] as bookDetail[];
      let rowIsDeleted = false;
      rows.forEach(e => {
        if(e !== shouldDeleteRow || rowIsDeleted){
          finalyRows.push(e);
        }
        else{
          rowIsDeleted = true;
        }
      });
      this.rowsSubject.next(finalyRows);
      this.totalPriceSubject.next(this.totalPriceSubject.getValue() - shouldDeleteRow.price);
    }

  }
}
