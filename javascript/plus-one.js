/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  const tmp = digits;

  for (let i = tmp.length - 1; i >= 0; i -= 1) {
    if (tmp[i] != 9) {
      tmp[i] += 1;

      return tmp;
    }

    tmp[i] = 0;
  }

  return [1, ...tmp];
};
