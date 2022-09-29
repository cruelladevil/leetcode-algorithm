/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */
var ParkingSystem = function (big, medium, small) {
  this.spaces = [
    { size: 'big', slots: big },
    { size: 'medium', slots: medium },
    { size: 'small', slots: small },
  ];
};

/**
 * @param {number} carType
 * @return {boolean}
 */
ParkingSystem.prototype.addCar = function (carType) {
  const space = this.spaces[carType - 1];
  if (space.slots === 0) return false;

  space.slots -= 1;

  return true;
};

/**
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */
