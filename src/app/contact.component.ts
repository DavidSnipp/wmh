import { Component } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { catchError, map } from 'rxjs/operators'
import { of } from 'rxjs'

@Component({
  templateUrl: './contact.component.html'
})
export class ContactComponent {
  options = { center: { lat: 51.277002, lng: -0.610312 }, zoom: 15 }
  apiLoaded = this.httpClient.jsonp('https://maps.googleapis.com/maps/api/js?key=AIzaSyAga8m5cIZJL-WmWlH2w1fjh5iRhwTgx04', 'callback')
    .pipe(map(_ => true), catchError(err => {
      console.log(err)
      return of(false)
    }))
  constructor(private httpClient: HttpClient) { }
}
