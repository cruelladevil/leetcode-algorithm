/**
 * @param {string} dominoes
 * @return {string}
 */
var pushDominoes = function (dominoes) {
  const n = dominoes.length;
  const forces = Array.from({ length: n }, () => 0);

  let rightForce = 0;

  for (let i = 0; i < n; i += 1) {
    const domino = dominoes.charAt(i);

    if (domino === 'R') {
      rightForce = n;
    } else if (domino === 'L') {
      rightForce = 0;
    } else {
      rightForce = Math.max(rightForce - 1, 0);
    }

    forces[i] += rightForce;
  }

  let leftForce = 0;

  for (let i = n - 1; i >= 0; i -= 1) {
    const domino = dominoes.charAt(i);

    if (domino === 'L') {
      leftForce = n;
    } else if (domino === 'R') {
      leftForce = 0;
    } else {
      leftForce = Math.max(leftForce - 1, 0);
    }

    forces[i] -= leftForce;
  }

  const states = forces.map((force) => {
    if (force > 0) {
      return 'R';
    } else if (force < 0) {
      return 'L';
    } else {
      return '.';
    }
  });

  return states.join('');
};
