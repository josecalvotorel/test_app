import { Component, Input, OnInit } from '@angular/core';
import { CustomButtonClass } from './custom-button.model';

@Component({
  selector: 'app-custom-button',
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.scss'],
})
export class CustomButtonComponent implements OnInit {
  @Input() btnText!: string;
  @Input() btnType?: string;
  @Input() btnClass?: CustomButtonClass;
  @Input() btnDisabled!: boolean;

  constructor() { }

  ngOnInit() {}

}
