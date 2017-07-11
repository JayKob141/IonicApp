import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public Groceries: any;

  constructor(public navCtrl: NavController) {
    this.Groceries = [
      { "img" : "something.png" },
      { "img" : "something.png" },
      { "img" : "something.png" },
      { "img" : "something.png" }
    ]
  }

}
