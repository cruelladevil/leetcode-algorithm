/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function (arr) {
  const set = new Set();

  for (let i = 0; i < arr.length; i += 1) {
    const target = arr[i];

    if (set.has(target)) return true;

    set.add(target * 2);
    set.add(target / 2);
  }

  return false;
};
