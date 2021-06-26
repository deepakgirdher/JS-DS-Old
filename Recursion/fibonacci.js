// Write a recursive function called fib which accepts a number and returns the nth number in the Fibonacci sequence. (Recurssion)


function fib(num) {
  if (num <= 2) return 1;
  return fib(num - 1) + fib(num - 2);
}


// Test the program
console.log(fib(4));  // 3
console.log(fib(28)); // 317811
console.log(fib(35)); // 9227465