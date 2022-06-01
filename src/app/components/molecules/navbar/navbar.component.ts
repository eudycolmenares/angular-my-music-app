import { Component, AfterViewInit, Input } from '@angular/core';
import { navBarItems } from '@core/constants/navBar';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
  ]
})
export class NavbarComponent implements AfterViewInit {

  @Input() toggleModal = false;
  navItems = navBarItems;

  constructor() { }

  ngAfterViewInit(): void {
  }
}
