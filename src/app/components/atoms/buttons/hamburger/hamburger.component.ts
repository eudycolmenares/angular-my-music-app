import { Component, Input, OnInit } from '@angular/core';

import { ButtonProperties } from '@core/models/Buttons';

@Component({
  selector: 'app-hamburger',
  templateUrl: './hamburger.component.html',
  styleUrls: ['./hamburger.component.scss']
})
export class HamburgerComponent implements OnInit {

  @Input() buttonProp: ButtonProperties = {
    class: '',
    tag: 'button',
    disabled: false
  };
  switchButton = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  toggleButton() {
    this.switchButton = !this.switchButton;
  }
}
