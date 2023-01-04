/**
 * @param {number[]} tasks
 * @return {number}
 */
var minimumRounds = function (tasks) {
  const CAN_NOT_COMPLETE = -1;

  const map = {};

  tasks.forEach((level) => {
    map[level] = (map[level] ?? 0) + 1;
  });

  const taskCounts = Object.values(map);
  let completeCount = 0;

  for (let i = 0; i < taskCounts.length; i += 1) {
    const taskCount = taskCounts[i];

    if (taskCount === 1) return CAN_NOT_COMPLETE;

    completeCount += Math.ceil(taskCount / 3);
  }

  return completeCount;
};
