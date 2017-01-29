import { OnInit, OnDestroy } from '@angular/core';

export class BasePage implements OnInit, OnDestroy {

  constructor() {
    console.log("BasePage - constructor");
  }

  ngOnInit() {
    console.log("BasePage - ngOnInit");
  }

  ngOnDestroy() {
    console.log("BasePage - ngOnDestroy");
  }
}
