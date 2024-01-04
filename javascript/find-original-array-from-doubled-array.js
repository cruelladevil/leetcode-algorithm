/**
 * @param {number[]} changed
 * @return {number[]}
 */
var findOriginalArray = function (changed) {
  if (changed.length % 2 === 1) return [];

  changed.sort((a, b) => a - b);

  const map = new Map();
  const original = [];

  changed.forEach((value) => {
    if (!map.has(value)) map.set(value, 0);
    map.set(value, map.get(value) + 1);
  });

  changed.forEach((value) => {
    const double = value * 2;

    if (map.get(value) > 0 && map.get(double) > 0) {
      if (value === double && map.get(value) < 2) return;

      original.push(value);
      map.set(value, map.get(value) - 1);
      map.set(double, map.get(double) - 1);
    }
  });

  if (original.length !== changed.length / 2) return [];

  return original;
};
