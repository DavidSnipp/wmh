import { Component } from '@angular/core'

@Component({
    templateUrl: './tovey.html',
    standalone: false
})
export class ToveyRoomComponent {
  pictures = [1, 2, 3, 4, 5, 6, 7, 8]
  url = (item: number) => `../../assets/rooms/tovey/${item}.jpg`
}
