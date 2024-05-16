import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'web-component',
  templateUrl: './web-component.component.html',
  styleUrl: './web-component.component.css',
})
export class WebComponentComponent implements OnInit, OnDestroy {
  @Input('data') data: string | any;

  constructor() {}

  ngOnInit() {
    console.log('Web component initialized');
  }

  ngOnDestroy() {
    console.log('Web component destroyed');
  }
}
