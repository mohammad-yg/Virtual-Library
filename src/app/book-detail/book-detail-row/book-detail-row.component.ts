import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-detail-row[title]',
  templateUrl: './book-detail-row.component.html',
  styleUrls: ['./book-detail-row.component.scss']
})
export class BookDetailRowComponent implements OnInit {

  constructor() { }

  rowIsOpen: boolean = false;

  @Input() title: string = '';

  ngOnInit(): void {
  }

  rowOnClick(wrapper: HTMLDivElement) {
    //close
    if (this.rowIsOpen) {
      wrapper.classList.remove('open');
    }
    //open
    else {
      wrapper.classList.add('open');
    }

    this.rowIsOpen = !this.rowIsOpen;
  }

}
