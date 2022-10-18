/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
  const say = (string) => {
    let nextString = '';
    let char = string.charAt(0);
    let count = 1;

    for (let i = 1; i < string.length; i += 1) {
      if (char === string.charAt(i)) {
        count += 1;
      } else {
        nextString += `${count}${char}`;
        char = string.charAt(i);
        count = 1;
      }
    }

    nextString += `${count}${char}`;

    return nextString;
  };

  let digitString = '1';

  for (let i = 1; i < n; i += 1) {
    digitString = say(digitString);
  }

  return digitString;
};
