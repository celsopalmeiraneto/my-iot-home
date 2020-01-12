"use strict";

var _mqtt = require("mqtt");

var _GroveTemperature = _interopRequireDefault(require("./sensors/GroveTemperature"));

var _Temperature = _interopRequireDefault(require("myiothome-commons/lib/Temperature"));

var _GroveLight = _interopRequireDefault(require("./sensors/GroveLight"));

var _Luminosity = _interopRequireDefault(require("myiothome-commons/lib/Luminosity"));

var _utils = require("./utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mqttClient = (0, _mqtt.connect)(process.env.MQTT_SERVER);
var aIOTemperature = parseInt(process.env.AIO_TEMP_SENSOR);
var temperatureSensor = new _GroveTemperature.default(aIOTemperature);
var aIOLight = parseInt(process.env.AIO_TEMP_SENSOR);
var lightSensor = new _GroveLight.default(aIOLight);
setInterval(function () {
  var temperatureReading = temperatureSensor.temperatureInCelsius();
  var temp = new _Temperature.default(new Date(), temperatureReading);
  mqttClient.publish('temperature', JSON.stringify(temp));
}, (parseInt(process.env.INTERVAL_TEMP_COLLECTION_SECS) || 1) * 1000);
var changedLuminosity = (0, _utils.thresholder)(1);
setInterval(function () {
  var lightInLumens = lightSensor.valueInLux();

  if (changedLuminosity(lightInLumens)) {
    var light = new _Luminosity.default(new Date(), lightInLumens);
    mqttClient.publish('luminosity', JSON.stringify(light));
  }
}, 1000);
//# sourceMappingURL=index.js.map