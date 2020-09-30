import { Component } from '@angular/core';

interface Image {
  url: string;
  title: string;
}
@Component({
  templateUrl: './sports.component.html'
})
export class SportsComponent {
  images: Image[] = [{
    url: '../assets/tennis/1.jpg',
    title: 'Title 1'
  }, {
    url: '../assets/tennis/2.jpg',
    title: 'Title 2'
  }, {
    url: '../assets/tennis/3.jpg',
    title: 'Title 3'
  }, {
    url: '../assets/tennis/4.jpg',
    title: 'Title 4'
  }, {
    url: '../assets/tennis/5.jpg',
    title: 'Title 5'
  }];
  grounds: Image[] = [
    { url: '../assets/grounds/1.jpg', title: 'Title 1' },
    { url: '../assets/grounds/2.jpg', title: 'Title 2' },
    { url: '../assets/grounds/3.jpg', title: 'Title 3' },
    { url: '../assets/grounds/4.jpg', title: 'Title 4' },
    { url: '../assets/grounds/5.jpg', title: 'Title 5' },
    { url: '../assets/grounds/6.jpg', title: 'Title 6' },
    { url: '../assets/grounds/7.jpg', title: 'Title 7' },
    { url: '../assets/grounds/8.jpg', title: 'Title 8' },
    { url: '../assets/grounds/9.jpg', title: 'Title 9' },
    { url: '../assets/grounds/10.jpg', title: 'Title 10' },
    { url: '../assets/grounds/11.jpg', title: 'Title 11' },
    { url: '../assets/grounds/12.jpg', title: 'Title 12' },
    { url: '../assets/grounds/13.jpg', title: 'Title 13' },
  ];
}
