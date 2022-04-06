const orders = [
    { orderId: '123', customerId: '123', deliveryDate: '01-01-2020', delivered: true, items: [
        { productId: '123', price: 55 },
        { productId: '234', price: 30 },
    ]},
    { orderId: '234', customerId: '234', deliveryDate: '01-02-2020', delivered: false, items: [
        { productId: '234', price: 30 },
    ]},
    { orderId: '345', customerId: '234', deliveryDate: '05-01-2020', delivered: true, items: [
        { productId: '567', price: 30 },
        { productId: '678', price: 80 },
    ]},
    { orderId: '456', customerId: '345', deliveryDate: '12-01-2020', delivered: true, items: [
        { productId: '789', price: 12 },
        { productId: '890', price: 90 },
    ]},
        { orderId: '578', customerId: '456', deliveryDate: '12-01-2020', delivered: true, items: [
        { productId: '901', price: 43 },
        { productId: '123', price: 55 },
    ]},
];

// 1. Get a list of orders for the customers with the ID 234 that have not been delivered 
// Here we use && operator to check both the conditions are true 
let listNotDelivered = orders.filter((order)=> order.customerId==='234' && !(order.delivered));
console.log(listNotDelivered)

// 2.Create a new property on each order with the total price of item ordered 
//using map method and reduce for the totalOrder
let itemOrdered = orders.map((order)=>({...order,totalOrder:order.items.reduce((accum,item)=>accum=accum+item.price,0)}))
console.log(itemOrdered)

// 3.Have all the orders been delivered 
//every method returns true when all the return values are true.
let orderDelivered = orders.every(elem => elem.delivered)
console.log(orderDelivered)

// 4.Has the customer with id '123' made any orders;
// some method of array returns with the boolean values true and false according to the conditions 
console.log(orders.some((order)=>order.customerId === '123')) // Returns true 
//By filter it will gave you how many order done by the customerId ===123
console.log(orders.filter((order)=>order.customerId === '123'))


// 5.How many product with the id of 123 have been sold ?
let productWith = orders.reduce((acc,order)=>acc + order.items.reduce((acc,item)=> acc+ (item.productId === '123'),0) ,0);
console.log(productWith);

