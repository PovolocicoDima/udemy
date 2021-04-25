const filterThis = [2, 4, 3, 6, 8, 9];

const filter = (arr, func) => {
  const filteredArray = [];
  for (let elem of arr) {
    if (func(elem)) {
      filteredArray.push(elem);
    }
  }
  return filteredArray;
};

console.log(filter(filterThis, (elem) => elem % 3 === 0));
