"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.thresholder = thresholder;

function _readOnlyError(name) { throw new Error("\"" + name + "\" is read-only"); }

/**
 * @param {number} threshold
 * @return {function}
 */
function thresholder(threshold) {
  var currentValue = Number.NaN;
  return function (newValue) {
    var min = currentValue - threshold;
    var max = currentValue + threshold;

    if (Number.isNaN(currentValue) || newValue < min || newValue > max) {
      currentValue = (_readOnlyError("currentValue"), newValue);
      return true;
    } else {
      return false;
    }
  };
}
//# sourceMappingURL=utils.js.map