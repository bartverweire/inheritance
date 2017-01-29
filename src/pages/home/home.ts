import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { BasePage } from '../base/base';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage extends BasePage {

  constructor(public navCtrl: NavController) {
    super();

    console.log("HomePage - constructor");
  }

  ngOnInit() {
    console.log("HomePage - ngOnInit");
    super.ngOnInit();
  }

  ngOnDestroy() {
    console.log("HomePage - ngOnDestroy");
    super.ngOnDestroy();
  }
}
