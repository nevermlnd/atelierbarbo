import { Component, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
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

  @ViewChild('sectionsStart') sectionsStart: ElementRef;
  @ViewChild('contactStart') contactStart: ElementRef;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.fragment.subscribe((fragment: string) => {
      if (fragment == "gallerie") {
        this.gotoSection(0);
      } else if (fragment == "atelier") {
        this.gotoSection(1);
      } else if (fragment == "contact") {
        this.gotoSection(2);
      }
    });
  }

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

    if (index <= 1) {
      this.sectionsStart.nativeElement.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    } else {
      this.contactStart.nativeElement.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    }
    return false;
  }
}
