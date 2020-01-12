import {connect} from 'mqtt';
import GroveTemperature from './sensors/GroveTemperature';
import Temperature from 'myiothome-commons/lib/Temperature';
import GroveLight from './sensors/GroveLight';
import Luminosity from 'myiothome-commons/lib/Luminosity';
import { thresholder } from './utils';

const mqttClient = connect(process.env.MQTT_SERVER);

const aIOTemperature = parseInt(process.env.AIO_TEMP_SENSOR);
const temperatureSensor = new GroveTemperature(aIOTemperature);

const aIOLight = parseInt(process.env.AIO_TEMP_SENSOR);
const lightSensor = new GroveLight(aIOLight);

setInterval(() => {
  const temperatureReading = temperatureSensor.temperatureInCelsius();
  const temp = new Temperature(new Date(), temperatureReading);

  mqttClient.publish('temperature', JSON.stringify(temp));
}, (parseInt(process.env.INTERVAL_TEMP_COLLECTION_SECS) || 1) * 1000);


const changedLuminosity = thresholder(1);
setInterval(() => {
  const lightInLumens = lightSensor.valueInLux();

  if (changedLuminosity(lightInLumens)) {
    const light = new Luminosity(new Date(), lightInLumens);

    mqttClient.publish('luminosity', JSON.stringify(light));
  }
}, 1000);

