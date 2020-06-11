"use strict";

let num = 20;

function showFirstMessage (text) {
    console.log(text);
    let num = 10;

}

showFirstMessage("Hello world!");
console.log(num);


// function calc(a, b) {
//     return (a + b);
// }

// console.log(calc(6, 3));
// console.log(calc(7, 3));
// console.log(calc(2, -1));

function ret () {
    let num = 50;
    return num;
}

const anotherNum = ret();
console.log(anotherNum);

const logger = function() {
    console.log("Hello!");
};

logger();


const calc = (a, b) => a + b;