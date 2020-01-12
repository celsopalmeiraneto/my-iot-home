import Reading from './Reading';

/** Class representing a Temperature reading. */
class Temperature extends Reading{
  /**
   * @param {Date} readTime
   * @param {number} temperatureC 
   */
  constructor(readTime, temperatureC) {
    super(readTime);
    this.temperatureC = temperatureC;
  }
}

export default Temperature;