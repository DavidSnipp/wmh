import { Component, ChangeDetectionStrategy } from '@angular/core'
import { Image } from './sports.component'

@Component({
    templateUrl: './home.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class HomeComponent {
  grounds: Image[] = [
    { url: '../assets/20210322_141153.jpg', title: 'Worplesdon Memorial Hall, viewed from the recreation ground' },
    { url: '../assets/grounds/18.jpg', title: 'Football match on the recreation ground' },
    { url: '../assets/grounds/27.jpg', title: 'Summer cricket match in front of the pavilion' },
    { url: '../assets/grounds/16.jpg', title: 'Tennis players on the all-weather courts' },
    { url: '../assets/grounds/25.jpg', title: 'Community gathering by the pavilion' },
    { url: '../assets/grounds/23.jpg', title: 'Outdoor fitness class on the grass' },
    { url: '../assets/grounds/19.jpg', title: 'Junior cricket practice by the pavilion' },
    { url: '../assets/grounds/24.jpg', title: 'Wide view of the recreation ground' },
    { url: '../assets/grounds/17.jpg', title: 'Recreation ground under a big Surrey sky' },
    { url: '../assets/grounds/14.jpg', title: 'The football pitch in winter' },
    { url: '../assets/grounds/15.jpg', title: 'The cricket square and pavilion' },
    { url: '../assets/grounds/20.jpg', title: 'Pitch covers laid out on the cricket square' },
    { url: '../assets/grounds/21.jpg', title: 'Cricket pitch covers from across the field' },
    { url: '../assets/grounds/26.jpg', title: 'Groundsman preparing the cricket pitch' },
  ]
}
