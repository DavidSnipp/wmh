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
import { ThompsonRoomComponent } from './rooms/thompson'
import { CaterRoomComponent } from './rooms/cater'
import { ToveyRoomComponent } from './rooms/tovey'
import { KellyRoomComponent } from './rooms/kelly'

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'rooms', component: RoomsComponent, children: [
      { path: '', redirectTo: 'walker', pathMatch: 'full' },
      { path: 'walker', component: WalkerRoomComponent },
      { path: 'halsey', component: HalseyRoomComponent },
      { path: 'thompson', component: ThompsonRoomComponent },
      { path: 'cater', component: CaterRoomComponent },
      { path: 'tovey', component: ToveyRoomComponent },
      { path: 'kelly', component: KellyRoomComponent },
    ]
  },
  { path: 'wedding', component: WeddingComponent },
  { path: 'sports', component: SportsComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'bookings', component: BookingsComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
