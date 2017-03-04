
import { StockItem, Uom, OrderItem } from './../../../_mock/mock.model';
import { loadDataServices } from './../../../providers/load-data-service';

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Keyboard } from 'ionic-native';


@Component({
  selector: 'add-stock-item',
  templateUrl: 'order.addStockItem.html'
})
export class AddStockItem implements OnInit {
  @Input()
  get orderItem() {
    return this._orderItem;
  }
  set orderItem(val) {
    this._orderItem = val;
    this.orderItemChange.emit(this._orderItem);
  }
  @Output() orderItemChange = new EventEmitter();

  private StockItemList = new Array<StockItem>();
  private UomList = new Array<Uom>();
  private _orderItem: OrderItem = new OrderItem();
  constructor(private _loadDataServices: loadDataServices) { }

  ngOnInit() {
    this._loadDataServices.getStockItems().then((val: Array<StockItem>) => this.StockItemList = val);
    this._loadDataServices.getUoms().then((val: Array<Uom>) => this.UomList = val);
  }
}
