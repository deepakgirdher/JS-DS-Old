// Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an arry that includes both values that sum to zero or undefined if a pair does not exist. (Multiple Pointer Pattern)


// Move with two pointers from left to right and compare the result.
function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right]
    if (sum === 0) {
      return [arr[left], arr[right]]
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}


// Test the program
console.log(sumZero([-3, -2, -1, 1, 2, 3]))  // [-3,3]
console.log(sumZero([-2, 0, 1, 3])) // undefined