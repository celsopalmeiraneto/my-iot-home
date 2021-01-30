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