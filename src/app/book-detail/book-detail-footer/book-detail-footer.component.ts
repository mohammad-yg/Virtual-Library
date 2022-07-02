import { formatNumber, NumberFormatStyle } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-detail-footer',
  templateUrl: './book-detail-footer.component.html',
  styleUrls: ['./book-detail-footer.component.scss']
})
export class BookDetailFooterComponent implements OnInit {

  constructor() { }

  @Input() price: number = 0;

  displayPrice: string = '';

  ngOnInit(): void {
  }

  getPrice(price: number) {
    var strPrice = price.toString();
    strPrice = strPrice.replace(',', '');
    var x = strPrice.split('.');
    var y = x[0];
    var z = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(y))
      y = y.replace(rgx, '$1' + ',' + '$2');
    return y + z;
  }

}