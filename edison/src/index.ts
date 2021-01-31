import GroveTemperature from './sensors/GroveTemperature';
import GroveLight from './sensors/GroveLight';
import { Transmitter } from './types';
import { thresholder } from './utils';


const transmitterFactory = (sensorName: string, threshold: number): Transmitter => {
  const checkIfShouldTransmit = thresholder(threshold)

  return async (reading, unit) => {
    const shouldTransmit = checkIfShouldTransmit(reading)
    if (shouldTransmit) {
      console.log(new Date(), sensorName, `${reading} ${unit}`)
    }
  }
}


const aIOTemperature = parseInt(process.env.AIO_TEMP_SENSOR || '-1');
const temperatureSensor = new GroveTemperature(aIOTemperature, transmitterFactory('Temperature', 0.5));

const aIOLight = parseInt(process.env.AIO_LIGHT_SENSOR || '-1');
const lightSensor = new GroveLight(aIOLight, transmitterFactory('Light', 1));

temperatureSensor.start()
lightSensor.start()
