import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { SportsComponent } from './sports.component';
import { WeddingComponent } from './wedding.component';
import { HistoryComponent } from './history.component';
import { ContactComponent } from './contact.component';
import { BookingsComponent } from './bookings.component';
import { GoogleMapsModule } from '@angular/google-maps'
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SportsComponent,
    WeddingComponent,
    HistoryComponent,
    ContactComponent,
    BookingsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientJsonpModule,
    NgbModule,
    GoogleMapsModule,
    // AgmCoreModule.forRoot({
    //   apiKey: 'AIzaSyAga8m5cIZJL-WmWlH2w1fjh5iRhwTgx04'
    // }),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
