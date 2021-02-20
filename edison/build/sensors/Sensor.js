"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sensor = void 0;
var Sensor = /** @class */ (function () {
    function Sensor(transmitter, unit) {
        this.transmitter = transmitter;
        this.unit = unit;
    }
    Sensor.prototype.start = function () {
        var _this = this;
        setInterval(function () {
            void _this.transmitter(_this.read(), _this.unit);
        }, 1000);
    };
    return Sensor;
}());
exports.Sensor = Sensor;
