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

  let num = 0;

  for (let i = 0; i < s.length; i += 1) {
    const curr = map[s.charAt(i)];
    const next = map[s.charAt(i + 1)] || 0;

    if (curr >= next) {
      num += curr;
    } else {
      num -= curr;
    }
  }

  return num;
};
