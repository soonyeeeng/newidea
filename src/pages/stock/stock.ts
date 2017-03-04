import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'stock',
  template: `
        <ion-header>
        <ion-navbar>
            <button ion-button menuToggle>
            <ion-icon name="menu"></ion-icon>
            </button>
            <ion-title>Stock</ion-title>
        </ion-navbar>
        </ion-header>
        <ion-content padding>
        
        
        <stock-list></stock-list>



        </ion-content>
  `
})
export class Stock {
  constructor() {}

}
