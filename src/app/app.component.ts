import { Catalogue } from './../pages/catalogue/catalogue';
import { DisplayOrder } from './../pages/display-order/display-order';






import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { Dashboard } from './../pages/dashboard/dashboard';
import { Order } from './../pages/order/order';
import { Stock } from './../pages/stock/stock';
import { Login } from './../pages/login/login';
import { Password } from './../pages/password/password';

import { dbService } from './../providers/db-service';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = Login;

  pages: Array<{ title: string, component: any }>;

  constructor(public platform: Platform, private _dbService: dbService) {
    this.initializeApp();
    this.initDatabase();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Dashboard', component: Dashboard },
      { title: 'Display Order', component: DisplayOrder },
      { title: 'Stock', component: Stock },
      { title: 'Catalogue', component: Catalogue },
      { title: 'Password', component: Password },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
  initDatabase() {
    this._dbService.initDB();

  }




  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
