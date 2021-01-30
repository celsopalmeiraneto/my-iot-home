import {Light} from 'jsupm_light';

class GroveLight {
  light: Light

  constructor(analogicPort: number) {
    if (analogicPort < 0) throw new Error('Analogic port must be GTE 0')

    this.light = new Light(analogicPort); 
  }

  valueInLux(): number {
    return this.light.value();
  }
}

export default GroveLight;
