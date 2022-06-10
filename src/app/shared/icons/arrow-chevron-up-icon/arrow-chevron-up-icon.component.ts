import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-arrow-chevron-up-icon',
  templateUrl: './arrow-chevron-up-icon.component.html',
  styleUrls: ['./arrow-chevron-up-icon.component.scss']
})
export class ArrowChevronUpIconComponent implements OnInit {

  constructor() { }

  @Input() size: number = 24;

  ngOnInit(): void {
  }

}
