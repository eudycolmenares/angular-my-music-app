import { Component, OnInit } from '@angular/core';

import { ButtonProperties } from '@core/models/Buttons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  btnMenuProps: ButtonProperties;
  showModal = false;

  constructor() {
    this.btnMenuProps = {
      tag: 'button',
      class: 'button button-menu',
      disabled: false,
      action: this.handleChangeToggle,
      childI: true,
      classI: 'fa-solid fa-bars'
    }
  }

  ngOnInit(): void {
  }

  handleChangeToggle = () => {
    this.showModal = !this.showModal;
  }
}
