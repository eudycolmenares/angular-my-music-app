import { Component, Input, OnInit } from '@angular/core';

import { NavItem } from '@app/core/models/NavBar';

@Component({
  selector: 'app-nav-item',
  templateUrl: './nav-item.component.html',
  styles: [
  ]
})
export class NavItemComponent implements OnInit {

  @Input() navItem: NavItem | null = null;

  constructor() { }

  ngOnInit(): void {
  }

}
