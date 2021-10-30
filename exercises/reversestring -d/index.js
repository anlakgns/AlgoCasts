// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  // // solution 1 : (interviewer may say don't use reverse method.)
  // return str.split('').reverse().join('');

  // // solution 2: (Stephen dediki bu tip loop yazarsak typo yapma ihtimalimiz çok artıyor, o yüzden bu loopu yazmayın dedi. for of yazıcaz.)
  // let reversed = '';
  // for (let i = str.length - 1; i >= 0; i--) {
  //   reversed = reversed + str[i];
  // }
  // return reversed;

  // // solution 3: Loop with modern syntax that is less typo error prone
  // let reversed = '';
  // for (let letter of str) {
  //   reversed = letter + reversed;
  // }
  // return reversed;

  // solution 4 : using reduce function
  return str
    .split('')
    .reduce((reserved, character) => character + reserved, '');
}
module.exports = reverse;
