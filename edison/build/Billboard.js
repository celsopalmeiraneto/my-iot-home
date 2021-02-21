"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var GroveBacklight_1 = __importDefault(require("./displays/GroveBacklight"));
var display = new GroveBacklight_1.default();
var roundNumber = function (n) { return Math.round(n * 100) / 100; };
var Billboard = /** @class */ (function () {
    function Billboard() {
        this.start = null;
        this.end = null;
        this.current = null;
        this.dict = {};
        this.shouldPlay = false;
    }
    Billboard.prototype.next = function () {
        if (!this.current)
            return;
        this.current = this.current.next;
        if (!this.current)
            this.current = this.start;
    };
    Billboard.prototype.push = function (sensor, reading, color) {
        if (this.dict['sensor'])
            return;
        var item = {
            content: {
                reading: reading,
                sensor: sensor,
                color: color,
            },
            next: null,
        };
        if (this.end) {
            this.end.next = item;
        }
        this.end = item;
        if (!this.start) {
            this.start = item;
            this.current = item;
        }
        this.dict[sensor] = item;
    };
    Billboard.prototype.updateReading = function (sensor, reading) {
        if (!this.dict[sensor])
            return;
        this.dict[sensor].content.reading = reading;
    };
    Billboard.prototype.printTime = function (durationInSecs) {
        return __awaiter(this, void 0, void 0, function () {
            var i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        i = 1;
                        _a.label = 1;
                    case 1:
                        if (!(i <= durationInSecs * 2)) return [3 /*break*/, 4];
                        display.print([new Date().toDateString(), new Date().toLocaleTimeString()], [255, 255, 255]);
                        return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, 500); })];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    Billboard.prototype.printReading = function (durationInSecs, sensor) {
        return __awaiter(this, void 0, void 0, function () {
            var value, formattedReading, unit, i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        value = sensor.reading.value;
                        formattedReading = typeof value === 'number' ? roundNumber(value) : value;
                        unit = sensor.reading.unit;
                        i = 1;
                        _a.label = 1;
                    case 1:
                        if (!(i <= durationInSecs * 2)) return [3 /*break*/, 4];
                        display.print([sensor.sensor, formattedReading + " " + unit], sensor.color);
                        return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(function () { return resolve(void 0); }, 500); })];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    Billboard.prototype.play = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.shouldPlay = true;
                        _a.label = 1;
                    case 1:
                        if (!this.shouldPlay) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.printTime(5)];
                    case 2:
                        _a.sent();
                        if (!!this.current) return [3 /*break*/, 4];
                        return [4 /*yield*/, new Promise(function (resolve) { return process.nextTick(resolve); })];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 1];
                    case 4: return [4 /*yield*/, this.printReading(3, this.current.content)];
                    case 5:
                        _a.sent();
                        this.next();
                        return [3 /*break*/, 1];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    Billboard.prototype.stop = function () {
        this.shouldPlay = false;
    };
    return Billboard;
}());
exports.default = Billboard;
