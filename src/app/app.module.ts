import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GalleryGridComponent } from './gallery-grid/gallery-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    GalleryGridComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
