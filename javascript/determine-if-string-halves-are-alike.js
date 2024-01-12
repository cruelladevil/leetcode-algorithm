/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function (s) {
  const vowels = new Set('aeiouAEIOU');

  const hasVowels = (char) => vowels.has(char);

  const half = s.length / 2;
  const splitted = s.split('');
  const left = splitted.slice(0, half);
  const right = splitted.slice(half);

  return left.filter(hasVowels).length === right.filter(hasVowels).length;
};
