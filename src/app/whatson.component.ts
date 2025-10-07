import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-whatson',
    templateUrl: './whatson.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class WhatsonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
