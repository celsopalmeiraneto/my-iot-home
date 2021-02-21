import GroveBacklight, { ColorRGB } from './displays/GroveBacklight';
import { Reading } from './types';
const display = new GroveBacklight();

interface LinkedListItem<T> {
  content: T;
  next: LinkedListItem<T> | null;
}

interface SensorReading {
  sensor: string;
  reading: Reading;
  color: ColorRGB;
}

const roundNumber = (n: number) => Math.round(n * 100) / 100;

export default class Billboard {
  private start: LinkedListItem<SensorReading> | null;
  private end: LinkedListItem<SensorReading> | null;
  private current: LinkedListItem<SensorReading> | null;
  private dict: Record<string, LinkedListItem<SensorReading>>;
  private shouldPlay: boolean;

  constructor() {
    this.start = null;
    this.end = null;
    this.current = null;
    this.dict = {};

    this.shouldPlay = false;
  }

  next() {
    if (!this.current) return;

    this.current = this.current.next;
    if (!this.current) this.current = this.start;
  }

  push(sensor: string, reading: Reading, color: ColorRGB) {
    if (this.dict['sensor']) return;

    const item: LinkedListItem<SensorReading> = {
      content: {
        reading,
        sensor,
        color,
      },
      next: null,
    };

    if (this.end) {
      this.end.next = item;
    }
    this.end = item;

    if (!this.start) {
      this.start = item;
      this.current = item;
    }

    this.dict[sensor] = item;
  }

  updateReading(sensor: string, reading: Reading) {
    if (!this.dict[sensor]) return;

    this.dict[sensor].content.reading = reading;
  }

  private async printTime(durationInSecs: number) {
    for (let i = 1; i <= durationInSecs * 2; i++) {
      display.print(
        [new Date().toDateString(), new Date().toLocaleTimeString()],
        [255, 255, 255],
      );

      await new Promise((resolve) => setTimeout(resolve, 500));
    }
  }

  private async printReading(durationInSecs: number, sensor: SensorReading) {
    const value = sensor.reading.value;
    const formattedReading =
      typeof value === 'number' ? roundNumber(value) : value;
    const unit = sensor.reading.unit;

    for (let i = 1; i <= durationInSecs * 2; i++) {
      display.print(
        [sensor.sensor, `${formattedReading} ${unit}`],
        sensor.color,
      );

      await new Promise((resolve) => setTimeout(() => resolve(void 0), 500));
    }
  }

  async play() {
    this.shouldPlay = true;
    while (this.shouldPlay) {
      await this.printTime(5);

      if (!this.current) {
        await new Promise((resolve) => process.nextTick(resolve));
        continue;
      }

      await this.printReading(3, this.current.content);

      this.next();
    }
  }

  stop() {
    this.shouldPlay = false;
  }
}
