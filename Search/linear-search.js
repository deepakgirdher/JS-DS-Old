// Write a function that accepts and array and a value. If that value is found in the array, return the index of the found value(first match). If value not found, return -1 . (Linear search)


function linearSearch(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) return i;
  }
  return -1;
}


// Test the program
console.log(linearSearch([2, 3, 6, 34, 23, 54, 23], 54)); // 5
console.log(linearSearch([2, 3, 6, 34, 23, 54, 23], 77)); // -1