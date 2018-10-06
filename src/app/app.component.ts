import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  active = [
    false,
    false,
    false,
    false
  ]

  toggleInfo(index: number) {
    for (var activeIndex = 0; activeIndex < this.active.length; activeIndex++) {
      if(index != activeIndex) {
        this.active[activeIndex] = false;
      }
    }
    this.active[index] = !this.active[index];

    return false;
  }
}
