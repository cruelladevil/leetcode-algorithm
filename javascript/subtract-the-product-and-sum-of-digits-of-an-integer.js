/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function (n) {
  let num = n;
  let product = 1;
  let sum = 0;

  while (num > 0) {
    const mod = num % 10;
    product *= mod;
    sum += mod;
    num = Math.floor(num / 10);
  }

  return product - sum;
};
