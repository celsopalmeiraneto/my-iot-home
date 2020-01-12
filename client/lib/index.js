"use strict";

var _mqtt = require("mqtt");

var _GroveTemperature = _interopRequireDefault(require("./sensors/GroveTemperature.js"));

var _Temperature = _interopRequireDefault(require("myiothome-commons/Temperature"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mqttClient = (0, _mqtt.connect)(process.env.MQTT_SERVER);
var temperatureSensor = new _GroveTemperature.default(parseInt(process.env.AIO_TEMP_SENSOR));
setInterval(function () {
  var temp = new _Temperature.default(new Date(), temperatureSensor.temperatureInCelsius());
  mqttClient.publish('temperature', JSON.stringify(temp));
}, (parseInt(process.env.INTERVAL_TEMP_COLLECTION_SECS) || 1) * 1000);