// Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted. (Frequency Counter pattern)

function countUniqueValues(arr) {
  let frequencyCounter = {}
  for (var val of arr) {
    frequencyCounter[val] = (frequencyCounter[val] || 0) + 1
  }
  return Object.keys(frequencyCounter).length;
}



// Test the program
console.log(countUniqueValues([1, 1, 1, 1, 1, 2])) // 2
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 13])) // 7
console.log(countUniqueValues([])) // 0
console.log(countUniqueValues([-2, -1, -1, 0, 1])) // 4