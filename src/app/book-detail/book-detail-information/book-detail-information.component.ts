import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-detail-information',
  templateUrl: './book-detail-information.component.html',
  styleUrls: ['./book-detail-information.component.scss']
})
export class BookDetailInformationComponent implements OnInit {

  constructor() { }

  @Input() data: BookInformationData[] = [];

  ngOnInit(): void {
  }

}

export type BookInformationData = {
  title: string,
  value: string
}