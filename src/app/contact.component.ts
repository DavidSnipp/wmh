import { Component } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable, map, catchError, of, shareReplay } from 'rxjs'

@Component({
    templateUrl: './contact.component.html',
    standalone: false
})
export class ContactComponent {
  options = { center: { lat: 51.277002, lng: -0.610312 }, zoom: 15 }
  apiLoaded: Observable<boolean>

  constructor(httpClient: HttpClient) {
    this.apiLoaded = httpClient
      .jsonp('https://maps.googleapis.com/maps/api/js?key=AIzaSyAga8m5cIZJL-WmWlH2w1fjh5iRhwTgx04', 'callback')
      .pipe(
        map(() => true),
        catchError(() => of(false)),
        shareReplay(1),
      )
  }
}
