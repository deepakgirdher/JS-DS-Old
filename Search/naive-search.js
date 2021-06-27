// Write a function which accets a string and a substring. Fund the number of times substring appears in the string. (Naive Search)

function naiveSearch(long, short) {
  var count = 0;
  for (var i = 0; i < long.length; i++) {
    for (var j = 0; j < short.length; j++) {
      if (short[j] !== long[i + j]) {
        break;
      }
      if (j === short.length - 1) {
        count++;
      }
    }
  }
  return count;
}


// Test the program
console.log(naiveSearch("lorie loled lolo", "lol")); // 2