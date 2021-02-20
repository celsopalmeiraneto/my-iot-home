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
  color?:
    | [number, number, number]
    | ((reading: number) => [number, number, number]),
): Transmitter => {
  const checkIfShouldTransmit = thresholder(threshold);

  return async (reading, unit) => {
    const shouldTransmit = checkIfShouldTransmit(reading);
    if (shouldTransmit) {
      console.log(new Date(), sensorName, `${reading} ${unit}`);
      display.print(
        [sensorName, `${reading} ${unit}`],
        typeof color === 'function' ? color(reading) : color,
      );
    }
  };
};

const aIOTemperature = parseInt(process.env.AIO_TEMP_SENSOR || '-1');
const temperatureSensor = new GroveTemperature(
  aIOTemperature,
  transmitterFactory('Temperature', 0.5, (temp) => {
    if (temp <= 10) return [134, 134, 134];
    if (temp <= 15) return [149, 96, 50];
    if (temp <= 20) return [159, 77, 6];
    if (temp <= 25) return [159, 35, 6];

    return [89, 17, 8];
  }),
);

const aIOLight = parseInt(process.env.AIO_LIGHT_SENSOR || '-1');
const lightSensor = new GroveLight(
  aIOLight,
  transmitterFactory('Light', 1, [64, 114, 131]),
);

const aIOSound = parseInt(process.env.AIO_SOUND_SENSOR || '-1');
const soundSensor = new GroveSoundSensor(
  aIOSound,
  transmitterFactory('Sound', 50, [162, 210, 132]),
);

setInterval(() => {
  display.print(['Time', new Date().toTimeString()], [90, 116, 121]);
}, 5000);

temperatureSensor.start();
lightSensor.start();
soundSensor.start();
