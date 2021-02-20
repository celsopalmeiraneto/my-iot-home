import { Jhd1313m1 } from 'jsupm_jhd1313m1';

export type ColorRGB = [number, number, number];

export default class GroveBacklight {
  lcd: Jhd1313m1;

  constructor() {
    this.lcd = new Jhd1313m1(0, 0x3e, 0x62);
  }

  print(text: string[], color: ColorRGB = [255, 255, 255]) {
    this.lcd.clear();
    this.lcd.setColor(...color);
    this.lcd.write(text[0]);
    this.lcd.setCursor(1, 0);
    this.lcd.write(text[1]);
  }
}
