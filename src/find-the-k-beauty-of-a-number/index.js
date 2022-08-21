/**
 * @param {number} num
 * @param {number} k
 * @return {number}
 */
var divisorSubstrings = function (num, k) {
  const numString = String(num);
  let divisorCount = 0;

  for (let i = 0; i < numString.length - k + 1; i += 1) {
    const substring = numString.slice(i, i + k);
    const subNum = Number(substring);

    if (num % subNum === 0) divisorCount += 1;
  }

  return divisorCount;
};
