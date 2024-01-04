/**
 * @param {string[]} paths
 * @return {string[][]}
 */
var findDuplicate = function (paths) {
  const map = {};

  paths.forEach((path) => {
    const [dirname, ...filenames] = path.split(' ');

    filenames.forEach((filename) => {
      const keyRegExp = new RegExp(/\([^)]*\)/);
      const match = keyRegExp.exec(filename);
      const keyString = match[0].slice(1, -1);
      const fileFullPath = dirname + '/' + filename.slice(0, match.index);

      if (!map[keyString]) map[keyString] = [];

      const files = map[keyString];
      files.push(fileFullPath);
    });
  });

  return Object.values(map).filter((files) => files.length > 1);
};
