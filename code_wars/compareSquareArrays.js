let a1 = [121, 144, 19, 161, 19, 144, 19, 11];
let a2 = [231, 14641, 20736, 361, 25921, 361, 20736, 361];

// function comp(a, b) {
//   let result = null;

//   if (typeof a !== 'object' || a === null) {
//     return false
//   }

//   if (typeof b !== 'object' || b === null) {
//     return false
//   }

//   if (a.length === 0 || b.length === 0) {
//     return false;
//   }

//   let array1 = [...a];
//   let array2 = [...b];



//   if (array1.length !== array2.length) {
//     return false;
//   }

//   function cicle(array1, array2) {
//     for (let i = 0; i < array2.length; i += 1) {
//       const item = array1[i];
//       const itemInSqr = item * item;
//       if (array2.includes(itemInSqr)) {
//         result = true;
//         const idx = array2.findIndex((num) => num === itemInSqr);
//         array1.splice(i, 1)
//         array2.splice(idx, 1)
//       } else {
//         return false
//       }
//     }
//   }


//   cicle(array1, array2);

//   console.log(`array1 = ${array1}`)
//   console.log(`array2 = ${array2}`)

//   if (array1.length) {
//     cicle(array1, array2)
//   }

//   // while (array1.length > 0) {
//   //   cicle(array1, array2);
//   // }

//   console.log(`array1 = ${array1}`)
//   console.log(`array2 = ${array2}`)

//   return result
// }


// function comp(array1, array2) {
//   if (array1 == null || array2 == null) return false;
//   array1.sort((a, b) => a - b); array2.sort((a, b) => a - b);
//   return array1.map(v => v * v).every((v, i) => v == array2[i]);
// }

console.log(comp(a1, a2))
