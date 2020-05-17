import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { SportsComponent } from './sports.component';
import { WeddingComponent } from './wedding.component';
import { HistoryComponent } from './history.component';
import { ContactComponent } from './contact.component';
import { BookingsComponent } from './bookings.component';

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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
