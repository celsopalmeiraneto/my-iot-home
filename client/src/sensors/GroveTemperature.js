import {Aio} from 'mraa';

const _B = 4275;
const _R0 = 100000;

/**
 * @return {object} Object containing functions. 
 * @param {number} analogicPort 
 */
function GroveTemperature(analogicPort) {
  const port = new Aio(analogicPort);

  /**
   * @return {number} The temperature in degreees Celsius
   */
  function temperatureInCelsius() {
    const reading = port.read();

    let R = 1023 / reading - 1;
    R = _R0 * R;

    return 1 / (Math.log(R / _R0) / _B + 1 / 298.15) - 273.15;
  }

  return {
    temperatureInCelsius,
  };
}

export default GroveTemperature;
