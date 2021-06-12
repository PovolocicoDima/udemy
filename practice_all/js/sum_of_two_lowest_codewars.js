function sumOfTwoSmallestNumbers(numbers) {
  const arr = numbers
    .sort((a, b) => a - b)
    .filter((value, index) => {
      if (index < 2) {
        return value;
      }
    })
    .reduce(function (a, b) {
      return a + b;
    });

  return arr;
}

console.log(sumOfTwoSmallestNumbers([5, 8, 12, 19, 22]));
