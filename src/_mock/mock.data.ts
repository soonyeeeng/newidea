import { StockItem, Uom, Customer, Term } from './mock.model';


export const STOCKITEM: StockItem[] = [
    { stockItemId: "ASA1511", stockDesc1: "Slotted  Angle - Red", stockDesc2: "1-1/2 X 1-1/2 红色万能角铁", productGroup: "ANGLE", price:100.00, pic:"img/mason_glaze_1-700x700.png", stockOnHand: 50 },
    { stockItemId: "ASA1512", stockDesc1: "Slotted  Angle - Yellow", stockDesc2: "1-1/2 X 1-1/2 黄色万能角铁", productGroup: "ANGLE", price:103.00, pic:"img/eva-sds-700x700.png", stockOnHand: 350 },
    { stockItemId: "ASA1513", stockDesc1: "Slotted  Angle - Blue", stockDesc2: "1-1/2 X 1-1/2 蓝色万能角铁", productGroup: "ANGLE", price:107.50, pic:"img/mason_glaze_1-700x700.png", stockOnHand: 1000 },
    { stockItemId: "ASA1514", stockDesc1: "Slotted  Angle - Green", stockDesc2: "1-1/2 X 1-1/2 青色万能角铁", productGroup: "ANGLE", price:100.00, pic:"img/eva-sds-700x700.png", stockOnHand: 800 },
    { stockItemId: "ASA1515", stockDesc1: "Slotted  Angle - Grey", stockDesc2: "1-1/2 X 1-1/2 灰色万能角铁", productGroup: "ANGLE", price:100.99, pic:"img/mason_glaze_1-700x700.png", stockOnHand: 500 }
];


export const UOM: Uom[] = [
    { uomId: "PCS", uomDesc: "Pieces" },
    { uomId: "ROLLS", uomDesc: "ROLLS" }
];

export const CUSTOMER: Customer[] = [
    { customerId: "Cust0001", customerName: "Customer 0001" },
    { customerId: "Cust0002", customerName: "Customer 0002" },
    { customerId: "Cust0003", customerName: "Customer 0003" },
    { customerId: "Cust0004", customerName: "Customer 0004" },
    { customerId: "Cust0005", customerName: "Customer 0005" }
]
export const TERM: Term[] = [
    { termId: "14-DAYS", termDesc: "14-DAYS", dueDays: 14 },
    { termId: "15-DAYS", termDesc: "15-DAYS", dueDays: 15 },
    { termId: "30-DAYS", termDesc: "30-DAYS", dueDays: 30 },
    { termId: "45-DAYS", termDesc: "45-DAYS", dueDays: 45 },
    { termId: "60-DAYS", termDesc: "60-DAYS", dueDays: 60 },
    { termId: "90-DAYS", termDesc: "90-DAYS", dueDays: 90 },
    { termId: "120-DAYS", termDesc: "120-DAYS", dueDays: 120 },
    { termId: "150-DAYS", termDesc: "150-DAYS", dueDays: 150 },
    { termId: "CASH", termDesc: "CASH", dueDays: 0 }
]
