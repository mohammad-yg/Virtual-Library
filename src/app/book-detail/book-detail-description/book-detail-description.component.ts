import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-detail-description',
  templateUrl: './book-detail-description.component.html',
  styleUrls: ['./book-detail-description.component.scss']
})
export class BookDetailDescriptionComponent implements OnInit {

  constructor() { }

  @Input() data: string = '';

  ngOnInit(): void {
  }

}
