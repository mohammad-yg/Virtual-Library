import { Component, OnInit } from '@angular/core';
import { Modal } from '../shared/models/Modal';
import { bookDetail, BookDetailService } from './book-detail.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit, Modal {

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
