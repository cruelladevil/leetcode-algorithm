/**
 * @param {string} s
 * @return {string}
 */
var freqAlphabets = function (s) {
  const LOWERCASE_A = 'a'.charCodeAt(0);
  let str = '';
  let index = s.length - 1;

  while (index >= 0) {
    let char = s.charAt(index);

    if (char === '#') {
      char = s.slice(index - 2, index);
      index -= 2;
    }

    const charCode = Number(char);
    str = String.fromCharCode(LOWERCASE_A + charCode - 1) + str;
    index -= 1;
  }

  return str;
};
