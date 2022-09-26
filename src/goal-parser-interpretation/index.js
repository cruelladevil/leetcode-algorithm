/**
 * @param {string} command
 * @return {string}
 */
var interpret = function (command) {
  let str = '';
  let index = 0;

  while (index < command.length) {
    const char = command.charAt(index);
    const nextChar = command.charAt(index + 1);

    if (char === 'G') {
      str += 'G';
    } else if (char === '(' && nextChar === ')') {
      str += 'o';
      index += 1;
    } else if (command.slice(index, index + 4) === '(al)') {
      str += 'al';
      index += 3;
    }

    index += 1;
  }

  return str;
};
