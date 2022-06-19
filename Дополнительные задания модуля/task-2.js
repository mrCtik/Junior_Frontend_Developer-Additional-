console.log(isEqualSymbols("адрес", "среда")); // true
console.log(isEqualSymbols("ноутбук", "программист")); // false

function isEqualSymbols(str1, str2) {
  let counter = 0;
  for (let i = 0; i < str1.length; i += 1) {
    for (let j = 0; j < str2.length; j += 1) {
      if (str1[i] === str2[j]) {
        counter += 1;
      }
    }
  }
  if ((counter === str1.length) && (counter === str2.length)) {
    return true;
  } else {
    return false;
  }
}
