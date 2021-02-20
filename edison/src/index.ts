import GroveTemperature from './sensors/GroveTemperature';
import GroveLight from './sensors/GroveLight';
import { Transmitter } from './types';
import { thresholder } from './utils';
import GroveSoundSensor from './sensors/GroveSoundSensor';
import GroveBacklight from './displays/GroveBacklight';

const display = new GroveBacklight();

const transmitterFactory = (
  sensorName: string,
  threshold: number,
): Transmitter => {
  const checkIfShouldTransmit = thresholder(threshold);

  return async (reading, unit) => {
    const shouldTransmit = checkIfShouldTransmit(reading);
    if (shouldTransmit) {
      console.log(new Date(), sensorName, `${reading} ${unit}`);
      display.print(`${sensorName.substr(0, 4)}: ${reading} ${unit}`);
    }
  };
};

const aIOTemperature = parseInt(process.env.AIO_TEMP_SENSOR || '-1');
const temperatureSensor = new GroveTemperature(
  aIOTemperature,
  transmitterFactory('Temperature', 0.5),
);

const aIOLight = parseInt(process.env.AIO_LIGHT_SENSOR || '-1');
const lightSensor = new GroveLight(aIOLight, transmitterFactory('Light', 1));

const aIOSound = parseInt(process.env.AIO_SOUND_SENSOR || '-1');
const soundSensor = new GroveSoundSensor(
  aIOSound,
  transmitterFactory('Sound', 50),
);

temperatureSensor.start();
lightSensor.start();
soundSensor.start();
