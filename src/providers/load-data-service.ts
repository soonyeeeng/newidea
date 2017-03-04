import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { STOCKITEM, UOM, CUSTOMER, TERM } from './../_mock/mock.data';

@Injectable()
export class loadDataServices{
    constructor(private http:Http){}

    getStockItems(){
        return Promise.resolve(STOCKITEM);
    }
    getUoms(){
        return Promise.resolve(UOM);
    }
    getCustomers(){
        return Promise.resolve(CUSTOMER);
    }
    getTerms(){
        return Promise.resolve(TERM);
    }
}