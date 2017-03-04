import { StockItem } from './../../../_mock/mock.model';
import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
const _UNDEFINED: string = 'undefined';

@Component({
    selector: 'catalogue-detail',
    templateUrl: 'catalogue-detail.html'
})
export class CatalogueDetail implements OnInit {
    private _stockItems: StockItem[] = [];
    private _iniIdx: number;
    private _mySlideOptions = {
        pager: true,
        initialSlide: 0
    };

    private _cartItem: number = 0;

    constructor(
        private _NavParams: NavParams,
        private alertCtrl: AlertController
    ) {

    }
    ngOnInit() {
        this._stockItems = this.checkUndefined(this._NavParams.get('stockItems'));
        this._iniIdx = this.checkUndefined(this._NavParams.get('idx'));
        this._mySlideOptions.initialSlide = this._iniIdx;
        
    }

    checkUndefined(val) {
        if (typeof val !== _UNDEFINED) {
            return val;
        } else {
            return '';
        }
    }
    addOrder(val) {
        let alert = this.alertCtrl.create({
            title: 'Coming soon!!!',
            subTitle: 'Under maintenance, stay tuned!',
            buttons: ['OK']
        });
        alert.present();

    }

}
