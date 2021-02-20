"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsupm_jhd1313m1_1 = require("jsupm_jhd1313m1");
var GroveBacklight = /** @class */ (function () {
    function GroveBacklight() {
        this.lcd = new jsupm_jhd1313m1_1.Jhd1313m1(0, 0x3e, 0x62);
    }
    GroveBacklight.prototype.print = function (text, color) {
        var _a;
        if (color === void 0) { color = [255, 255, 255]; }
        this.lcd.clear();
        (_a = this.lcd).setColor.apply(_a, color);
        this.lcd.write(text[0]);
        this.lcd.setCursor(1, 0);
        this.lcd.write(text[1]);
    };
    return GroveBacklight;
}());
exports.default = GroveBacklight;
