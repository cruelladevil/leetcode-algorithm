/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
var findWinners = function (matches) {
  const loseCountMap = {};

  matches.forEach(([winner, loser]) => {
    if (!loseCountMap[winner]) loseCountMap[winner] = 0;
    if (!loseCountMap[loser]) loseCountMap[loser] = 0;

    loseCountMap[loser] += 1;
  });

  const players = Object.keys(loseCountMap).sort((a, b) => a - b);
  const zeroLosts = players.filter((player) => loseCountMap[player] === 0);
  const oneLosts = players.filter((player) => loseCountMap[player] === 1);

  return [zeroLosts, oneLosts];
};
