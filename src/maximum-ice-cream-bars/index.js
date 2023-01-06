/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
var maxIceCream = function (costs, coins) {
  costs.sort((a, b) => a - b);

  let coinAmount = coins;
  let iceCreamCount = 0;

  for (let i = 0; i < costs.length; i += 1) {
    const currCost = costs[i];

    if (coinAmount < currCost) return iceCreamCount;

    coinAmount -= currCost;
    iceCreamCount += 1;
  }

  return iceCreamCount;
};
