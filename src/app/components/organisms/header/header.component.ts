import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent implements OnInit {

  showModal = false;

  constructor() { }

  ngOnInit(): void {
  }

  handleChangeToggle( e: boolean ) {
    this.showModal = !this.showModal;
  }
}
