// Write a function that accept a number and return the sum of all the numbers from 1 till the provided number. (Recursion)

// Use recursion and add the result with the current number
function sumRange(num) {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
}


// Test the program
console.log(sumRange(3));  // 6
console.log(sumRange(4)); // 10