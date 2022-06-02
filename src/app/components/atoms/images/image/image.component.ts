import { Component, Input, OnInit } from '@angular/core';

import { ImageProperties } from '@core/models/Images';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {

  @Input() imageProp: ImageProperties = {
    class: '',
    source: '',
    alt: ''
  };

  constructor() { }

  ngOnInit(): void {
  }

}
