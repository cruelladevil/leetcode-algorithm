/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
  const result = [];

  const isPalindrome = (string) => {
    let left = 0;
    let right = string.length - 1;

    while (left <= right) {
      if (string.charAt(left) !== string.charAt(right)) {
        return false;
      }

      left += 1;
      right -= 1;
    }

    return true;
  };

  const dfs = (string, temp = []) => {
    if (string.length === 0) {
      result.push([...temp]);
    }

    for (let i = 1; i <= string.length; i += 1) {
      const prefix = string.slice(0, i);
      const suffix = string.slice(i);

      if (isPalindrome(prefix)) {
        temp.push(prefix);
        dfs(suffix, temp);
        temp.pop();
      }
    }
  };

  dfs(s);

  return result;
};
