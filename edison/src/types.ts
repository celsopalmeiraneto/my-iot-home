export type ReadingValue = number | string;
export interface Reading {
  value: ReadingValue;
  unit: string;
}

export interface Transmitter {
  (reading: ReadingValue, unit: Reading['unit']): Promise<void>;
}
