/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function (secret, guess) {
  const nums = Array.from({ length: 10 }, () => 0);
  let bulls = 0;
  let cows = 0;

  for (let i = 0; i < secret.length; i += 1) {
    const secretNum = secret.charAt(i);
    const guessNum = guess.charAt(i);

    if (secretNum === guessNum) {
      bulls += 1;
    } else {
      if (nums[secretNum] < 0) cows += 1;
      if (nums[guessNum] > 0) cows += 1;
      nums[secretNum] += 1;
      nums[guessNum] -= 1;
    }
  }

  return `${bulls}A${cows}B`;
};
