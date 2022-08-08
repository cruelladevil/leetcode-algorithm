/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  const getSum = function getDigitSquareSum(number) {
    let num = number;
    let sum = 0;

    while (num > 0) {
      sum += (num % 10) ** 2;
      num = Math.floor(num / 10);
    }

    return sum;
  };

  let slow = n;
  let fast = getSum(n);

  while (fast !== 1 && slow !== fast) {
    slow = getSum(slow);
    fast = getSum(getSum(fast));
  }

  return fast === 1;
};
