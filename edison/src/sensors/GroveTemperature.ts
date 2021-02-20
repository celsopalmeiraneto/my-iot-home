import { Aio } from 'mraa';
import { Transmitter } from '../types';
import { Sensor } from './Sensor';

const _B = 4275;
const _R0 = 100000;

export class GroveTemperature extends Sensor {
  port: Aio;

  constructor(analogicPort: number, transmitter: Transmitter) {
    super(transmitter, 'C');

    if (analogicPort < 0) throw new Error('Analogic port must be GTE 0');

    this.port = new Aio(analogicPort);
  }

  read(): number {
    return this.temperatureInCelsius();
  }

  temperatureInCelsius(): number {
    const reading = this.port.read();

    let R = 1023 / reading - 1;
    R = _R0 * R;

    return 1 / (Math.log(R / _R0) / _B + 1 / 298.15) - 273.15;
  }
}

export default GroveTemperature;
