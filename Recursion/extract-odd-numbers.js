// Write a function to extract all the odd numbers from the array of numbers provided. (Helper Recursion Method pattern)

// Helper function to recursively extract the odd numbers from the list.
function collectOddValues(arr) {
  let result = [];

  function helperRecursive(helperInput) {
    if (helperInput.length === 0) {
      return;
    }
    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }
    helperRecursive(helperInput.slice(1))
  }

  helperRecursive(arr)
  return result;

}


// Test the program
console.log(collectOddValues([122, 137, 345, 235, 423, 232, 556])) // [137,345,235,423]
console.log(collectOddValues([])) // []
console.log(collectOddValues([998, 364, 266])) // []