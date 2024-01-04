/**
 * @param {string} s
 * @param {character} letter
 * @return {number}
 */
var percentageLetter = function (s, letter) {
  let letterCount = 0;

  for (let i = 0; i < s.length; i += 1) {
    if (s.charAt(i) === letter) letterCount += 1;
  }

  const percentage = (letterCount / s.length) * 100;

  return Math.floor(percentage);
};
