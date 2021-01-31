export interface Transmitter {
  (reading: number, unit: string): Promise<void>
}