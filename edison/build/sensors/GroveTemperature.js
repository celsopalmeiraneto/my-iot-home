"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroveTemperature = void 0;
var mraa_1 = require("mraa");
var Sensor_1 = require("./Sensor");
var _B = 4275;
var _R0 = 100000;
var GroveTemperature = /** @class */ (function (_super) {
    __extends(GroveTemperature, _super);
    function GroveTemperature(analogicPort, transmitter) {
        var _this = _super.call(this, transmitter, 'C') || this;
        if (analogicPort < 0)
            throw new Error('Analogic port must be GTE 0');
        _this.port = new mraa_1.Aio(analogicPort);
        return _this;
    }
    GroveTemperature.prototype.read = function () {
        return this.temperatureInCelsius();
    };
    GroveTemperature.prototype.temperatureInCelsius = function () {
        var reading = this.port.read();
        var R = 1023 / reading - 1;
        R = _R0 * R;
        return 1 / (Math.log(R / _R0) / _B + 1 / 298.15) - 273.15;
    };
    return GroveTemperature;
}(Sensor_1.Sensor));
exports.GroveTemperature = GroveTemperature;
exports.default = GroveTemperature;
