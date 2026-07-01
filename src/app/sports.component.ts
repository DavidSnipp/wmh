import { Component, ChangeDetectionStrategy } from '@angular/core';

export interface Image {
  url: string;
  title: string;
}

@Component({
    templateUrl: './sports.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class SportsComponent {
  slides: Image[] = [
    { url: '../assets/grounds/1.jpg',  title: 'On the recreation ground' },
    { url: '../assets/tennis/1.jpg',   title: 'Tennis at Worplesdon' },
    { url: '../assets/grounds/2.jpg',  title: 'On the recreation ground' },
    { url: '../assets/tennis/2.jpg',   title: 'Tennis at Worplesdon' },
    { url: '../assets/grounds/3.jpg',  title: 'On the recreation ground' },
    { url: '../assets/tennis/3.jpg',   title: 'Tennis at Worplesdon' },
    { url: '../assets/grounds/4.jpg',  title: 'On the recreation ground' },
    { url: '../assets/tennis/4.jpg',   title: 'Tennis at Worplesdon' },
    { url: '../assets/grounds/5.jpg',  title: 'On the recreation ground' },
    { url: '../assets/tennis/5.jpg',   title: 'Tennis at Worplesdon' },
    { url: '../assets/grounds/6.jpg',  title: 'On the recreation ground' },
    { url: '../assets/grounds/7.jpg',  title: 'On the recreation ground' },
    { url: '../assets/grounds/8.jpg',  title: 'On the recreation ground' },
    { url: '../assets/grounds/9.jpg',  title: 'On the recreation ground' },
    { url: '../assets/grounds/10.jpg', title: 'On the recreation ground' },
    { url: '../assets/grounds/11.jpg', title: 'On the recreation ground' },
    { url: '../assets/grounds/12.jpg', title: 'On the recreation ground' },
    { url: '../assets/grounds/13.jpg', title: 'On the recreation ground' },
  ];
}
