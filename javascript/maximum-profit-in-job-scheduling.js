/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number[]} profit
 * @return {number}
 */
var jobScheduling = function (startTime, endTime, profit) {
  const n = profit.length;
  const jobs = Array.from({ length: n }, (_, i) => {
    const start = startTime[i];
    const end = endTime[i];
    const score = profit[i];

    return { start, end, score };
  });

  jobs.sort(({ start: startTimeA, end: endTimeA }, { start: startTimeB, end: endTimeB }) => {
    if (endTimeA === endTimeB) {
      return startTimeA - startTimeB;
    }
    return endTimeA - endTimeB;
  });

  const dp = Array.from({ length: n + 1 }, () => 0);

  const binarySearch = (index, targetTime) => {
    let left = 0;
    let right = index;

    while (left <= right) {
      const middle = Math.floor((left + right) / 2);
      const { end } = jobs[middle];

      if (end <= targetTime) {
        left = middle + 1;
      } else {
        right = middle - 1;
      }
    }

    return left;
  };

  for (let i = 0; i < n; i += 1) {
    const { start, score } = jobs[i];
    const lastIndex = binarySearch(i, start);

    dp[i + 1] = Math.max(dp[i], dp[lastIndex] + score);
  }

  return dp[n];
};
