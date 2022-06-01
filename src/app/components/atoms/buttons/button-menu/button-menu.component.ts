import { Component, OnInit, Input,  Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button-menu',
  templateUrl: './button-menu.component.html',
  styles: [
  ]
})
export class ButtonMenuComponent implements OnInit {

  @Output() toggleEvent = new EventEmitter<boolean>();
  @Input() toggleModal = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleCanvas() {
    this.toggleEvent.emit( !this.toggleModal );
  }
}
