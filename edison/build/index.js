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
var GroveTemperature_1 = __importDefault(require("./sensors/GroveTemperature"));
var GroveLight_1 = __importDefault(require("./sensors/GroveLight"));
var utils_1 = require("./utils");
var GroveSoundSensor_1 = __importDefault(require("./sensors/GroveSoundSensor"));
var Billboard_1 = __importDefault(require("./Billboard"));
var billboard = new Billboard_1.default();
var transmitterFactory = function (sensorName, threshold, color) {
    var checkIfShouldTransmit = utils_1.thresholder(threshold);
    billboard.push(sensorName, {
        value: threshold,
        unit: '--',
    }, color || [255, 255, 255]);
    return function (reading, unit) { return __awaiter(void 0, void 0, void 0, function () {
        var shouldTransmit;
        return __generator(this, function (_a) {
            billboard.updateReading(sensorName, { value: reading, unit: unit });
            shouldTransmit = checkIfShouldTransmit(reading);
            if (shouldTransmit) {
                console.log(new Date(), sensorName, reading + " " + unit);
            }
            return [2 /*return*/];
        });
    }); };
};
var aIOTemperature = parseInt(process.env.AIO_TEMP_SENSOR || '-1');
var temperatureSensor = new GroveTemperature_1.default(aIOTemperature, transmitterFactory('Temperature', 0.5, [89, 17, 8]));
var aIOLight = parseInt(process.env.AIO_LIGHT_SENSOR || '-1');
var lightSensor = new GroveLight_1.default(aIOLight, transmitterFactory('Light', 1, [64, 114, 131]));
var aIOSound = parseInt(process.env.AIO_SOUND_SENSOR || '-1');
var soundSensor = new GroveSoundSensor_1.default(aIOSound, transmitterFactory('Sound', 50, [162, 210, 132]));
temperatureSensor.start();
lightSensor.start();
soundSensor.start();
void billboard.play();
