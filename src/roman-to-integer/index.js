/**
 * @param {string} s
 * @return {integer}
 */
var romanToInt = function (s) {
  const map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let number = 0;

  for (let i = 0; i < s.length; i += 1) {
    const current = map[s[i]];
    const next = map[s[i + 1]];

    if (current < next) {
      number -= current;
    } else {
      number += current;
    }
  }

  return number;
};
