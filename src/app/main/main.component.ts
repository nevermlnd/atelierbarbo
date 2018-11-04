import { Component, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {timer} from 'rxjs';

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

  zoom: number = 12;
  lat: number = 45.5015087;
  lng: number = -73.6241816;
  mapStyles = [
      {
          "featureType": "all",
          "elementType": "labels.text.fill",
          "stylers": [
              {
                  "saturation": 36
              },
              {
                  "color": "#333333"
              },
              {
                  "lightness": 40
              }
          ]
      },
      {
          "featureType": "all",
          "elementType": "labels.text.stroke",
          "stylers": [
              {
                  "visibility": "on"
              },
              {
                  "color": "#ffffff"
              },
              {
                  "lightness": 16
              }
          ]
      },
      {
          "featureType": "all",
          "elementType": "labels.icon",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "administrative",
          "elementType": "geometry.fill",
          "stylers": [
              {
                  "color": "#fefefe"
              },
              {
                  "lightness": 20
              }
          ]
      },
      {
          "featureType": "administrative",
          "elementType": "geometry.stroke",
          "stylers": [
              {
                  "color": "#fefefe"
              },
              {
                  "lightness": 17
              },
              {
                  "weight": 1.2
              }
          ]
      },
      {
          "featureType": "landscape",
          "elementType": "geometry",
          "stylers": [
              {
                  "color": "#f5f5f5"
              },
              {
                  "lightness": 20
              }
          ]
      },
      {
          "featureType": "poi",
          "elementType": "geometry",
          "stylers": [
              {
                  "color": "#f5f5f5"
              },
              {
                  "lightness": 21
              }
          ]
      },
      {
          "featureType": "poi.park",
          "elementType": "geometry",
          "stylers": [
              {
                  "color": "#dedede"
              },
              {
                  "lightness": 21
              }
          ]
      },
      {
          "featureType": "road.highway",
          "elementType": "geometry.fill",
          "stylers": [
              {
                  "lightness": "0"
              },
              {
                  "weight": "2.17"
              },
              {
                  "saturation": "0"
              },
              {
                  "visibility": "on"
              },
              {
                  "color": "#f9f3e4"
              }
          ]
      },
      {
          "featureType": "road.highway",
          "elementType": "geometry.stroke",
          "stylers": [
              {
                  "color": "#ffffff"
              },
              {
                  "lightness": "-21"
              },
              {
                  "weight": "0.44"
              },
              {
                  "saturation": "0"
              },
              {
                  "gamma": "1.16"
              }
          ]
      },
      {
          "featureType": "road.arterial",
          "elementType": "geometry",
          "stylers": [
              {
                  "color": "#ffffff"
              },
              {
                  "lightness": 18
              }
          ]
      },
      {
          "featureType": "road.arterial",
          "elementType": "geometry.stroke",
          "stylers": [
              {
                  "color": "#ffffff"
              }
          ]
      },
      {
          "featureType": "road.local",
          "elementType": "geometry",
          "stylers": [
              {
                  "color": "#ffffff"
              },
              {
                  "lightness": 16
              }
          ]
      },
      {
          "featureType": "transit",
          "elementType": "geometry",
          "stylers": [
              {
                  "color": "#f2f2f2"
              },
              {
                  "lightness": 19
              }
          ]
      },
      {
          "featureType": "water",
          "elementType": "geometry",
          "stylers": [
              {
                  "color": "#e9e9e9"
              },
              {
                  "lightness": 17
              }
          ]
      }
  ]

  @ViewChild('mapSection') mapSection: ElementRef;
  @ViewChild('map') map: ElementRef;
  mapWidth = "500px";
  mapHeight = "500px";

  sectionsHeight = "100vh";
  @ViewChild('atelier') atelier: ElementRef;
  @ViewChild('gallerie') gallerie: ElementRef;

  constructor(private route: ActivatedRoute) {
  }

  calcSectionsHeight() {
    let styles1 = getComputedStyle(this.atelier.nativeElement);
    let styles2 = getComputedStyle(this.gallerie.nativeElement);
    this.sectionsHeight = (this.gallerie.nativeElement.scrollHeight + 3) + "px";
    console.log(this.sectionsHeight);
  }

  onSectionsResize() {
    this.calcSectionsHeight();
  }

  onMapResize() {
    let styles = getComputedStyle(this.mapSection.nativeElement);
    this.mapWidth = styles.width;
    this.mapHeight = this.mapWidth;
  }

  ngAfterViewInit() {
    this.route.fragment.subscribe((fragment: string) => {
      if (fragment == "gallerie") {
        this.gotoSection(0);
      } else if (fragment == "atelier") {
        this.gotoSection(1);
      } else if (fragment == "contact") {
        this.gotoSection(2);
      }
    });

    let styles = getComputedStyle(this.mapSection.nativeElement);
    this.mapWidth = styles.width;
    this.mapHeight = this.mapWidth;

    this.calcSectionsHeight();

    let t = timer(100,100);
    t.subscribe(t=> {
      this.calcSectionsHeight();
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
