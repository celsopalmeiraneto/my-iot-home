"use strict";

var _GroveTemperature = _interopRequireDefault(require("./sensors/GroveTemperature"));

var _Temperature = _interopRequireDefault(require("myiothome-commons/lib/Temperature"));

var _GroveLight = _interopRequireDefault(require("./sensors/GroveLight"));

var _Luminosity = _interopRequireDefault(require("myiothome-commons/lib/Luminosity"));

var _utils = require("./utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var aIOTemperature = parseInt(process.env.AIO_TEMP_SENSOR);
var temperatureSensor = new _GroveTemperature.default(aIOTemperature);
var aIOLight = parseInt(process.env.AIO_TEMP_SENSOR);
var lightSensor = new _GroveLight.default(aIOLight);
setInterval(function () {
  var temperatureReading = temperatureSensor.temperatureInCelsius();
  var temp = new _Temperature.default(new Date(), temperatureReading);
  console.log('Temp', temp);
}, (parseInt(process.env.INTERVAL_TEMP_COLLECTION_SECS) || 1) * 1000);
var changedLuminosity = (0, _utils.thresholder)(1);
setInterval(function () {
  var lightInLumens = lightSensor.valueInLux();

  if (changedLuminosity(lightInLumens)) {
    var light = new _Luminosity.default(new Date(), lightInLumens);
    console.log('light', light);
  }
}, 1000);
//# sourceMappingURL=index.js.map