/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  const left = [];
  const right = [];
  let [newStart, newEnd] = newInterval;

  intervals.forEach((interval) => {
    const [start, end] = interval;

    if (end < newStart) {
      left.push(interval);
    } else if (newEnd < start) {
      right.push(interval);
    } else {
      newStart = Math.min(newStart, start);
      newEnd = Math.max(newEnd, end);
    }
  });

  return [...left, [newStart, newEnd], ...right];
};
