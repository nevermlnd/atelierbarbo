import { Component, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  menuActive = false;

  active = [
    false,
    false,
    false,
    false
  ]

  activeSections = [
    true,
    false
  ]

  /*constructor(private route: ActivatedRoute)
  {
    alert('asd');
    this.route.fragment.subscribe((fragment: string) => {
      alert(fragment);
    });
  }*/

  toggleMenu() {
    this.menuActive = !this.menuActive;
    return false;
  }

  toggleInfo(index: number) {
    for (var activeIndex = 0; activeIndex < this.active.length; activeIndex++) {
      if (index != activeIndex) {
        this.active[activeIndex] = false;
      }
    }
    this.active[index] = !this.active[index];

    return false;
  }

  activateSection(index: number) {
    for (var activeIndex = 0; activeIndex < this.activeSections.length; activeIndex++) {
      if (index != activeIndex) {
        this.activeSections[activeIndex] = false;
      }
    }
    if (index < this.activeSections.length) {
      this.activeSections[index] = true;
    }

    return false;
  }

  gotoSection(index: number) {
    this.menuActive = false;
    if (index < this.activeSections.length) {
      this.activateSection(index);
    }
  }
}
