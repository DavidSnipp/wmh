import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { WeddingComponent } from './wedding.component';
import { SportsComponent } from './sports.component';
import { HistoryComponent } from './history.component';
import { ContactComponent } from './contact.component';
import { BookingsComponent } from './bookings.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'wedding', component: WeddingComponent },
  { path: 'sports', component: SportsComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'bookings', component: BookingsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
