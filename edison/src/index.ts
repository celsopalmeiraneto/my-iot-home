import GroveTemperature from './sensors/GroveTemperature';
import GroveLight from './sensors/GroveLight';
import { Transmitter } from './types';

const transmitter: Transmitter = async (reading, unit) => {
  console.log(new Date(), reading, `${reading} ${unit}`)
}

const aIOTemperature = parseInt(process.env.AIO_TEMP_SENSOR || '-1');
const temperatureSensor = new GroveTemperature(aIOTemperature, transmitter);

const aIOLight = parseInt(process.env.AIO_LIGHT_SENSOR || '-1');
const lightSensor = new GroveLight(aIOLight, transmitter);

temperatureSensor.start()
lightSensor.start()
