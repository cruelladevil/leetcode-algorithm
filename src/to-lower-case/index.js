/**
 * @param {string} s
 * @return {string}
 */
var toLowerCase = function (s) {
  const UPPERCASE_A = 'A'.charCodeAt(0);
  const UPPERCASE_Z = 'Z'.charCodeAt(0);
  const CASE_DIFF = 'a'.charCodeAt(0) - 'A'.charCodeAt(0);
  let lowerCaseString = '';

  for (let i = 0; i < s.length; i += 1) {
    let charCode = s.charCodeAt(i);

    if (charCode >= UPPERCASE_A && charCode <= UPPERCASE_Z) {
      charCode += CASE_DIFF;
    }

    lowerCaseString += String.fromCharCode(charCode);
  }

  return lowerCaseString;
};
