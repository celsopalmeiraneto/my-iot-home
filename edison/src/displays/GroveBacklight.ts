import { Jhd1313m1 } from 'jsupm_jhd1313m1';

export interface ColorRGB {
  r: number;
  g: number;
  b: number;
}

export default class GroveBacklight {
  lcd: Jhd1313m1;

  constructor() {
    this.lcd = new Jhd1313m1(0, 0x3e, 0x62);
  }

  print(text: string, color: ColorRGB = { r: 0, g: 0, b: 0 }) {
    this.lcd.clear();
    this.lcd.setColor(color.r, color.g, color.b);
    this.lcd.write(text);
  }
}
