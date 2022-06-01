import { Component, AfterViewInit, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
  ]
})
export class NavbarComponent implements AfterViewInit {

  @Input() toggleModal = false;
  navItems = [
    {
      name: 'Premium',
      url: '',
      importance: 'high'
    },
    {
      name: 'Ayuda',
      url: '',
      importance: 'high'
    },
    {
      name: 'Descargar',
      url: '',
      importance: 'high'
    },
    {
      name: '',
      url: '',
      importance: ''
    },
    {
      name: 'Registrarse',
      url: '',
      importance: 'low'
    },
    {
      name: 'Iniciar sesión',
      url: '',
      importance: 'low'
    },
  ]

  constructor() { }

  ngAfterViewInit(): void {
  }
}
