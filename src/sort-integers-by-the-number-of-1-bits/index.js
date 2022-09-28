/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function (arr) {
  const countBit = (num) => {
    let count = 0;
    let bit = num;

    while (bit) {
      count += bit & 1;
      bit >>= 1;
    }

    return count;
  };

  return arr.sort((a, b) => {
    if (countBit(a) === countBit(b)) {
      return a - b;
    }
    return countBit(a) - countBit(b);
  });
};
