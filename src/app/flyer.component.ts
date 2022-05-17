import { HttpClient } from '@angular/common/http';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { startWith, switchMap } from 'rxjs/operators';

@Component({
  templateUrl: './flyer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FlyerComponent {

  html$ = this.route.params.pipe(
    switchMap(params => this.httpClient.get(`assets/flyers/${params.flyer}`, { responseType: 'text' })),
    startWith('')
  )
  constructor(private route: ActivatedRoute, private httpClient: HttpClient) { }
}
