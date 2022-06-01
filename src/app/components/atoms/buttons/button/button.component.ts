import { Component, Input, OnInit } from '@angular/core';

import { ButtonProperties } from '@core/models/Buttons';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() buttonProp: ButtonProperties = {
    class: '',
    tag: 'button',
    disabled: false
  };

  constructor() { }

  ngOnInit(): void {
  }
}
