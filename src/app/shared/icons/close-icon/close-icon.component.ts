import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-close-icon',
  templateUrl: './close-icon.component.html',
  styleUrls: ['./close-icon.component.scss']
})
export class CloseIconComponent implements OnInit {

  constructor() { }

  @Input() size : number = 24;

  ngOnInit(): void {
  }

}
