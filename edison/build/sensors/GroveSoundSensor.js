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
var jsupm_mic_1 = require("jsupm_mic");
var Sensor_1 = require("./Sensor");
var threshCtx = new jsupm_mic_1.thresholdContext();
threshCtx.averageReading = 0;
threshCtx.runningAverage = 0;
threshCtx.averagedOver = 2;
var GroveSoundSensor = /** @class */ (function (_super) {
    __extends(GroveSoundSensor, _super);
    function GroveSoundSensor(analogicPort, transmitter) {
        var _this = _super.call(this, transmitter, '-') || this;
        if (analogicPort < 0)
            throw new Error('Analogic port must be GTE 0');
        _this.mic = new jsupm_mic_1.Microphone(analogicPort);
        return _this;
    }
    GroveSoundSensor.prototype.read = function () {
        var startTime = Date.now();
        while (Date.now() < startTime + 500) {
            var buffer = new jsupm_mic_1.uint16Array(128);
            var len = this.mic.getSampledWindow(2, 128, buffer);
            if (!len)
                continue;
            var thresh = this.mic.findThreshold(threshCtx, 30, buffer, len);
            if (thresh)
                return thresh;
        }
        return 0;
    };
    return GroveSoundSensor;
}(Sensor_1.Sensor));
exports.default = GroveSoundSensor;
