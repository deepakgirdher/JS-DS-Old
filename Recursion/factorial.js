// Write a function to calculate a factorial of a number. (Recursion)

// Use recursion and add the result with the current number
function factorial(num) {
  if (num === 1 || num === 0) return 1;
  return num * factorial(num - 1);
}


// Test the program
console.log(factorial(3));  // 6
console.log(factorial(5)); // 120
console.log(factorial(7)); // 5040