var RandomizedSet = function () {
  this.values = [];
  this.map = new Map();
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
  if (this.map.has(val)) {
    return false;
  }

  this.values.push(val);
  this.map.set(val, this.values.length - 1);

  return true;
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
  if (!this.map.has(val)) {
    return false;
  }

  const index = this.map.get(val);

  [this.values[index], this.values[this.values.length - 1]] = [this.values[this.values.length - 1], this.values[index]];
  this.map.set(this.values[index], index);

  this.values.pop();
  this.map.delete(val);

  return true;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
  const random = Math.floor(Math.random() * this.values.length);

  return this.values[random];
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
