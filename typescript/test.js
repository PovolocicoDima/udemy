"use strict";
class Payment {
    constructor() {
        this.date = new Date();
    }
    getDate() {
        return this.date;
    }
}
const p = new Payment();
const user = {
    id: 1,
    paymentDate: p.getDate.bind(p),
};
console.log(p.getDate());
console.log(user.paymentDate());
