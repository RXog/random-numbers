function randomNumbers(min, max, options = {}) {
  if (max === undefined || typeof max === "object") {
    options = typeof max === "object" ? max : {};
    max = min;
    min = 0;
  }

  min = Math.min(min, max);
  max = Math.max(min, max);

  const { exclude } = options;

  const rangeSize = max - min + 1;

  for (let attempt = 0; attempt < rangeSize; attempt++) {
    const randomNum = Math.floor(Math.random() * rangeSize) + min;

    if (
      !exclude ||
      (Array.isArray(exclude)
        ? !exclude.includes(randomNum)
        : randomNum < exclude.start || randomNum > exclude.end)
    ) {
      return randomNum;
    }
  }

  return null; // Retorna null se nenhum número válido for encontrado (por exemplo, devido a exclusões abrangendo todo o intervalo).
}
