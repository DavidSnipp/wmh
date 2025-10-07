import { Component } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { map, catchError, of, shareReplay } from 'rxjs'

@Component({
    templateUrl: './contact.component.html',
    standalone: false
})
export class ContactComponent {
  options = { center: { lat: 51.277002, lng: -0.610312 }, zoom: 15 }
  apiLoaded?: any
  constructor(private httpClient: HttpClient) {
    this.apiLoaded = this.httpClient.jsonp('https://maps.googleapis.com/maps/api/js?key=AIzaSyAga8m5cIZJL-WmWlH2w1fjh5iRhwTgx04', 'callback')
    .pipe(map(_ => true), catchError(err => {
      console.log(err)
      return of(false)
    }), shareReplay(1))
  }
}
