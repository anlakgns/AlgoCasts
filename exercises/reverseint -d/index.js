// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  // ilk akla gelen - kötü bence
  const isPositive = n >= 0;
  const reverseNumber = Math.abs(n).toString().split('').reverse().join('');
  return parseInt(isPositive ? reverseNumber : -reverseNumber);

  // Stephen da böyle yaptı çok fark yok aslında. Math.sign sayı positif se 1 negatifse -1 döndürüyor.
  const reversed = n.toString().split('').reverse().join('');
  return parseInt(reversed) * Math.sign(n);
}

module.exports = reverseInt;
