import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ViewController, NavParams, NavController } from 'ionic-angular';
import 'rxjs/add/operator/debounceTime';
const _UNDEFINED: string = 'undefined';

@Component({
    selector: 'modal-lookup',
    templateUrl: 'modal.lookup.html',
    styles: [
        `
        .spinner-container{
            width: 100%;
            text-align: center;
            padding:10px;
        }
        `
    ]
})

export class ModalLookup implements OnInit {

    private optionList = [];
    private optionListOri = [];



    private searchTerm: string = '';
    private searching: any = false;
    private searchControl: FormControl;

    private current_value: string = '';
    private label_title: string = 'Select';
    private column_name: string = '';


    constructor(private _viewCtrl: ViewController, private _params: NavParams) {
        this.searchControl = new FormControl();
    }
    checkUndefined(val) {
        if (typeof val !== _UNDEFINED) {
            return val;
        } else {
            return '';
        }
    }

    ngOnInit() {
        this.label_title = this.checkUndefined(this._params.get('title'));
        this.column_name = this.checkUndefined(this._params.get('columnName'));
        this.current_value = this.checkUndefined(this._params.get('currentValue'));
        this.optionList = this.checkUndefined(this._params.get('optionlists'));
        this.optionListOri = this.checkUndefined(this._params.get('optionlists'));
        this.setFilteredItems();
        this.searchControl.valueChanges.debounceTime(500).subscribe(search => {
            this.searching = false;
            this.setFilteredItems();
        });
    }
    result(val) {
        this._viewCtrl.dismiss(val);
    }
    dismiss() {
        this._viewCtrl.dismiss(this.current_value);
    }
    onSearchInput() {
        this.searching = true;
    }
    setFilteredItems() {
        this.optionList = this.filterItems(this.searchTerm);
    }
    filterItems(searchTerm) {
        return this.optionListOri.filter((item) => {
            return item[this.column_name].toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
        });
    }




















    // private _optionCode: string = '';
    // searchControl: FormControl;
    // searching: any = false;
    // searchTerm: string = '';
    // optionList = [];
    // fieldtitle = 'Select';
    // result = '';
    // private optionList2 = [];
    // constructor(private viewCtrl: ViewController, private params: NavParams) {
    //     this.optionList = params.get('ListData');
    //     this.optionList2 = params.get('ListData');
    //     this.searchControl = new FormControl();
    //     this.fieldtitle = params.get('FieldTitle');
    //     this.result = params.get('Result');
    // }

    // private test: any;


    // log(a) {
    //     // if (typeof a.checked === 'undefined') {
    //     //     this.optionList[this.optionList.indexOf(a)].checked = true;
    //     //     this.test = this.optionList[this.optionList.indexOf(a)];
    //     // } else {
    //     //     if (a.checked === true) {
    //     //         this.optionList[this.optionList.indexOf(a)].checked = false;
    //     //         this.test = this.optionList[this.optionList.indexOf(a)];
    //     //     } else {
    //     //         this.optionList[this.optionList.indexOf(a)].checked = true;
    //     //         this.test = this.optionList[this.optionList.indexOf(a)];
    //     //     }
    //     // }

    //     // for (let ab of this.optionList) {
    //     //     console.log(ab);
    //     //     if (typeof ab['checked'] !== 'undefined') {
    //     //         if (ab !== a) {
    //     //             if (ab['checked'] === true) {
    //     //                 ab['checked'] = false;
    //     //             }
    //     //         }
    //     //     }
    //     // }


    //     // if (typeof this.test !== 'undefined') {
    //     //     this.optionList[this.optionList.indexOf(this.test)].checked = false;
    //     // }
    //     // this.test = a;
    //     // this.optionList[this.optionList.indexOf(this.test)].checked = true;




    //     // this.optionList[this.optionList.indexOf(a)].checked != this.optionList[this.optionList.indexOf(a)].checked;

    //     // console.log(a);
    //     // console.log(this.optionList[this.optionList.indexOf(a)]);
    //     //  this.optionList[this.optionList.indexOf(a)].checked = false;
    //     // this.test = a;



    //     // var res;
    //     // if (typeof this.test !== 'undefined') {
    //     //     if (this.test === a) {

    //     //     } else {
    //     //         this.optionList[this.optionList.indexOf(this.test)].checked = false;
    //     //         this.test = a;
    //     //         if (typeof a.customercode !== 'undefined') { res = a.customercode; }
    //     //         if (typeof a.termcode !== 'undefined') { res = a.termcode; }
    //     //         if (typeof a.stockcode !== 'undefined') { res = a.stockcode; }
    //     //     }
    //     // } else {
    //     //     this.test = a;
    //     // }
    //     // this.viewCtrl.dismiss(this.optionList);
    // }

    // dismiss(data, i) {

    //     if (this.result === data.stockcode) {
    //         console.log(data);
    //     } else {
    //         var res = '';
    //         if (typeof data !== 'undefined') {
    //             if (typeof data.customercode !== 'undefined') { res = data.customercode; }
    //             if (typeof data.termcode !== 'undefined') { res = data.termcode; }
    //             if (typeof data.stockcode !== 'undefined') { res = data.stockcode; }
    //         } else {
    //             res = '';
    //         }

    //         for (let entry of this.optionList) {
    //             entry.checked = false;
    //         }
    //         this.optionList[i].checked = true;
    //         // this.viewCtrl.dismiss(this.optionList);
    //     }


    // }
    // cancel(data) {
    //     this.viewCtrl.dismiss();
    // }
    // ngOnInit() {
    //     this.setFilteredItems();
    //     this.searchControl.valueChanges.debounceTime(700).subscribe(search => {
    //         this.searching = false;
    //         this.setFilteredItems();
    //     });
    // }
    // onSearchInput() {
    //     this.searching = true;
    // }
    // initializeItems() {
    //     this.optionList = this.optionList2;
    // }
    // getItems(ev: any) {
    //     // Reset items back to all of the items
    //     this.initializeItems();

    //     // set val to the value of the searchbar
    //     let val = ev.target.value;

    //     // if the value is an empty string don't filter the items
    //     if (val && val.trim() != '') {
    //         this.optionList = this.optionList.filter((a) => {
    //             return (a.toLowerCase().indexOf(val.toLowerCase()) > -1);
    //         })
    //     }
    // }
    // filterItems(searchTerm) {
    //     return this.optionList2.filter((item) => {
    //         return item['stockcode'].toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    //     });
    // }

    // setFilteredItems() {
    //     this.optionList = this.filterItems(this.searchTerm);
    // }
}
