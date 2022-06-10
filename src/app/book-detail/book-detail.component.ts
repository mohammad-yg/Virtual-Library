import { Component, OnInit } from '@angular/core';
import { BookInformationData } from './book-detail-information/book-detail-information.component';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {

  constructor() { }

  informationData: BookInformationData[] = [
    { title: 'کد کالا:', value: '32643' },
    { title: 'شابک:', value: '9789643113445' },
    { title:'نویسنده :' , value : 'عباس معروف'},
    { title: 'انتشارات :', value: 'ققنوس'},
    { title: 'موضوع :', value: 'داستان های فارسی قرن 14'},
    { title: 'زبان :', value: 'فارسي'},
    { title: 'جلد :', value: 'نرم'},
    { title: 'قطع :', value: 'رقعی'},
    { title: 'تعداد صفحه :', value: '350'},
    { title: 'طول :', value: '21'},
    { title: 'عرض :', value: '14'},
    { title: 'وزن :', value: '392 گرم'},
  ]

  ngOnInit(): void {
  }

}
