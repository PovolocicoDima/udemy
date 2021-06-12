function removeChar(str) {
  return str.split("").slice(1, -1).join("");
}

console.log(removeChar("eloquent"));
