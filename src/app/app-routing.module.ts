import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { HomeComponent } from './home.component'
import { WeddingComponent } from './wedding.component'
import { SportsComponent } from './sports.component'
import { HistoryComponent } from './history.component'
import { ContactComponent } from './contact.component'
import { BookingsComponent } from './bookings.component'
import { RoomsComponent } from './rooms.component'
import { WalkerRoomComponent } from './rooms/walker'
import { HalseyRoomComponent } from './rooms/halsey'
import { CaterRoomComponent } from './rooms/cater'
import { ToveyRoomComponent } from './rooms/tovey'
import { KellyRoomComponent } from './rooms/kelly'
import { FlyerComponent } from './flyer.component'
import { WhatsonComponent } from './whatson.component'
import { CaretakerComponent } from './caretaker.component'

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'rooms', component: RoomsComponent, children: [
      { path: '', redirectTo: 'walker', pathMatch: 'full' },
      { path: 'walker', component: WalkerRoomComponent },
      { path: 'halsey', component: HalseyRoomComponent },
      { path: 'cater', component: CaterRoomComponent },
      { path: 'tovey', component: ToveyRoomComponent },
      { path: 'kelly', component: KellyRoomComponent },
    ]
  },
  { path: 'wedding', component: WeddingComponent },
  { path: 'sports', component: SportsComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'bookings', component: BookingsComponent },
  { path: 'whatson', component: WhatsonComponent },
  { path: 'caretaker', component: CaretakerComponent },
  { path: 'flyers/:flyer', component: FlyerComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
