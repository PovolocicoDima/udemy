'use strict';

console.log(1);

setTimeout(() => {
    console.log('timeout_2000');
}, 4000);

setTimeout(() => {
    console.log('timeout_4000');
}, 4000);

console.log(2);

/*
    Как работает программа на js:
    call stack                 web apis




    callback queue
*/