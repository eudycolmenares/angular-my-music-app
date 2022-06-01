import { Component, OnInit } from '@angular/core';

import { ButtonProperties } from '@core/models/Buttons';

@Component({
  selector: 'app-tp-dashboard',
  templateUrl: './tp-dashboard.component.html',
  styles: [
  ]
})
export class TpDashboardComponent implements OnInit {

  btnPrimaryProps: ButtonProperties = {
    tag: 'button',
    class: 'button button-primary',
    disabled: false,
    text: 'Obtener Spotify free',
    action: () => {}
  };

  constructor() { }

  ngOnInit(): void {
  }

}
