import {Light} from 'jsupm_light';
import { Transmitter } from '../types';
import { Sensor } from './Sensor';

class GroveLight extends Sensor {
  light: Light

  constructor(analogicPort: number, transmitter: Transmitter) {
    super(transmitter, 'Lux')

    if (analogicPort < 0) throw new Error('Analogic port must be GTE 0')

    this.light = new Light(analogicPort);
  }

  read() {
    return this.valueInLux()
  }

  valueInLux(): number {
    return this.light.value();
  }
}

export default GroveLight;
