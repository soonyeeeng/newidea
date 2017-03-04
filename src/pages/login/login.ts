
import { Password } from './../password/password';
import { Stock } from './../stock/stock';
import { Order } from './../order/order';
import { Dashboard } from './../dashboard/dashboard';

import { AuthService } from './../../providers/auth-service';

import { Component, NgZone, OnInit } from '@angular/core';
import { NavController, AlertController, LoadingController, Loading, NavParams, Platform, Alert } from 'ionic-angular';
import { TouchID } from 'ionic-native';


@Component({
  selector: 'login',
  templateUrl: 'login.html'
})

export class Login implements OnInit {
  private touchIdAvailable: boolean = false;
private result;
private Test;

  loading: Loading;
  registerCredentials = { email: 'email', password: 'pass' };

  constructor(
    private _navCtrl: NavController,
    private auth: AuthService,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    private ngZone: NgZone,
    private _platform: Platform) {

  }

  ngOnInit() {
    this._platform.ready().then(() => {
      TouchID.isAvailable().then(
        res => this.touchIdAvailable = true,
        err => this.touchIdAvailable = false
      );
    });

  }
  public login() {
    this.showLoading()
    this.auth.login(this.registerCredentials).subscribe(allowed => {
      if (allowed) {
        setTimeout(() => {
          this.loading.dismiss();
          this._navCtrl.setRoot(Dashboard);
        });
      } else {
        this.showError("Access Denied");
      }
    },
      error => {
        this.showError(error);
      });
  }

  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    this.loading.present();
  }
  showError(text) {
    setTimeout(() => {
      this.loading.dismiss();
    });

    let alert = this.alertCtrl.create({
      title: 'Fail',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present(prompt);
  }

  startTouchID() {
    var self=this;
    TouchID.verifyFingerprint('Use Touch ID to Login')
      .then(
        function(res){
          self.result = res;
          self.Test ="testing";
          self._navCtrl.setRoot(Dashboard)},
        function(err){console.error('Error', err)}
      
      
      );
  }
}