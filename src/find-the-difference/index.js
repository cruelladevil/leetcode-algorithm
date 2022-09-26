/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
  let code = t.charCodeAt(t.length - 1);

  for (let i = 0; i < s.length; i += 1) {
    code ^= s.charCodeAt(i);
    code ^= t.charCodeAt(i);
  }

  return String.fromCharCode(code);
};
