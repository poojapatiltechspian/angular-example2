import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() labelbutton: string;
  @Input() disabledFlag: boolean;
  @Input() FormValue: any;
  @Output() clickItemButtton = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  functionClick(value: any): any {
    this.clickItemButtton.emit(value);
  }
}
