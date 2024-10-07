import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { NgbCarouselModule, NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap'
import { HomeComponent } from './home.component'
import { SportsComponent } from './sports.component'
import { WeddingComponent } from './wedding.component'
import { HistoryComponent } from './history.component'
import { ContactComponent } from './contact.component'
import { BookingsComponent } from './bookings.component'
import { RoomsComponent } from './rooms.component'
import { GoogleMapsModule } from '@angular/google-maps'
import { provideHttpClient, withInterceptorsFromDi, withJsonpSupport } from '@angular/common/http'
import { WalkerRoomComponent } from './rooms/walker'
import { HalseyRoomComponent } from './rooms/halsey'
import { CaterRoomComponent } from './rooms/cater'
import { ToveyRoomComponent } from './rooms/tovey'
import { KellyRoomComponent } from './rooms/kelly';
import { FlyerComponent } from './flyer.component'
import { SafeHtmlPipe } from './safehtml.pipe';
import { WhatsonComponent } from './whatson.component'
@NgModule({ declarations: [
        AppComponent,
        HomeComponent,
        SportsComponent,
        WeddingComponent,
        HistoryComponent,
        // CaretakerComponent,
        ContactComponent,
        RoomsComponent,
        WalkerRoomComponent,
        HalseyRoomComponent,
        CaterRoomComponent,
        ToveyRoomComponent,
        KellyRoomComponent,
        BookingsComponent,
        FlyerComponent,
        SafeHtmlPipe,
        WhatsonComponent
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        AppRoutingModule,
        NgbCollapseModule,
        NgbCarouselModule,
        GoogleMapsModule], providers: [SafeHtmlPipe, provideHttpClient(withInterceptorsFromDi(), withJsonpSupport())] })
export class AppModule { }
