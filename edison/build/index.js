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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const GroveTemperature_1 = __importDefault(require("./sensors/GroveTemperature"));
const GroveLight_1 = __importDefault(require("./sensors/GroveLight"));
const utils_1 = require("./utils");
const GroveSoundSensor_1 = __importDefault(require("./sensors/GroveSoundSensor"));
const transmitterFactory = (sensorName, threshold) => {
    const checkIfShouldTransmit = utils_1.thresholder(threshold);
    return (reading, unit) => __awaiter(void 0, void 0, void 0, function* () {
        const shouldTransmit = checkIfShouldTransmit(reading);
        if (shouldTransmit) {
            console.log(new Date(), sensorName, `${reading} ${unit}`);
        }
    });
};
const aIOTemperature = parseInt(process.env.AIO_TEMP_SENSOR || '-1');
const temperatureSensor = new GroveTemperature_1.default(aIOTemperature, transmitterFactory('Temperature', 0.5));
const aIOLight = parseInt(process.env.AIO_LIGHT_SENSOR || '-1');
const lightSensor = new GroveLight_1.default(aIOLight, transmitterFactory('Light', 1));
const aIOSound = parseInt(process.env.AIO_SOUND_SENSOR || '-1');
const soundSensor = new GroveSoundSensor_1.default(aIOSound, transmitterFactory('Sound', 1));
temperatureSensor.start();
lightSensor.start();
soundSensor.start();
