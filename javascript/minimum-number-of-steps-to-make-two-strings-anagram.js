/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function (s, t) {
  const counterS = Array.from({ length: 26 }, () => 0);
  const counterT = Array.from({ length: 26 }, () => 0);

  for (let i = 0; i < s.length; i += 1) {
    counterS[s.charCodeAt(i) - 'a'.charCodeAt()] += 1;
    counterT[t.charCodeAt(i) - 'a'.charCodeAt()] += 1;
  }

  return counterS.reduce((acc, _, i) => acc + Math.max(counterS[i] - counterT[i], 0), 0);
};
