/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
  const result = [];

  const dfs = (start = 0, temp = []) => {
    if (start === s.length && temp.length === 4) {
      result.push(temp.join('.'));
    }

    if (start > s.length || temp.length === 4) {
      return;
    }

    for (let i = 1; i < 4; i += 1) {
      const slice = s.slice(start, start + i);

      const hasLeadingZero = slice.charAt(0) === '0' && slice.length > 1;
      const isValidRange = Number(slice) >= 0 && Number(slice) <= 255;

      if (!hasLeadingZero && isValidRange) {
        temp.push(slice);
        dfs(start + i, temp);
        temp.pop();
      }
    }
  };

  dfs();

  return result;
};
