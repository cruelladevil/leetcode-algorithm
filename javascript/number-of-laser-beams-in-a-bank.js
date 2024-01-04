/**
 * @param {string[]} bank
 * @return {number}
 */
var numberOfBeams = function (bank) {
  const SECURITY_DEVICE = '1';

  const deviceCounts = bank
    .map((string) => string.split('').filter((string) => string === SECURITY_DEVICE).length)
    .filter((count) => count !== 0);

  return deviceCounts.reduce((acc, cur, i) => acc + cur * (deviceCounts[i + 1] ?? 0), 0);
};
