/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let max = 0;
  let low = 0;

  for (let high = 1; high < prices.length; high += 1) {
    if (prices[low] < prices[high]) {
      const profit = prices[high] - prices[low];
      max = Math.max(max, profit);
    } else {
      low = high;
    }
  }

  return max;
};
