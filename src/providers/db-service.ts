import { OrderTrans } from './../_mock/mock.model';
import { Injectable } from '@angular/core';
import * as PouchDB from 'pouchdb';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class dbService {
    private _db: any;
    private _DBNAME: string = 'KMComp';
    private _success: boolean = true;
    //pouch adapter
    //idb = Index DB
    //websql 
    constructor() {

    }
    initDB() {
        //PouchDB
        //, { adapter: 'idb' }
        this._db = new PouchDB(this._DBNAME);
        window["PouchDB"] = PouchDB;
    }

    destroyDB() {
        var db = new PouchDB(this._DBNAME);
        db.destroy().then(function () { console.log('ALL YOUR BASE ARE BELONG TO US') });
    }
    addOrder(order) {
        return new Promise(resolve => {
            this._db.post(order).catch((err) => {
                this._success = false;
            });

            resolve(true);
        });
    }
    deleteOrder(order) {
        return new Promise(resolve => {
            this._db.remove(order).catch((err) => {
                this._success = false;
            });

            resolve(true);
        });
    }
    updateOrder(order) {

        return new Promise(resolve => {
            this._db.put(order)
                .catch((err) => {
                    this._success = false;
                });

            if (this._success) {
                resolve(true);
            }
        });
    }
    retrieveOrders() {
        return new Promise(resolve => {
            this._db.allDocs({ include_docs: true, descending: true }, function (err, doc) {

                let orders: OrderTrans[] = []

                if (doc.rows) {
                    for (let k in doc.rows) {
                        orders.push(doc.rows[k].doc)
                    }
                }

                resolve(orders);
            });
        });
    }


}