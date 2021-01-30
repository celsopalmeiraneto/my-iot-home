import GroveTemperature from './sensors/GroveTemperature';
import GroveLight from './sensors/GroveLight';
import {thresholder} from './utils';

const aIOTemperature = parseInt(process.env.AIO_TEMP_SENSOR || '-1');
const temperatureSensor = new GroveTemperature(aIOTemperature);

const aIOLight = parseInt(process.env.AIO_TEMP_SENSOR || '-1');
const lightSensor = new GroveLight(aIOLight);

setInterval(() => {
  const temperatureReading = temperatureSensor.temperatureInCelsius();

  console.log('Temp', temperatureReading);
}, (parseInt(process.env.INTERVAL_TEMP_COLLECTION_SECS || '1')) * 1000);


const changedLuminosity = thresholder(1);
setInterval(() => {
  const lightInLumens = lightSensor.valueInLux();

  if (changedLuminosity(lightInLumens)) {
    console.log('light', lightInLumens);
  }
}, 1000);

