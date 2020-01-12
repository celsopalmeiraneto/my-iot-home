import Reading from './Reading';

/** Class representing a Luminosity reading.
 * @class
 * @property {number} luminosityInLux
*/
class Luminosity extends Reading{
  /**
   * @param {Date} readTime
   * @param {number} luminosityInLux 
   */
  constructor(readTime, luminosityInLux) {
    super(readTime);
    this.luminosityInLux = luminosityInLux;
  }
}

export default Luminosity;