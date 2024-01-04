/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function (arr) {
  let max = -Infinity;
  let min = Infinity;

  arr.forEach((num) => {
    max = Math.max(max, num);
    min = Math.min(min, num);
  });

  if (max === min) return true;

  const diff = (max - min) / (arr.length - 1);
  const set = new Set();

  for (let i = 0; i < arr.length; i += 1) {
    const num = arr[i];
    const index = (num - min) / diff;

    if (!Number.isInteger(index) || set.has(index)) return false;
    set.add(index);
  }

  return true;
};
