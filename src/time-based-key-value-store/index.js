var TimeMap = function () {
  this.map = {};
};

/**
 * @param {string} key
 * @param {string} value
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function (key, value, timestamp) {
  if (!this.map[key]) {
    this.map[key] = [];
  }

  this.map[key].push({ timestamp, value });
};

/**
 * @param {string} key
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function (key, timestamp) {
  if (!this.map[key]) return '';

  const timestamps = this.map[key];
  const target = timestamp;

  if (target < timestamps[0].timestamp) return '';

  let left = 0;
  let right = timestamps.length - 1;

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);
    const stamp = timestamps[middle].timestamp;

    if (stamp <= target) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }

  return timestamps[left - 1].value;
};

/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */
