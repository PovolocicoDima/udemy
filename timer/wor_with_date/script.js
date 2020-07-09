"use strict";

const now = new Date('2020-07-09');

// new Date.parse('2020-07-09');



console.log(now.setHours(40));
console.log(now);

let start = new Date();

for (let i = 0; i < 100000; i++) {
    let some = i ** 3;
}

let end = new Date();

alert(`Цикл отработал за ${end - start} миллисекунд`);













// console.log(now.getMonth());
// console.log(now.getDate());
// console.log(now.getHours());
// console.log(now.getDay());
// console.log(now.getHours());
// console.log(now.getUTCHours());


// console.log(now.getTimezoneOffset());
// console.log(now.getTime());