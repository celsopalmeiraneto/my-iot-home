"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsupm_light = require("jsupm_light");

/**
 * @class
 * @param {number} analogicPort An analogic port.
 */
function GroveLight(analogicPort) {
  var light = new _jsupm_light.Light(analogicPort);
  /**
   * @function
   * @return {number} Lux from sensor
   */

  function valueInLux() {
    return light.value();
  }

  return {
    valueInLux
  };
}

var _default = GroveLight;
exports.default = _default;
//# sourceMappingURL=GroveLight.js.map