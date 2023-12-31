/**
 * @param {string} s
 * @return {number}
 */
var maxLengthBetweenEqualCharacters = function (s) {
  const map = new Map();

  for (let i = 0; i < s.length; i += 1) {
    const char = s.charAt(i);

    if (map.has(char)) {
      map.get(char).end = i;
    } else {
      map.set(char, { start: i, end: -1 });
    }
  }

  let max = -1;

  map.forEach(({ start, end }) => {
    if (end !== -1) {
      max = Math.max(max, end - start - 1);
    }
  });

  return max;
};
