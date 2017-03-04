
export class StockItem {
    stockItemId: string;
    stockDesc1: string;
    stockDesc2: string;
    productGroup: string;
    price: number;
    pic: string;
    stockOnHand:number

}
export class Uom{
    uomId: string;
    uomDesc: string;
}
export class Customer{
    customerId: string;
    customerName: string;
}
export class Term{
    termId: string;
    termDesc: string;
    dueDays: number;
}

    

  


export class OrderTrans{
    _id:any;
    _rev:any;
    orderdate:string;
    customerId: string;
    termId: string;
    orderItems: OrderItem[];
}  
export class OrderItem{
    stockItemId: string;
    uomId: string;
    quantity: number;
    unitPrice: number;
}