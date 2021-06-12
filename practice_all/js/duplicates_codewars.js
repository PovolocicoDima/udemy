const text = "aabbccAAA";
const text1 = "112233aA";
const text2 = "111aaaa";
const text3 = "";
// console.log("A".toLowerCase());

function duplicateCount(text) {
  if (!text) {
    return 0;
  }

  const arr = text.split("").map((value) => {
    if (typeof value == "string") {
      return value.toLowerCase();
    }
  });

  const result = [];

  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    const currentItem = arr[i];

    for (let j = 0; j < arr.length; j++) {
      if (currentItem === arr[j]) {
        count++;
      }
    }

    if (count > 1) {
      result.push(currentItem);
    }
  }

  return new Set(result).size;
}

console.log(duplicateCount(text));
console.log(duplicateCount(text1));
console.log(duplicateCount(text2));
console.log(duplicateCount(text3));
