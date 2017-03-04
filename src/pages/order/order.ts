import { DisplayOrder } from './../display-order/display-order';
import { dbService } from './../../providers/db-service';
import { ModalLookup } from './../../app/shared/modal-lookup/modal.lookup';
import { loadDataServices } from './../../providers/load-data-service';
import { Customer, Term, OrderTrans } from './../../_mock/mock.model';
import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, ModalController, AlertController, ToastController } from 'ionic-angular';
import { Keyboard } from 'ionic-native';
@Component({
  selector: 'order',
  templateUrl: './order.html'
})
export class Order implements OnInit {

  private CustomerList: Array<Customer> = new Array<Customer>();
  private TermList = [];

  constructor(
    private _loadDataServices: loadDataServices
    , private _modalCtrl: ModalController
    , private nav: NavController
    , private _dbService: dbService
    , private _params: NavParams
    , private _alertCtrl: AlertController
    , private _toastCtrl: ToastController
  ) { }

  private _orderTrans: OrderTrans = new OrderTrans();
  // private order = {};
  private orders = [];


  ngOnInit() {
    if (typeof this._orderTrans === 'undefined') {
      this._orderTrans = new OrderTrans();

    }

    this._loadDataServices.getCustomers().then((val: Array<Customer>) => this.CustomerList = val);
    this._loadDataServices.getTerms().then((val: Array<Term>) => this.TermList = val);
    this._orderTrans.orderdate = "2017-03-03";


    if (this._params.get("_item")) {
      this._orderTrans = this._params.get("_item");
    }

  }

  ChangeFormat(val) { console.log(val); }


  save() {
    this._dbService.addOrder(this._orderTrans);
    this._orderTrans = new OrderTrans();
    this.nav.setRoot(DisplayOrder);
  }
  delete() {
    var self = this;
    let alert = this._alertCtrl.create({
      title: 'Cancal Order',
      message: 'Are you sure?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Yes',
          handler: () => {
            this._dbService.deleteOrder(this._orderTrans).then(function () {
              self.presentToast();
            });
          }
        }
      ]
    });
    alert.present();


  }
  presentToast() {
    let toast = this._toastCtrl.create({
      message: 'Order cancel successfully',
      duration: 1000,
      position: 'bottom'
    });

    toast.onDidDismiss(() => {
      // this.nav.setRoot(DisplayOrder);
      this.nav.pop();
    });

    toast.present();
  }
}

// call(val) {
//     Keyboard.hideKeyboardAccessoryBar(true);
//     var self = this;
//     var objoption: any;
//     var objselected: any;

//     if (val === 'customerId') {
//       objselected = this._orderTrans[val];
//       objoption = { currentValue: objselected, optionlists: this.CustomerList, title: 'Customer', columnName: val };
//     }
//     if (val === 'termId') {
//       objselected = this._orderTrans[val];
//       objoption = { currentValue: objselected, optionlists: this.TermList, title: 'Term Code', columnName: val };
//     }

//     let _modal = this._modalCtrl.create(ModalLookup, objoption);
//     _modal.onDidDismiss(function (data) { self._orderTrans[val] = data; });
//     _modal.present();

//   }