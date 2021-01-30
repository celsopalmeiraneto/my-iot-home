"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const GroveTemperature_1 = __importDefault(require("./sensors/GroveTemperature"));
const GroveLight_1 = __importDefault(require("./sensors/GroveLight"));
const utils_1 = require("./utils");
const aIOTemperature = parseInt(process.env.AIO_TEMP_SENSOR || '-1');
const temperatureSensor = new GroveTemperature_1.default(aIOTemperature);
const aIOLight = parseInt(process.env.AIO_TEMP_SENSOR || '-1');
const lightSensor = new GroveLight_1.default(aIOLight);
setInterval(() => {
    const temperatureReading = temperatureSensor.temperatureInCelsius();
    console.log('Temp', temperatureReading);
}, (parseInt(process.env.INTERVAL_TEMP_COLLECTION_SECS || '1')) * 1000);
const changedLuminosity = utils_1.thresholder(1);
setInterval(() => {
    const lightInLumens = lightSensor.valueInLux();
    if (changedLuminosity(lightInLumens)) {
        console.log('light', lightInLumens);
    }
}, 1000);
