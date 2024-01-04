/**
 * @param {string} start
 * @param {string} end
 * @param {string[]} bank
 * @return {number}
 */
var minMutation = function (start, end, bank) {
  const genes = ['A', 'C', 'G', 'T'];
  const bankSet = new Set(bank);
  const queue = [];
  const visited = new Set();
  queue.push(start);
  visited.add(start);

  let step = 0;

  while (queue.length > 0) {
    const size = queue.length;

    for (let i = 0; i < size; i += 1) {
      const node = queue.shift();

      if (node === end) return step;

      genes.forEach((gene) => {
        for (let i = 0; i < node.length; i += 1) {
          const mutation = node.slice(0, i) + gene + node.slice(i + 1);

          if (!visited.has(mutation) && bankSet.has(mutation)) {
            queue.push(mutation);
            visited.add(mutation);
          }
        }
      });
    }

    step += 1;
  }

  return -1;
};
