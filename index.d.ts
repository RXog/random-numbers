declare module "randomNumbers" {
  interface RandomNumbersOptions {
    exclude?: number | number[] | { start: number; end: number };
  }

  function randomNumbers(
    min: number,
    max: number,
    options?: RandomNumbersOptions
  ): number;

  export = randomNumbers;
}
