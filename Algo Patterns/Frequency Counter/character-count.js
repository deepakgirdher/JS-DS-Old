// Count the number of alphanumerical characters in the string. (Frequency counter pattern)

// Function to traverse through the string and count the characters.
function charCount(str) {
  var obj = {};
  for (var char of str) {
    if (isAlphaNumeric(char)) {
      char = char.toLowerCase();
      obj[char] = ++obj[char] || 1;
    }
  }
  return obj;
}

// A function to find if the character passed is alphanumeric or not
function isAlphaNumeric(char) {
  var code = char.charCodeAt(0);
  if (!(code > 47 && code < 58) &&  //numeric (0-9)
    !(code > 64 && code < 91) && // upper alpha(A-Z)
    !(code > 96 && code < 123)) {  // lower alpha (a-z)
    return false;
  }
  return true;
}


// Test the program
console.log(charCount('My name is Bond. James Bond. 007!!!'));