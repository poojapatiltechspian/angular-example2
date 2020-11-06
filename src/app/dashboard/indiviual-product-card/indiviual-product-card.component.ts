import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-indiviual-product-card',
  templateUrl: './indiviual-product-card.component.html',
  styleUrls: ['./indiviual-product-card.component.scss']
})
export class IndiviualProductCardComponent implements OnInit {

  @Input() product: any;
  constructor() {}

  ngOnInit(): void {
  }

}
