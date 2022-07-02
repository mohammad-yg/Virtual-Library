import { Component, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-book-detail-row[title]',
  templateUrl: './book-detail-row.component.html',
  styleUrls: ['./book-detail-row.component.scss']
})
export class BookDetailRowComponent implements OnInit {

  constructor() { }

  rowIsOpen: boolean = false;

  @Input() title: string = '';
  @Input() height: string = '200px';

  h: string = '0px';

  ngOnInit(): void {
  }

  rowOnClick(wrapper: HTMLDivElement) {
    //close
    if (this.rowIsOpen) {
      wrapper.classList.remove('open');
      this.h = '0px';
    }
    //open
    else {
      wrapper.classList.add('open');
      this.h = this.height;
    }

    this.rowIsOpen = !this.rowIsOpen;
  }

}
