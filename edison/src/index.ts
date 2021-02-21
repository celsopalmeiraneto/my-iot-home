import GroveTemperature from './sensors/GroveTemperature';
import GroveLight from './sensors/GroveLight';
import { Transmitter } from './types';
import { thresholder } from './utils';
import GroveSoundSensor from './sensors/GroveSoundSensor';
import Billboard from './Billboard';

const billboard = new Billboard();

const transmitterFactory = (
  sensorName: string,
  threshold: number,
  color?: [number, number, number],
): Transmitter => {
  const checkIfShouldTransmit = thresholder(threshold);
  billboard.push(
    sensorName,
    {
      value: threshold,
      unit: '--',
    },
    color || [255, 255, 255],
  );

  return async (reading, unit) => {
    billboard.updateReading(sensorName, { value: reading, unit });
    const shouldTransmit = checkIfShouldTransmit(reading);
    if (shouldTransmit) {
      console.log(new Date(), sensorName, `${reading} ${unit}`);
    }
  };
};

const aIOTemperature = parseInt(process.env.AIO_TEMP_SENSOR || '-1');
const temperatureSensor = new GroveTemperature(
  aIOTemperature,
  transmitterFactory('Temperature', 0.5, [89, 17, 8]),
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

temperatureSensor.start();
lightSensor.start();
soundSensor.start();

void billboard.play();
