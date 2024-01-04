/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
  let max = 0;

  accounts.forEach((customer) => {
    const total = customer.reduce((total, money) => total + money);
    max = Math.max(max, total);
  });

  return max;
};
