"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mraa = require("mraa");

var _B = 4275;
var _R0 = 100000;
/**
 * @return {object} Object containing functions. 
 * @param {number} analogicPort 
 */

function GroveTemperature(analogicPort) {
  var port = new _mraa.Aio(analogicPort);
  /**
   * @return {number} The temperature in degreees Celsius
   */

  function temperatureInCelsius() {
    var reading = port.read();
    var R = 1023 / reading - 1;
    R = _R0 * R;
    return 1 / (Math.log(R / _R0) / _B + 1 / 298.15) - 273.15;
  }

  return {
    temperatureInCelsius
  };
}

var _default = GroveTemperature;
exports.default = _default;
//# sourceMappingURL=GroveTemperature.js.map