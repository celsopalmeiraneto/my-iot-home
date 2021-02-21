"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.thresholder = void 0;
function thresholder(threshold) {
    var currentValue = Number.NaN;
    return function (newValue) {
        if (typeof newValue !== 'number')
            return true;
        var min = currentValue - threshold;
        var max = currentValue + threshold;
        if (Number.isNaN(currentValue) || newValue < min || newValue > max) {
            currentValue = newValue;
            return true;
        }
        else {
            return false;
        }
    };
}
exports.thresholder = thresholder;
