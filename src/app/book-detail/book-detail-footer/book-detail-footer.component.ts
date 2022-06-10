import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-detail-footer',
  templateUrl: './book-detail-footer.component.html',
  styleUrls: ['./book-detail-footer.component.scss']
})
export class BookDetailFooterComponent implements OnInit {

  constructor() { }

  @Input() price: string = '';

  ngOnInit(): void {
  }

}
