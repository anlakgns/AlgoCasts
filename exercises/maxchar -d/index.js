// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  // ilk akla gelen  - bok gibi
  let charCounter = {};
  for (let char of str) {
    charCounter[char] ? charCounter[char]++ : (charCounter[char] = 1);
  }

  let arrayChars = Object.entries(charCounter);
  let maxChar = ['dummyChar', 0];
  for (let i = 0; i < arrayChars.length; i++) {
    maxChar[1] > arrayChars[i][1] ? '' : (maxChar = arrayChars[i]);
  }
  return maxChar[0].toString();

  // stephen daha iyi yazdı Object.entries yerine for in kullandı.
  const charMap = {};
  let max = 0;
  let maxChar = '';

  for (let char of str) {
    charMap[char] ? charMap[char]++ : (charMap[char] = 1);
  }

  for (let char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  }

  return maxChar;
}

module.exports = maxChar;
