"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsupm_mic_1 = require("jsupm_mic");
const Sensor_1 = require("./Sensor");
var threshCtx = new jsupm_mic_1.thresholdContext;
threshCtx.averageReading = 0;
threshCtx.runningAverage = 0;
threshCtx.averagedOver = 2;
class GroveSoundSensor extends Sensor_1.Sensor {
    constructor(analogicPort, transmitter) {
        super(transmitter, '-');
        if (analogicPort < 0)
            throw new Error('Analogic port must be GTE 0');
        this.mic = new jsupm_mic_1.Microphone(analogicPort);
    }
    read() {
        const startTime = Date.now();
        while (Date.now() < startTime + 200) {
            const buffer = new jsupm_mic_1.uint16Array(128);
            const len = this.mic.getSampledWindow(2, 128, buffer);
            if (!len)
                continue;
            const thresh = this.mic.findThreshold(threshCtx, 30, buffer, len);
            if (thresh)
                return thresh;
        }
        return 0;
    }
}
exports.default = GroveSoundSensor;
