const names = ['dima', 'anna', 'pavel'];
const lastnames = ['polov', 'kunina', 'jopa'];
const result = [];

for (let i = 0; i <= names.length; i++) {
  for (let j = 0; j <= lastnames.length; j++) {
    if ((i = j)) {
      result.push(`${names[i - 1]} ${lastnames[j - 1]}`);
    }
  }
}

console.log(result);
