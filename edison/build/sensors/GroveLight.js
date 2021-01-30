"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsupm_light_1 = require("jsupm_light");
class GroveLight {
    constructor(analogicPort) {
        if (analogicPort < 0)
            throw new Error('Analogic port must be GTE 0');
        this.light = new jsupm_light_1.Light(analogicPort);
    }
    valueInLux() {
        return this.light.value();
    }
}
exports.default = GroveLight;
