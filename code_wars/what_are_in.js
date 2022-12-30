// function inArray(array1, array2) {
//   const result = [];
//   for (let i = 0; i < array1.length; i += 1) {
//     const item1 = array1[i];
//     if (item1 == undefined) {
//       continue;
//     }
//     array2.map(item2 => {
//       const res = item2.search(item1);
//       if (res >= 0) {
//         result.push(item1);
//       }
//     })
//   }

//   const sortedArray = result.sort();
//   const test = new Set(sortedArray);
//   return Array.from(test);
// }

function inArray(array1, array2) {
  return array1.filter(function (word) {
    return array2.join(' ').includes(word);
  }).sort();
}


const a1 = ["xyz", "live", "strong"];
const a2 = ["lively", "alive", "harp", "sharp", "armstrong"];

// ["live", "strong"]

console.log(inArray(a1, a2));