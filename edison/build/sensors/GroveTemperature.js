"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mraa_1 = require("mraa");
const _B = 4275;
const _R0 = 100000;
class GroveTemperature {
    constructor(analogicPort) {
        if (analogicPort < 0)
            throw new Error('Analogic port must be GTE 0');
        this.port = new mraa_1.Aio(analogicPort);
    }
    temperatureInCelsius() {
        const reading = this.port.read();
        let R = 1023 / reading - 1;
        R = _R0 * R;
        return 1 / (Math.log(R / _R0) / _B + 1 / 298.15) - 273.15;
    }
}
exports.default = GroveTemperature;
