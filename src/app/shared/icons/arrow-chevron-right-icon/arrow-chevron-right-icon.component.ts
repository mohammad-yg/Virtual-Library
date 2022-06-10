import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-arrow-chevron-right-icon',
  templateUrl: './arrow-chevron-right-icon.component.html',
  styleUrls: ['./arrow-chevron-right-icon.component.scss']
})
export class ArrowChevronRightIconComponent implements OnInit {

  constructor() { }

  @Input() size: number = 24;

  ngOnInit(): void {
  }

}
