// Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman. (Frequency Counter Pattern)


function isAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  let lookup = {}
  let frequencyCounter2 = {}

  // Create frequency object for the first string
  for (let val of str1) {
    lookup[val] = (lookup[val] || 0) + 1
  }

  // verify if occurencies matches
  for (let val of str2) {
    if (!lookup[val]) {
      return false;
    } else {
      lookup[val] -= 1
    }
  }

  return true;
}


// Test the program

console.log(isAnagram('aaz', 'zza')) // false
console.log(isAnagram('awesome', 'awesom')) // false
console.log(isAnagram('qwerty', 'qeywrt')) // true
console.log(isAnagram('texttwisttime', 'timetwisttext')) // true