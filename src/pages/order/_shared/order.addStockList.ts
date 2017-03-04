import { Order } from './../order';
import { OrderTrans, OrderItem } from './../../../_mock/mock.model';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'stock-list',
    templateUrl: 'order.addStockList.html'

})
export class AddStockItemList implements OnInit {

    private _orderItem: OrderItem = new OrderItem(); //For Lookup
    private _orderItems: OrderItem[] = [];
    private _showDet = [];
    constructor() {

    }
    ngOnInit() {
        if (typeof this.orderItems === 'undefined') {
            this.orderItems = [];
        }
        this.mapShowHide();
    }

    @Input()
    get orderItems() {
        return this._orderItems;
    }
    set orderItems(val) {
        this._orderItems = val;
        this.orderItemsChange.emit(this._orderItems);
    }
    @Output() orderItemsChange = new EventEmitter();



    //Insert Update Delete
    showAdd() {
        this._orderItem = new OrderItem();
        this.orderItems.push(this._orderItem);
        this.mapShowHide();
        this.showHide(this.orderItems.length - 1);
    }
    getAmount(a, b) {
        var c = 0;
        if (typeof a !== 'undefined' && typeof b !== 'undefined') {
            c = a * b;
        }
        return c;
    }
    delete(idx) {
        this.orderItems.splice(idx, 1);
        this.mapShowHide();
    }
    duplicate(idx) {
        var res = new OrderItem();
        res = this.deepCopy(this.orderItems[idx]);
        this.orderItems.push(res);
        this.mapShowHide();
        this.showHide(this.orderItems.length - 1);
    }
    deepCopy(o) {
        return JSON.parse(JSON.stringify(o));
    }
    showHide(idx) {
        if (typeof this._showDet !== 'undefined') {
            for (let i = 0; i <= this._showDet.length - 1; i++) {
                if (i !== idx) { this._showDet[i] = false; }
            }
            this._showDet[idx] = !this._showDet[idx];
        }
    }
    mapShowHide() {
        this._showDet = this.orderItems.map(i => false);
    }
}

