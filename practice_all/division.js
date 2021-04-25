function division(divider, quotient) {
  const integer = Math.floor(divider / quotient);
  const integerToArr = integer.toString().split('');

  const dividerToArr = divider.toString().split('');
  const lowStr = '_';
  const str = '-';
  const line = str.repeat(integerToArr.length);
  const c = integerToArr[0] * quotient;
  const dash = lowStr.repeat(c.toString().split('').length);
  const c_ = `${c}
              ${dash}`.trim();

  const wrapper = `
  _${divider}|${quotient}
   ${c_}     |${line}
             |${integer}

  `.trim();

  console.log(wrapper);

  // for (let i = 0; i < integerToArr.length; i++) {
  //   console.log(line);
  // }
}

division(78945, 4);
