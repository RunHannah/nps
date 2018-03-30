import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FilterPipe } from './find-park.pipe';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ParkListComponent } from './park-list/park-list.component';
import { HomepageComponent } from './homepage/homepage.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ParkListComponent,
    FilterPipe,
    HomepageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
