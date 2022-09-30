/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function (n, trust) {
  const trustCounts = Array.from({ length: n + 1 }, () => 0);

  trust.forEach(([voter, upvoted]) => {
    trustCounts[voter] -= 1;
    trustCounts[upvoted] += 1;
  });

  for (let i = 1; i < n + 1; i += 1) {
    if (trustCounts[i] === n - 1) return i;
  }

  return -1;
};
