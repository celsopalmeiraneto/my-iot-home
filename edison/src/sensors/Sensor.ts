import { Transmitter } from '../types';

export abstract class Sensor {
  transmitter: Transmitter;
  unit: string;

  constructor(transmitter: Transmitter, unit: string) {
    this.transmitter = transmitter;
    this.unit = unit;
  }

  abstract read(): number;

  start() {
    setInterval(() => {
      void this.transmitter(this.read(), this.unit);
    }, 1000);
  }
}
