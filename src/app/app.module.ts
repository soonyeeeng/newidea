import { CatalogueDetail } from './../pages/catalogue/catalogue-detail/catalogue-detail';
import { Catalogue } from './../pages/catalogue/catalogue';


import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { MyApp } from './app.component';
import { Dashboard } from './../pages/dashboard/dashboard';
import { Login } from './../pages/login/login';
import { Order } from './../pages/order/order';
import { Stock } from './../pages/stock/stock';
import { Password } from './../pages/password/password';
import { DisplayOrder } from './../pages/display-order/display-order';

import { InputField } from './shared/field-input/input.field';
import { FieldLookup } from './shared/field-lookup/field.lookup';
import { ModalLookup } from './shared/modal-lookup/modal.lookup';

import { dbService } from './../providers/db-service';
import { AuthService } from './../providers/auth-service';
import { loadDataServices } from './../providers/load-data-service';

import { AddStockItem } from './../pages/order/_shared/order.addStockItem';
import { AddStockItemList } from './../pages/order/_shared/order.addStockList';


@NgModule({
  declarations: [
    MyApp,
    Dashboard,
    Login,
    Order,
    Stock,
    Password,
    DisplayOrder,
    InputField,
    ModalLookup,
    FieldLookup,
    AddStockItem,
    AddStockItemList,
    Catalogue,
    CatalogueDetail
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Dashboard,
    Login,
    Order,
    Stock,
    Password,
    DisplayOrder,
    InputField,
    ModalLookup,
    FieldLookup,
    AddStockItem,
    AddStockItemList,
    Catalogue,
    CatalogueDetail
  ],
  providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler }, AuthService, dbService, loadDataServices]
})
export class AppModule { }
