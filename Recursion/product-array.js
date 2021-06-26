// Write a function called productOfArray which takes in an array of numbers and returns the product of them all. (Recursion)

function productOfArray(nums) {
  if (nums.length === 1) return nums[0];
  return nums[0] * productOfArray(nums.slice(1));
}


// Test the program
console.log(productOfArray([1, 2, 3])); // 6
console.log(productOfArray([1, 2, 3, 10])); // 60

