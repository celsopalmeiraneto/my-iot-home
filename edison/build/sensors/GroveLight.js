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
var jsupm_light_1 = require("jsupm_light");
var Sensor_1 = require("./Sensor");
var GroveLight = /** @class */ (function (_super) {
    __extends(GroveLight, _super);
    function GroveLight(analogicPort, transmitter) {
        var _this = _super.call(this, transmitter, 'Lux') || this;
        if (analogicPort < 0)
            throw new Error('Analogic port must be GTE 0');
        _this.light = new jsupm_light_1.Light(analogicPort);
        return _this;
    }
    GroveLight.prototype.read = function () {
        return this.valueInLux();
    };
    GroveLight.prototype.valueInLux = function () {
        return this.light.value();
    };
    return GroveLight;
}(Sensor_1.Sensor));
exports.default = GroveLight;
