import GroveTemperature from './sensors/GroveTemperature';
import Temperature from 'myiothome-commons/lib/Temperature';
import GroveLight from './sensors/GroveLight';
import Luminosity from 'myiothome-commons/lib/Luminosity';
import {thresholder} from './utils';

const aIOTemperature = parseInt(process.env.AIO_TEMP_SENSOR);
const temperatureSensor = new GroveTemperature(aIOTemperature);

const aIOLight = parseInt(process.env.AIO_TEMP_SENSOR);
const lightSensor = new GroveLight(aIOLight);

setInterval(() => {
  const temperatureReading = temperatureSensor.temperatureInCelsius();
  const temp = new Temperature(new Date(), temperatureReading);

  console.log('Temp', temp);
}, (parseInt(process.env.INTERVAL_TEMP_COLLECTION_SECS) || 1) * 1000);


const changedLuminosity = thresholder(1);
setInterval(() => {
  const lightInLumens = lightSensor.valueInLux();

  if (changedLuminosity(lightInLumens)) {
    const light = new Luminosity(new Date(), lightInLumens);
    console.log('light', light);
  }
}, 1000);

