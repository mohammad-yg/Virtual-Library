import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-trash-icon',
  templateUrl: './trash-icon.component.html',
  styleUrls: ['./trash-icon.component.scss']
})
export class TrashIconComponent implements OnInit {

  @Input() size: number = 24;
  constructor() { }

  ngOnInit(): void {
  }

}
