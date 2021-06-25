// Write a function which accept two arrays. The function should return true if every value in the array has it's corresponding value squared in the second array. The frequence of the values must be the same. (Frequency Counter Pattern)

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false
  }

  let frequencyCounter1 = {}
  let frequencyCounter2 = {}

  // Fill in the object with number occurrences
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
  }
  // Fill in the object with squared value occurrences
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
  }

  // Verify if the occurrences match for both number and its squared value
  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}


// Test the program
console.log(same([1, 2, 3, 2, 5], [9, 1, 4, 4, 11]));  // false
console.log(same([1, 2, 3, 2, 5], [9, 1, 4, 4, 25]));  // true
