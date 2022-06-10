import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-detail-slider[imageUrl]',
  templateUrl: './book-detail-slider.component.html',
  styleUrls: ['./book-detail-slider.component.scss']
})
export class BookDetailSliderComponent implements OnInit {

  constructor() { }

  @Input() imageUrl: string = "";
  @Input() alt: string = "";

  ngOnInit(): void {
  }

}
