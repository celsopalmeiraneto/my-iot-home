"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sensor = void 0;
class Sensor {
    constructor(transmitter, unit) {
        this.transmitter = transmitter;
        this.unit = unit;
    }
    start() {
        setInterval(() => {
            void this.transmitter(this.read(), this.unit);
        }, 1000);
    }
}
exports.Sensor = Sensor;
