import { Order } from './../order/order';

import { Login } from './../login/login';
import { AuthService } from './../../providers/auth-service';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'dashboard',
  templateUrl: 'dashboard.html'
})
export class Dashboard {
  username = '';
  email = '';
  constructor(private nav: NavController, private auth: AuthService) {
    let info = this.auth.getUserInfo();
    this.username = info.name;
    this.email = info.email;
  }

  addOrder() {
    this.nav.push(Order);
  }

  public logout() {
    this.auth.logout().subscribe(succ => {
      this.nav.setRoot(Login)
    });
  }

}
