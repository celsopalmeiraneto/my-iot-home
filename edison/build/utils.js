"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.thresholder = void 0;
function thresholder(threshold) {
    let currentValue = Number.NaN;
    return (newValue) => {
        const min = currentValue - threshold;
        const max = currentValue + threshold;
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
