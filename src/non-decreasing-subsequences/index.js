/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function (nums) {
  const subsequences = [];

  const dfs = (start = 0, temp = []) => {
    if (temp.length >= 2) {
      subsequences.push([...temp]);
    }

    const set = new Set();

    for (let i = start; i < nums.length; i += 1) {
      const num = nums[i];
      const isSubsequence = temp.length === 0 || temp[temp.length - 1] <= num;

      if (!set.has(num) && isSubsequence) {
        set.add(num);

        temp.push(num);
        dfs(i + 1, temp);
        temp.pop();
      }
    }
  };

  dfs();

  return subsequences;
};
