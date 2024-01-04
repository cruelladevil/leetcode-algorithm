/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function (names, heights) {
  const people = names.map((name, i) => {
    const height = heights[i];
    return { name, height };
  });

  people.sort((a, b) => b.height - a.height);

  return people.map(({ name }) => name);
};
