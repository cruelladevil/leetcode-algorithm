/**
 * @param {number[]} tokens
 * @param {number} power
 * @return {number}
 */
var bagOfTokensScore = function (tokens, power) {
  tokens.sort((a, b) => a - b);

  let low = 0;
  let high = tokens.length - 1;
  let score = 0;

  while (low <= high) {
    if (tokens[low] <= power) {
      score += 1;
      power -= tokens[low];
      low += 1;
    } else if (score >= 1 && low < high) {
      score -= 1;
      power += tokens[high];
      high -= 1;
    } else break;
  }

  return score;
};
