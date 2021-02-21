import { ReadingValue } from './types';

function thresholder(threshold: number) {
  let currentValue = Number.NaN;

  return (newValue: ReadingValue) => {
    if (typeof newValue !== 'number') return true;

    const min = currentValue - threshold;
    const max = currentValue + threshold;
    if (Number.isNaN(currentValue) || newValue < min || newValue > max) {
      currentValue = newValue;
      return true;
    } else {
      return false;
    }
  };
}

export { thresholder };
