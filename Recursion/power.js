// Write a function called power which accepts a base and an exponent. The function should return the power of the base to the exponent. Ignore negative bases and exponents. (Recursion)

function power(base, exp) {
  if (exp === 0) {
    return 1;
  }
  return base * power(base, exp - 1);
}


// Test program
console.log(power(2, 0)); // 1
console.log(power(2, 2)); // 4
console.log(power(2, 4)); // 16