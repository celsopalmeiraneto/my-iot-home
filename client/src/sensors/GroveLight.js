import {Light} from 'jsupm_light';

/**
 * @class
 * @param {number} analogicPort An analogic port.
 */
function GroveLight(analogicPort) {
  const light = new Light(analogicPort);

  /**
   * @function
   * @return {number} Lux from sensor
   */
  function valueInLux() {
    return light.value();
  }

  return {
    valueInLux,
  };
}

export default GroveLight;
