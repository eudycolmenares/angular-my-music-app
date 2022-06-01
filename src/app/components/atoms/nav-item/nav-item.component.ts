import { Component, Input, OnInit } from '@angular/core';

interface Item {
  name: string,
  url: string,
  importance: string,
}

@Component({
  selector: 'app-nav-item',
  templateUrl: './nav-item.component.html',
  styles: [
  ]
})
export class NavItemComponent implements OnInit {

  @Input() navItem: Item | null = null;

  constructor() { }

  ngOnInit(): void {
    console.log('navItem: ', this.navItem);

  }

}
