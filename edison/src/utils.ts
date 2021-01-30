function thresholder(threshold: number): (newValue: number) => boolean {
  let currentValue = Number.NaN;

  return (newValue) => {
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

export {thresholder};
