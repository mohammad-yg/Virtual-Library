import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BookInformationData } from './book-detail-information/book-detail-information.component';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {

  @Input() data: BookDetailInput = {} as BookDetailInput;
  @Input() show$: Observable<boolean> = of(false);

  @Output() close = new EventEmitter();

  show: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
    this.show$.subscribe(res => {
      this.show = res;
    })
  }

  onCloseClick(): void {
    this.close.emit();
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