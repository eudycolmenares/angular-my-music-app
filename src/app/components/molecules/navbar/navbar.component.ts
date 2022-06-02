import { Component, AfterViewInit, Input } from '@angular/core';

import { navBarItems } from '@core/constants/navBar';
import { ImageProperties } from '@core/models/Images';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
  ]
})
export class NavbarComponent implements AfterViewInit {

  @Input() toggleModal = false;
  navItems = navBarItems;
  logoImageProps: ImageProperties = {
    class: 'header__icono',
    source: 'assets/images/spotify-logo-light.png',
    alt: 'Logo Spotify'
  };

  constructor() { }

  ngAfterViewInit(): void {
  }
}
