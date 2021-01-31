"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroveTemperature = void 0;
const mraa_1 = require("mraa");
const Sensor_1 = require("./Sensor");
const _B = 4275;
const _R0 = 100000;
class GroveTemperature extends Sensor_1.Sensor {
    constructor(analogicPort, transmitter) {
        super(transmitter, 'C');
        if (analogicPort < 0)
            throw new Error('Analogic port must be GTE 0');
        this.port = new mraa_1.Aio(analogicPort);
    }
    read() {
        return this.temperatureInCelsius();
    }
    temperatureInCelsius() {
        const reading = this.port.read();
        let R = 1023 / reading - 1;
        R = _R0 * R;
        return 1 / (Math.log(R / _R0) / _B + 1 / 298.15) - 273.15;
    }
}
exports.GroveTemperature = GroveTemperature;
exports.default = GroveTemperature;
