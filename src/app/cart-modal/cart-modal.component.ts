import { Component, OnInit } from '@angular/core';
import { Modal } from '../shared/models/Modal';

@Component({
  selector: 'app-cart-modal',
  templateUrl: './cart-modal.component.html',
  styleUrls: ['./cart-modal.component.scss']
})
export class CartModalComponent implements OnInit, Modal {

  show:boolean = true;
  constructor() { }

  close():void{
    this.show = false;
  }

  open(id?: number | undefined){
    this.show = true;
  };

  ngOnInit(): void {
  }

}
