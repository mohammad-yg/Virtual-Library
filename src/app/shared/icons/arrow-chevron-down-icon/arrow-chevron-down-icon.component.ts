import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-arrow-chevron-down-icon',
  templateUrl: './arrow-chevron-down-icon.component.html',
  styleUrls: ['./arrow-chevron-down-icon.component.scss']
})
export class ArrowChevronDownIconComponent implements OnInit {

  constructor() { }

  @Input() size: number = 24;

  ngOnInit(): void {
  }

}
