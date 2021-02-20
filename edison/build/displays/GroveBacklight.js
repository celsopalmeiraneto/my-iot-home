"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsupm_jhd1313m1_1 = require("jsupm_jhd1313m1");
var GroveBacklight = /** @class */ (function () {
    function GroveBacklight() {
        this.lcd = new jsupm_jhd1313m1_1.Jhd1313m1(0, 0x3e, 0x62);
    }
    GroveBacklight.prototype.print = function (text, color) {
        if (color === void 0) { color = { r: 0, g: 0, b: 0 }; }
        this.lcd.clear();
        this.lcd.setColor(color.r, color.g, color.b);
        this.lcd.write(text);
    };
    return GroveBacklight;
}());
exports.default = GroveBacklight;
