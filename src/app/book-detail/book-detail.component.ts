import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable, of } from 'rxjs';
import { modal } from '../home/home.component';
import { BookInformationData } from './book-detail-information/book-detail-information.component';
import { bookDetail, BookDetailService } from './book-detail.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit, modal {

  data: bookDetail = new bookDetail();
  show: boolean = false;

  constructor(private bookDetailService: BookDetailService) {
  }

  ngOnInit(): void {
  }

  open(id?: number | undefined) {
    if (id) {
      var result = this.bookDetailService.getDetail(id);
      if (result) {
        this.data = result;
        this.show = true;
      }
    }
  }

  close() {
    this.show = false;
  }

}

export type BookDetailInput = {
  informationData: BookDetailInformation[],
  description: string,
}

export type BookDetailInformation = {
  title: string,
  value: string,
}