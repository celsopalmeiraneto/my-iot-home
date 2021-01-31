"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsupm_light_1 = require("jsupm_light");
const Sensor_1 = require("./Sensor");
class GroveLight extends Sensor_1.Sensor {
    constructor(analogicPort, transmitter) {
        super(transmitter, 'Lux');
        if (analogicPort < 0)
            throw new Error('Analogic port must be GTE 0');
        this.light = new jsupm_light_1.Light(analogicPort);
    }
    read() {
        return this.valueInLux();
    }
    valueInLux() {
        return this.light.value();
    }
}
exports.default = GroveLight;
