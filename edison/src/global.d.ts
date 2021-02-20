declare module 'mraa' {
  export class Aio {
    constructor(pin: number);

    read(): number;
  }

  export class I2c {
    constructor(bus: number, raw: boolean);

    writeByte(data: number): void;
  }
}

declare module 'jsupm_light' {
  export class Light extends Aio {
    constructor(pin: number);

    /**
     * @return value in lux
     */
    value(): number;
  }
}

declare module 'jsupm_mic' {
  export const thresholdContext: any;
  export class uint16Array {
    constructor(len: number);
  }
  export class Microphone extends Aio {
    constructor(pin: number);

    getSampledWindow(
      freqMS: number,
      numberOfSamples: number,
      buffer: uint16Array,
    ): number;
    findThreshold: any;
    printGraph: any;
  }
}

declare module 'jsupm_jhd1313m1' {
  export class Jhd1313m1 {
    constructor(bus: number, lcdAddress: number, rgbAddress: number);

    autoscrollOff(): number;
    autoscrollOn(): number;
    backlightOff(): number;
    backlightOn(): number;
    clear(): number;
    createChar(charSlot: number, charData: Uint8Array);
    cursorBlinkOff(): number;
    cursorBlinkOn(): number;
    cursorOff(): number;
    cursorOn(): number;
    entryLeftToRight(): number;
    entryRightToLeft(): number;
    displayOff(): number;
    displayOn(): number;
    scroll(direction: boolean): number;
    scrollDisplayLeft(): number;
    scrollDisplayRight(): number;
    setColor(r: number, g: number, b: number): number;
    setCursor(row: number, column: number): number;
    write(msg: string): number;
  }
}
