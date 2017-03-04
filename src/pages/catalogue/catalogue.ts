import { FormControl } from '@angular/forms';
import { CatalogueDetail } from './catalogue-detail/catalogue-detail';
import { loadDataServices } from './../../providers/load-data-service';
import { StockItem } from './../../_mock/mock.model';

import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
    selector: 'catalogue',
    templateUrl: 'Catalogue.html'
})
export class Catalogue implements OnInit {
    private StockItemList: StockItem[] = [];
    private StockItemListOri: StockItem[] = [];

    private searchTerm: string = '';
    private searching: any = false;
    private searchControl: FormControl;
    private _cartItem: number = 0;
    
    constructor(private _loadDataServices: loadDataServices
        , private navCtrl: NavController) {
        this.searchControl = new FormControl();
    }
    ngOnInit() {
        this._loadDataServices.getStockItems().then((val: Array<StockItem>) =>{ 
            this.StockItemList = val,
            this.StockItemListOri = val
            });
        this.setFilteredItems();
        this.searchControl.valueChanges.debounceTime(500).subscribe(search => {
            this.searching = false;
            this.setFilteredItems();
        });
    }

    goDetail(val) {
        this.navCtrl.push(CatalogueDetail, {
            stockItems: this.StockItemListOri,
            idx: val
        });
    }

    onSearchInput() {
        this.searching = true;
    }
    setFilteredItems() {
        this.StockItemList = this.filterItems(this.searchTerm);
    }
    filterItems(searchTerm) {
        return this.StockItemListOri.filter((item) => {
            return item["stockDesc1"].toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
        });
    }
}
