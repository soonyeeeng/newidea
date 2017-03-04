import { Order } from './../order/order';
import { OrderTrans } from './../../_mock/mock.model';
import { dbService } from './../../providers/db-service';

import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
    selector: 'display-order',
    templateUrl: 'display-order.html'
})
export class DisplayOrder implements OnInit {
    private _orders: OrderTrans[] = [];
    private _lbShowDelete: boolean = false
    constructor(private nav: NavController, private _dbService: dbService) { }
    ngOnInit() {

    }
    ionViewWillEnter() {
        var self = this;
        this._dbService.retrieveOrders().then(function (res: OrderTrans[]) {
            if (res) {
                self._orders = res;
            }
        })
    }
    openTransaction(item) {
        this.nav.push(Order, { _item: this._orders[item] });
    }
    edit(val) {
        this._lbShowDelete = !val;
    }
}
