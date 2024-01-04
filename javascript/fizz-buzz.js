/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
  const result = [];

  for (let i = 1; i <= n; i += 1) {
    let string;

    if (i % 15 === 0) {
      string = 'FizzBuzz';
    } else if (i % 3 === 0) {
      string = 'Fizz';
    } else if (i % 5 === 0) {
      string = 'Buzz';
    } else {
      string = String(i);
    }

    result.push(string);
  }

  return result;
};
