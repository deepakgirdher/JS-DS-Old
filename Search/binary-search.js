// Write a function that accepts a sorted array and a value. Search and return the position of the value in the array. If not found, return -1.  (Binary Search)

function binarySearch(arr, val) {
  let left = 0;
  let right = arr.length - 1;
  let currentPos = Math.floor((left + right) / 2);

  // Use divide and conquer till value is found or pointers cross over.
  while (left <= right && arr[currentPos] !== val) {
    if (arr[currentPos] < val) left = currentPos + 1;
    else right = currentPos - 1;
    currentPos = Math.floor((left + right) / 2);
  }

  return arr[currentPos] === val ? currentPos : -1;
}


// Test the program
console.log(binarySearch([1, 2, 3, 5, 6, 8, 9, 13, 23, 26, 35, 45, 48, 57, 59, 66, 79], 66))  // 15
console.log(binarySearch([1, 2, 3, 5, 6, 8, 9, 13, 23, 26, 35, 45, 48, 57, 59, 66, 79], 96))  // -1