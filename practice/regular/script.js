'use strict';

// new RegExp('pattern', 'flags');
// /pattern/f


// const ans = prompt('Введите число');

// const reg = /\d/g;
// console.log(ans.match(reg));
// три флага
// i вне зависимости от регистра
// g глобал, если мы хотим найти не только первое вхождение
// m многострочный режим

// Классы регулярных выражений:
// \d - цифры
// \w - слова,буквы
// \s - пробелы


const str = 'My name is R2D2';

console.log(str.match(/\D/ig));

// \D - не числа
// \W - не буквы




// console.log(ans.search(reg));
// console.log(ans.match(reg));

// const pass = prompt('Password');
// console.log(pass.replace(/./g, "*"));

// console.log('12-34-56'.replace(/-/g, ':'));
