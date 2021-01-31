declare module 'mraa' {
  export class Aio {
    constructor(pin: number)

    read(): number
  }
}

declare module 'jsupm_light' {
  export class Light extends Aio {
    constructor(pin: number)

    /***
     * @return value in lux
     */
    value(): number
  }
}

declare module 'jsupm_mic' {
  export const thresholdContext: any
  export class uint16Array {
    constructor(len: number)
  }
  export class Microphone extends Aio {
    constructor(pin: number)

    getSampledWindow(freqMS: number, numberOfSamples: number, buffer: uint16Array): number
    findThreshold: any
    printGraph: any
  }
}