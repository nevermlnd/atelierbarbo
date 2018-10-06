import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery-grid',
  templateUrl: './gallery-grid.component.html',
  styleUrls: ['./gallery-grid.component.css']
})
export class GalleryGridComponent implements OnInit {

  entries: [
    {
      "test": "123"
    },
    {
      "test": "123"
    }
  ]

  constructor() { }

  ngOnInit() {
  }

  onResize(event: any) {
    alert(event.target.innerWidth);
  }

  next() {
    
  }
}
