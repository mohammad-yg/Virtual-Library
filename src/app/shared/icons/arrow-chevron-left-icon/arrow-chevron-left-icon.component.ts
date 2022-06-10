import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-arrow-chevron-left-icon',
  templateUrl: './arrow-chevron-left-icon.component.html',
  styleUrls: ['./arrow-chevron-left-icon.component.scss']
})
export class ArrowChevronLeftIconComponent implements OnInit {

  constructor() { }

  @Input() size: number = 24;

  ngOnInit(): void {
  }

}
