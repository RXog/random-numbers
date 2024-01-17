function randomNumbers(min, max, options = {}) {
  if (max === undefined || typeof max === "object") {
    options = typeof max === "object" ? max : {};
    max = min;
    min = 0;
  }

  [min, max] = [Math.min(min, max), Math.max(min, max)];

  const { exclude } = options;

  let availableNumbers = Array.from(
    { length: max - min + 1 },
    (_, i) => i + min
  );

  if (exclude) {
    const filterCondition = Array.isArray(exclude)
      ? (num) => !exclude.includes(num)
      : (num) => num < exclude.start || num > exclude.end;

    availableNumbers = availableNumbers.filter(filterCondition);
  }

  return availableNumbers.length === 0
    ? null
    : availableNumbers[Math.floor(Math.random() * availableNumbers.length)];
}
