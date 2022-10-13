/**
 * @param {number} n
 * @param {number} headID
 * @param {number[]} manager
 * @param {number[]} informTime
 * @return {number}
 */
var numOfMinutes = function (n, headID, manager, informTime) {
  const NOT_HAVE_PARENT = -1;
  const managerCopy = [...manager];
  const headToLeafInformTimes = [...informTime];

  const informHeadToLeaf = (id) => {
    if (managerCopy[id] !== NOT_HAVE_PARENT) {
      headToLeafInformTimes[id] += informHeadToLeaf(managerCopy[id]);
      managerCopy[id] = NOT_HAVE_PARENT;
    }
    return headToLeafInformTimes[id];
  };

  managerCopy.forEach((_, i) => informHeadToLeaf(i));

  return Math.max(...headToLeafInformTimes);
};
