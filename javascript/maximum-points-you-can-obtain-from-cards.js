/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function (cardPoints, k) {
  const n = cardPoints.length;
  let sum = 0;

  for (let left = 0; left < k; left += 1) {
    sum += cardPoints[left];
  }

  let max = sum;

  for (let left = k - 1; left >= 0; left -= 1) {
    const right = n - k + left;
    sum -= cardPoints[left];
    sum += cardPoints[right];
    max = Math.max(max, sum);
  }

  return max;
};
